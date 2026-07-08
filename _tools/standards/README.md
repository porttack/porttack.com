# Standards data and extraction tools

Machine-readable copies of the standards quoted in the "Soft Skills Are in the
Standards" post (2026-07-08) and its interactive skills/standards chart, plus
the script used to pull text out of the source PDFs. The underscore prefix on
`_tools/` keeps this directory out of the built Jekyll site.

The post's widget embeds this data inline in its `<script>` block; that copy is
the one the site serves. These JSON files are the same data in a reusable form
for future posts, alignment tables, or lesson-card work.

## Data files

- `cte-ict-anchor-standards.json` — the eleven CTE knowledge and performance
  anchor standards with full descriptions and every sub-standard, from the
  ICT sector edition (2013). ELA alignment notes dropped; the sector name is
  abbreviated to ICT. Note: 6.6 and 6.8 are identical in the source document.
- `ca-cs-9-12-core.json` — all 30 standards of the California 9-12 CS core
  (adopted 2018), grouped by concept strand (CS, NI, DA, AP, IC).
- `csta-core-practices.json` — the seven core practices with their
  end-of-grade-12 practice statements, from the K-12 Computer Science
  Framework (2016), used by both the CSTA 2017 standards and the CA 2018
  standards.

## Source documents (not committed; all at stable public URLs)

- CTE ICT sector standards (anchor standards on PDF pages 10-15):
  <https://www.cde.ca.gov/ci/ct/sf/documents/infocomtech.pdf>
- CA CS standards (9-12 core on PDF pages 103-132, one standard per page):
  <https://www.cde.ca.gov/be/st/ss/documents/csstandards.pdf>
- K-12 CS Framework (practice statements on PDF pages 83-94):
  <https://k12cs.org/wp-content/uploads/2016/09/K%E2%80%9312-Computer-Science-Framework.pdf>
- CSTA K-12 standards, 2017 (compact; references practices by number only):
  <https://csteachers.org/wp-content/uploads/2025/03/csta-k-12-computer-science-standards-revised.pdf>
- CSTA PK-12 standards Draft 3.0 (Dec 2025; next revision, expected 2027 —
  adds an AI specialty strand, four pillars, and seven "dispositions" on
  PDF page 28):
  <https://csteachers.org/wp-content/uploads/2025/12/Revised-CSTA-PK-12-Standards-Draft-3.0.pdf>

## Regenerating / extracting more

`extract_standards.py` downloads any of the PDFs above and dumps page text so
new sections can be pulled out (it needs `pypdf`: `pip install pypdf`). The
committed JSON was extracted with it and then hand-verified against the PDFs;
treat the PDFs as the source of truth for anything new.
