---
layout: post
title: "Little Brother / Big Brother"
date: 2026-06-14
categories: teaching
excerpt: "Cory Doctorow's <em>Little Brother</em> pulls students into questions of privacy, surveillance, encryption, and civil liberties -- questions that don't have clean answers and that students keep arguing about long after the unit ends. Also: the full reading sequence, lesson materials, and how it maps to California and AP CSP standards.<br><a href='/2026/06/14/little-brother.html'><img src='https://craphound.com/craphound/wp-content/cory/littlebrother-US-cover-small.jpg' alt='Little Brother by Cory Doctorow' style='max-height: 150px; width: auto; display: block; margin: 0.6em auto 0;'></a>"
excerpt_separator: <!--more-->
---

<a href="https://craphound.com/littlebrother/"><img src="https://craphound.com/craphound/wp-content/cory/littlebrother-US-cover-large.jpg" alt="Little Brother by Cory Doctorow" style="max-height: 250px; width: auto; display: block; margin: 0 auto 1em;"></a>

## How a novel helps students understand why computing matters

*Little Brother* is juvenile fiction about a group of teenagers who use cryptography, social engineering, software, and the internet to fight a government surveillance state. In a computer science classroom, it teaches digital literacy without students quite realizing they're learning it.

The novel pulls students into questions of privacy, security, surveillance, encryption, censorship, data collection, authentication, and the consequences technology carries for society. These map directly onto California's 9–12 Impacts of Computing standards (9-12.IC.23 through .30, in standards built on the CSTA K–12 framework), covering eight standards that make up a quarter of the state's high-school computer science core.

The book also opens doors to networking. Students encounter resilient communication systems, encrypted messaging, distributed networks, and the tension between centralized control and decentralized communication. These are natural entry points into California's networking standards on reliability, the design of the internet, security, and cryptography (9-12.NI.4 through .7). Counted together with the Impacts standards, that's roughly a third of the high-school core, reached through a story instead of a syllabus.

And it engages. The standards aren't handed over as a checklist; they surface from the plot. Students argue about whether surveillance makes a society safer. They debate privacy against security. They question who should control technology, and who should be trusted with data.

The novel turns abstract problems (privacy, security, law, surveillance, the uses of technological power) into things students experience through the characters. A lesson on encryption becomes Marcus trying to stay a step ahead of government monitoring. A lesson on network resilience becomes a group of teenagers trying to talk to each other when no ordinary channel can be trusted.

The book is more than a decade old, but it hasn't aged out of relevance. Doctorow, who writes about technology and society, gives students a vocabulary they keep applying to the present, connecting the novel to debates over social-media moderation, data collection, facial recognition, and the surveillance quietly built into ordinary consumer products. The technology changes; the questions don't.

Most computer science curricula are built to teach students how to program. *Little Brother* makes room for something a curriculum rarely does: it tells students why any of it is worth programming in the first place.

---

But that's only half of what I want them to leave with. Knowing how completely technology shapes your life can, by itself, be a bleak lesson, making computing feel like something that happens *to* you. The other half pushes back on that, and it's why I don't open the unit with *Little Brother* at all. I open it with the afterword to the sequel, *Homeland*.

The afterword is political in places, but that wasn't the part I wanted students to sit with. Its central claim is simpler and harder to dismiss: every technology we use, every freedom we enjoy, and every opportunity in front of us was built by people who came before us: software written by volunteers, networks built by strangers, systems made through cooperation rather than competition. Agree with its politics or not, the underlying point holds. The world we inherit is not fixed. It was built by people, and people can rebuild it.

That is the realization the unit is built around. The systems around us did not simply happen; they were designed by people, and they carry those people's values, assumptions, incentives, and tradeoffs. Anything that was designed can be redesigned. The students in that room are among the people who could do it.

That is what makes *Little Brother* land. The novel never stops asking questions without clean answers. How much privacy should we trade for security? Who should control information? What responsibilities come with powerful technology? What happens when a system built to protect people becomes a tool to control them?

Students may not remember every networking concept or cryptographic technique from the unit. They remember the questions. They leave knowing the questions are theirs to answer.

---

## The unit: reading order, standards, and scope & sequence

*A supplemental novel unit for first-year computer science students*

### How the novel fits the course

*Little Brother* runs **alongside** any first through forth year high school CS course as a supplement, not a replacement for programming instruction. The novel carries the impacts and networking strands (privacy, surveillance, encryption, civil liberties, licensing) that a code editor isn't the right instrument for. The programming work lives elsewhere in the course; the novel supplies the **why**.

### Reading order & scope and sequence

| # | Chapters | Theme & CS topics | CA standards | AP CSP |
|---|----------|-------------------|--------------|--------|
| 1 | **1–3** | The setup. ARGs, RFID/arphids, school surveillance, Marcus's tech fluency. "Would you give up your phone password?" as the opening hook. | NI (identifier basics), IC.23, IC.29 | 5.1, 5.6 |
| 2 | **4–6** | The BART/Bay Bridge bombing, DHS detention and interrogation, Marcus refusing to unlock his phone. The civil-liberties stakes land here. | IC.23, IC.30 | 5.1, 5.6 |
| 3 | **7–9** | Crypto payoff. Public/private keys, man-in-the-middle, the web-of-trust concept (7); traffic analysis (*encryption hides content, not pattern*) and the "make everyone abnormal" move (8); the family/surveillance fallout scene (9). | NI.6, NI.7, IC.23, IC.30 | 5.6, 4.1 |
| 4 | **10–11** | The web of trust actually gets built ([key-signing party](https://porttack.com/keygen)). Mesh/decentralized communication; Xnet momentum. | NI.4, NI.6, NI.7 | 4.1, 4.2, 5.6 |
| 5 | **12–13** | Surveillance tech detail (camera noise signatures and stripping them, arphid tracking, the limits of protected speech). Matrix-themed discussion deck. | NI.6, NI.7, IC.23, IC.30 | 5.6, 5.5 |
| 6 | **14** | Xnet press conference; anonymous speech, media, whistleblowing; M1k3y's identity pressure. Lighter on technical content, strong on civic literacy. | IC.23, IC.30 | 5.1, 5.5 |
| 7 | **15–16** | Xnet organizing and relationship beats. Narrative momentum; thin on new CS hooks (candidate for compression or teacher summary). | IC.23 | 5.1 |
| 8 | **17 + Introduction** | [**Crypto Wars**](https://docs.google.com/presentation/d/1gtE46uUj_wQlXWfdxtBLOv7oHNNxROgb/edit?usp=sharing) content paired with the book's Introduction for [**Creative Commons / copyright**](https://docs.google.com/presentation/d/1bC-1o6sW6UZQOy8p7VpzShud3Y03uMMu/edit?usp=sharing). Zeb's account of detention. The deliberate intro-at-the-end pairing turns licensing concrete: read the actual CC license on the book itself. | AP.12–22 (licensing), IC.28, IC.23 | 5.5, 5.6 |
| 9 | **18–19** | Marcus's detention comes home (18); Barbara the journalist, press freedom and accountability (19). Civic literacy and narrative payoff. | IC.23, IC.30 | 5.1, 5.5 |
| 10 | **20–22 + Epilogue** | Resolution and **agency**: the systems were built by people and can be rebuilt. Accountability, Marcus testifying, the hope/agency arc the whole unit points toward. | IC.23, IC.30 | 5.1 |

### Lesson materials

- **Crypto & the key-signing party (Groupings 3–4):** an interactive **["Key Exchange Party" tool](https://porttack.com/keygen)** that generates an ED25519 private key, public key, and fingerprint live on screen, simulating Chapter 10's key-signing party.
- **Crypto Wars: "Illegal Math" (Grouping 8, Ch 17):** [presentation](https://docs.google.com/presentation/d/1gtE46uUj_wQlXWfdxtBLOv7oHNNxROgb/edit?usp=sharing)
- **Creative Commons / copyright (Grouping 8, Ch 17 + Intro):** [presentation](https://docs.google.com/presentation/d/1bC-1o6sW6UZQOy8p7VpzShud3Y03uMMu/edit?usp=sharing)

### California standards coverage

California's 9–12 **core** runs CS.1–3, NI.4–7, DA.8–11, AP.12–22, IC.23–30 (thirty standards). Here's where the novel lands:

**Covered: the thematic core**
- **9-12.IC.23–.30** (Impacts of Computing): computing's effect on social, ethical, economic, and cultural practices; intellectual-property and licensing law; non-evident data collection; and weighing privacy against safety, law, and ethics. That's **eight standards (more than a quarter of the core)** and the spine of the unit. Strongest individual anchors: **IC.23, IC.28, IC.29, IC.30**.

**Covered / reinforced: networking**
- **9-12.NI.4–.7** (Networking & the Internet): the design characteristics of the internet (DNS, IP, scalability, reliability), network security, and comparing cryptographic techniques for secure transmission. The book hits the **security and cryptography** end squarely (NI.6, NI.7); the **architecture** end (NI.4) is reinforced rather than fully taught.

**Covered: licensing**
- The **Creative Commons** release of the book maps to the licensing standard in the **AP.12–22** strand. Students can read the actual CC license on the book *and* find it again on the CSTA standards document (abstract-to-concrete in one move).

### AP CSP coverage

The novel lands almost entirely in two of the five Big Ideas:

**Big Idea 5: Impact of Computing (IOC)**
- **5.1 Beneficial and Harmful Effects**: the surveillance state, dual-use technology, computing's effect on society (the whole arc).
- **5.5 Legal and Ethical Concerns**: intellectual property and licensing; the book's **Creative Commons** release is a textbook-perfect anchor (LO IOC-1.F).
- **5.6 Safe Computing**: PII and privacy, symmetric and **public-key encryption**, authentication and the web of trust. The crypto chapters map here directly (IOC-2).

**Big Idea 4: Computing Systems & Networks (CSN)**
- **4.1 The Internet**: how data moves: DNS, packets, routing, redundancy (CSN-1).
- **4.2 Fault Tolerance**: resilient, redundant networks; the Xnet / mesh material is a natural hook.

### Appendix: Doctorow's encouragement, and where other teachers have gone

Before building any of this, I wrote to Cory Doctorow in 2023 to ask whether other teachers had taught *Little Brother* in a computer science setting. His reply was immediate:

> **My note (May 2023):** I asked whether he knew of other teachers using *Little Brother* in a CS class, since it keeps students engaged and is full of discussion points about digital citizenship and security.
>
> **His reply:** "Yes, tons!" with pointers to the curriculum and teacher write-ups that have collected around the book.

In fact, it has been taught to both middle and high school students.

Doctorow releases the novel under a Creative Commons license precisely so it can be used this way, and the book's own back matter points readers to a publisher-produced educator's guide. A few stable starting points for anyone who wants to follow the same path:

- **The book, free and legal.** The Creative Commons text and download links live at [craphound.com/littlebrother](https://craphound.com/littlebrother/). *(The professional Random House audiobook, narrated by Kirby Heyborne, is a separate commercial product and is not free.)*
- **Tor's educator's guide.** Doctorow points to a publisher-produced reader's/educator's manual in the book's back matter, offering "tons of ideas for classroom, reading group and home discussions." The original publisher link has since moved, but library-hosted copies are easy to find, e.g. [Mentor Public Library's copy](https://www.mentorpl.org/wp-content/uploads/2014/01/Little-Brother-Cory-Doctorow-Discussion-Guide.pdf).
- **A discussion-based study guide.** [LiberalStudiesGuides.ca](http://liberalstudiesguides.ca/wp-content/uploads/sites/2/2017/07/Little-Brother.pdf) offers a *Little Brother* guide built explicitly around discussion-based inquiry and Socratic seminars, with chapter groupings (1–7, 8–14, 15–22) and guidance on grading participation rather than recall. Directly useful for a discussion-first version of the unit.
- **A student-built digital escape room.** In 2020, teacher Ulrich Oberender and his 11th-grade class in Germany built an ["Edu-Breakout"](https://craphound.com/littlebrother/2020/02/18/little-brother-a-virtual-escape-room-created-by-an-11th-grade-class-in-germany/), a digital escape room of puzzles drawn from *Little Brother* that engage with both the privacy technology and the privacy ethics in the book. Doctorow featured it on his site, the breakout still loads, and teachers can email the creator (obucate@gmail.com) to request the password for the accompanying Teacher's Guide.
- **Doctorow's own collection.** The [*Little Brother* category](https://craphound.com/category/littlebrother/) on craphound.com gathers years of posts, including teacher reports and classroom remixes.

---

*Reading order and groupings reflect how the unit was actually run; chapter boundaries for the earlier groupings are yours to confirm. Code references follow California's 2018 adoption (9-12.IC/NI/AP) and the current AP CSP Course and Exam Description (Big Ideas → Topics → Learning Objectives).*