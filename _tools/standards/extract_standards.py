#!/usr/bin/env python3
"""Dump text from the standards PDFs referenced in README.md.

Usage:
    pip install pypdf
    python3 extract_standards.py <source> [first_page] [last_page]

where <source> is one of: ict, ca-cs, framework, csta2017, csta3draft
(pages are 1-based and match the README's page pointers). PDFs are cached
in ./pdf-cache/, which is gitignored.

Examples:
    python3 extract_standards.py ict 10 15        # CTE ICT anchor standards
    python3 extract_standards.py ca-cs 103 132    # CA 9-12 core, 1 std/page
    python3 extract_standards.py framework 83 94  # practice statements
    python3 extract_standards.py csta3draft 28    # dispositions page
"""
import pathlib
import sys
import urllib.request

SOURCES = {
    "ict": "https://www.cde.ca.gov/ci/ct/sf/documents/infocomtech.pdf",
    "ca-cs": "https://www.cde.ca.gov/be/st/ss/documents/csstandards.pdf",
    "framework": "https://k12cs.org/wp-content/uploads/2016/09/K%E2%80%9312-Computer-Science-Framework.pdf",
    "csta2017": "https://csteachers.org/wp-content/uploads/2025/03/csta-k-12-computer-science-standards-revised.pdf",
    "csta3draft": "https://csteachers.org/wp-content/uploads/2025/12/Revised-CSTA-PK-12-Standards-Draft-3.0.pdf",
}


def main():
    if len(sys.argv) < 2 or sys.argv[1] not in SOURCES:
        sys.exit(__doc__)
    from pypdf import PdfReader  # deferred so --help works without pypdf

    name = sys.argv[1]
    cache = pathlib.Path(__file__).parent / "pdf-cache"
    cache.mkdir(exist_ok=True)
    pdf = cache / f"{name}.pdf"
    if not pdf.exists():
        print(f"downloading {SOURCES[name]} ...", file=sys.stderr)
        urllib.request.urlretrieve(SOURCES[name], pdf)

    reader = PdfReader(pdf)
    first = int(sys.argv[2]) if len(sys.argv) > 2 else 1
    last = int(sys.argv[3]) if len(sys.argv) > 3 else first
    for i in range(first - 1, min(last, len(reader.pages))):
        print(f"===== PAGE {i + 1} =====")
        print(reader.pages[i].extract_text() or "")


if __name__ == "__main__":
    main()
