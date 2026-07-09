---
layout: post
title: "Soft Skills Are Already in the Standards"
date: 2026-07-08
categories: draft
excerpt_separator: <!--more-->
excerpt: "Part 2: The skills employers want most are already written into California standards. The CTE anchor standards carry the human skills, the CS standards carry the technical ones, and the soft half goes untested, which has kept it honest and kept it quiet."
---

*Draft - in progress, not yet public*

{% include series-toc.html part=2 %}

<!--more-->

{% raw %}
<!-- Interactive "Skills <-> Standards" chart. The engine and the dataset both
     live in the shared library; this page only names the dataset and configures
     the tabs. See /assets/skills-widget.js and /assets/skills-widget-data.js. -->
<script src="/assets/skills-widget.js"></script>
<script src="/assets/skills-widget-data.js"></script>
<div id="wef-skills-widget" class="skills-widget">
  <div class="wsw-head">
    <h3 class="wsw-title">Interactive Chart: Skills &harr; Standards</h3>
    <div class="wsw-toggle" role="tablist" aria-label="Choose a view"></div>
  </div>

  <p class="wsw-caption"></p>

  <div class="wsw-chart" aria-live="polite"></div>

  <div class="wsw-legend">
    <span class="wsw-key"><i class="dot human"></i>Human / soft skill</span>
    <span class="wsw-key"><i class="dot tech"></i>Cognitive / technical</span>
    <span class="wsw-key"><i class="dot ai"></i>AI &amp; big data</span>
  </div>

  <p class="wsw-source">Source: World Economic Forum, <em>Future of Jobs Report 2025</em> (Figs. 3.3 &amp; 3.4; global; n&gt;1,000 employers), and the California CTE Model Curriculum Standards knowledge and performance anchor standards (2013, ICT sector edition). In the standards table, Rank is each skill's 2025 employer rank; skills marked 2030 appear only on the fastest-growing list. Coverage rates how fully the anchor standard covers the skill: strong = named at the anchor-standard level, partial = covered by sub-standards, gap = thin or missing. The match-up views draw the mapping as lines: solid = strong, dashed = partial, no line = gap; hover or tap any item on the right to read its full text with the mapped sub-standards highlighted. The CTE match-up quotes the ICT sector edition (sector name abbreviated to ICT). The CSTA 2026 match-up sets the same skills against the CSTA PK-12 Standards Draft 3.0 (December 2025; a draft, subject to change): its four pillars of practices, seven dispositions, and five concepts, all quoted from the draft.</p>
</div>

<script>
SkillsWidget.init({
  el: "#wef-skills-widget",
  dataset: "wef-skills",
  // (1) Default tab shown on load (a matching URL hash still wins).
  defaultView: "match",
  // (3) Which tabs are shown, in order. (2) Each anchor is a deep-link target.
  tabs: [
    {view:"now",     label:"Most essential today",    anchor:"wef-skills-now"},
    {view:"growing", label:"Growing fastest by 2030", anchor:"wef-skills-growing"},
    {view:"match",   label:"CTE Match-up",            anchor:"wef-skills-match"},
    {view:"csta3",   label:"CSTA 2026 Match-up",      anchor:"wef-skills-csta3"}
  ],
  // Views with no tab, still reachable by their #anchor deep link.
  // "cte" is the standards table; "csta" is the CSTA 2017/CA 2018 match-up.
  hiddenViews: [
    {view:"cte",  anchor:"wef-skills-cte"},
    {view:"csta", anchor:"wef-skills-csta"}
  ]
  // Printing is WYSIWYG: whichever tab is showing prints as-is, lines and all.
});
</script>
{% endraw %}

*Part 2 of a series. [Part 1](/2026/06/19/optimizing-for-wrong-skills.html) argued that a generation of content-mastery optimization squeezed out many of the skills employers actually want. This piece points out that in 2013 California did put many of these skills into CTE (Career Technical Education) Anchor Standards.*

## What is a CTE Anchor standard?

California organizes career technical education into fifteen industry sectors: health science, construction, agriculture, and the one my courses live in, Information and Communication Technologies (ICT). Each sector defines pathway standards for its trade-specific skills. Underneath all of them, though, sit the same eleven **anchor standards**, adopted with the [CTE Model Curriculum Standards](https://www.cde.ca.gov/ci/ct/sf/ctemcstandards.asp) in 2013: the things California says every CTE student should learn no matter which sector they chose. Communicate. Plan a career. Solve problems. Take responsibility. Act ethically. Lead a team. And then Standard 11, the quiet radical of the group: demonstrate all of it through work-based learning and a portfolio of real work. That is project-based learning in all but name, written into a state document.

The chart above matches those eleven anchors against the skills more than a thousand employers told the World Economic Forum they need most, the same data Part 1 was built on. Hover or tap any standard to read the state's own words.

### CSTA 3.0

The second match-up looks at where computer science standards are heading. CSTA, the Computer Science Teachers Association, publishes the K-12 standards that most states build their CS standards on. California modified and adopted the 2017 revision, CSTA 2.0, as its own [computer science standards](https://www.cde.ca.gov/be/st/ss/documents/csstandards.pdf) in 2018, and it will likely do the same with the next version. That next version is taking shape now: the [draft of CSTA 3.0](https://csteachers.org/wp-content/uploads/2025/12/Revised-CSTA-PK-12-Standards-Draft-3.0.pdf), expected as soon as 2026, organizes computer science into five concepts, four **pillars** of practices like Inclusive Collaboration and Human-Centered Design, and seven **dispositions**, habits of mind like persistence and curiosity. The pillars and dispositions are where the soft skills live, and the CSTA 2026 Match-up tab maps the employer list against all three layers.

## The quiet irony

Part 1 ended in a challenge: we built school around what a test can see, and the skills employers now value most are the ones a test can't. The natural next demand would be new standards. Here is the surprise. California doesn't need them. The skills are already written down, and have been for over a decade.

What makes this odd rather than triumphant is that no statewide assessment looks at the anchor standards. I want to be careful with that observation, because it is not a scandal and there is no villain in it. Assessing collaboration or resilience fairly, at scale, across millions of students is genuinely hard; nobody anywhere has fully cracked it. The accountability system concentrates on what it can measure well and defensibly, and that is a reasonable engineering choice. But the choice has a side effect worth naming.

## Unmeasured, and better for it

The side effect cuts both ways, and the first way is good. Because no high-stakes test ever touched the anchor standards, they never went through the narrowing that reshaped reading and math instruction. Nobody ever had to reduce "participate in interactive teamwork to solve real sector issues" to something a bubble sheet could see, so it still describes the whole capacity instead of a proxy for it. The standards stayed honest because nobody was optimizing them.

The other way is the honest cost. A standard without an assessment depends entirely on the program that delivers it. In a strong CTE classroom the anchor standards are the daily weather: teams, deadlines, documentation, demonstrations. In a weaker one they are a poster on the wall. Both classrooms report the same course code. That variance is real, and pretending otherwise would oversell the good news.

## The CS standards carry the technical half

CTE is not the only place California wrote the employer list down. The state's [computer science standards](https://www.cde.ca.gov/be/st/ss/documents/csstandards.pdf), adopted in 2018 and built on the CSTA K-12 framework, split the job differently, and they cover almost exactly the ground the CTE anchors leave open.

The technical end first. **AI and big data**, the one skill with no line in the chart above, has a real home here: the high school core devotes four standards to Data and Analysis (9-12.DA.8-11), and the specialty tier names artificial intelligence outright (9-12S.AP.10: "Describe how artificial intelligence drives many software and physical systems"). **Networks and cybersecurity** gets four more (9-12.NI.4-7). **Technological literacy** is, arguably, all thirty standards in the core.

The soft skills are in there too, but they live in a different layer. Every standard is tagged with one or more of seven **core practices**, and at least four of the seven are employer-list skills wearing computer science clothes:

- **Collaborating Around Computing**: teamwork, including working in roles on a shared artifact.
- **Communicating About Computing**: explaining your work to audiences who did not build it.
- **Fostering an Inclusive Computing Culture**: empathy in design, building for people unlike yourself.
- **Creating Computational Artifacts**: creative thinking, which the CTE anchors cover only thinly.
- (**Testing and Refining** is at least a cousin of resilience: iterate, debug, try again.)

Put the two documents side by side and the complementarity is striking. The CTE anchors name the human skills and miss AI; the CS standards name AI and the technical skills and carry the human ones as practices rather than headline outcomes. Neither document alone covers the employer list. The union covers all thirteen. I've seen this from the CS side already: my [*Little Brother* unit](/2026/06/14/little-brother.html) maps a novel onto the Impacts of Computing and Networking strands, eight and four standards respectively, over a third of the core reached through a story.

And the documents are not frozen. CSTA is revising its standards now, with the next version expected as soon as 2026, and the [current draft](https://csteachers.org/wp-content/uploads/2025/12/Revised-CSTA-PK-12-Standards-Draft-3.0.pdf) reads like it was written with this chart open. "AI is Part of CS" is a named priority, and not a bolted-on one: AI outcomes run through the foundational standards for all students, elementary school onward (E4-ALG-02 has fourth graders train a classification model; HS-PRO-17 has high schoolers evaluate AI-generated code against program requirements), with a full artificial intelligence specialty strand on top. Ethics and inclusive collaboration are elevated to pillars that organize everything else. And a new category called **dispositions** names seven habits of mind the current standards leave implicit: creativity, sense of belonging, critical thinking, persistence, reflectiveness, resourcefulness, and curiosity. That closes the gaps the current standards leave: motivation and curiosity arrive as reflectiveness and curiosity, resilience as persistence, and environmental stewardship enters the ethics pillar itself, which asks students to avoid serious environmental harm. The CSTA 2026 Match-up tab above draws the result: every skill on the employer list has a line. The draft even includes a section on how its specialty standards relate to CTE. Standard by standard, revision by revision, the documents are converging on the employer list.

One more detail worth a smile: both documents insist on ethics. CTE anchor 8.0 and the CS core's eight Impacts of Computing standards (9-12.IC.23-30) are the two largest blocks of "soft" content in either document, and ethics appears nowhere on the employer survey at all. The standards writers put it there anyway. Good.

## The elective wing

Part 1 named a deeper inequity: the students who pay the highest price for a content-only curriculum are the ones who don't pick up the human skills at home, or in some other opt-in program. Here is the uncomfortable observation this piece adds. CTE is the opt-in program. So is the CS pathway. The state wrote the other half of school down, then filed nearly all of it in the elective wing. A student is guaranteed the anchor standards only if they choose a pathway, and only if their school offers a strong one. I don't say that to diminish the elective wing; it is where I teach, and it is where this work is furthest along. I say it because the skills are too important to stay there.

## Existence proof, with honest caveats

Am I giving two stacks of paper too much credit? Partly, and it is worth saying exactly where. The anchor standards are aspirational, and identical across all fifteen sectors. They are 2013 vintage, and the AI gap in the chart is proof that nobody sees thirteen years ahead. Standards on a page are not standards in a classroom, and program quality varies enormously. All true.

But the existence proof stands, and it is the point of this piece. The State Board of Education has already adopted teamwork, flexibility, problem solving, creative work, communication, and portfolio-based demonstration as real, teachable outcomes, twice, in two different documents. When someone says soft skills are too fuzzy to be standards, there are two California state documents that say otherwise. The question was never whether these skills belong in school. The state settled that years ago. The question is how to see them without flattening them.

## What it would take (bridge to Part 3)

The ask is not new standards. It is new evidence: ways of seeing these skills that don't kill them in the measuring. How do you grade teamwork without turning it into a rubric performance? How do you verify understanding in the age of AI without a bubble sheet? These are genuinely hard problems, which is exactly why they deserve better than a shrug.

Industry has spent decades building lightweight ways to see this kind of work: demos, reviews, decision records, retrospectives. They translate to a classroom better than you'd think. That is [Part 3](/2026/07/08/run-the-classroom-like-a-studio.html).

---

*All opinions are my own. Feedback and collaboration welcome. -- Eric Brown*

**References**

- California Department of Education, [CTE Model Curriculum Standards](https://www.cde.ca.gov/ci/ct/sf/ctemcstandards.asp) (adopted 2013).
- [Information and Communication Technologies sector standards](https://www.cde.ca.gov/ci/ct/sf/documents/infocomtech.pdf) (PDF), including the knowledge and performance anchor standards quoted above.
- California Department of Education, [Computer Science Standards for California Public Schools](https://www.cde.ca.gov/be/st/ss/documents/csstandards.pdf) (PDF, adopted 2018); individual standards browsable at the [CDE standards site](https://www2.cde.ca.gov/cacs/cs).
- Computer Science Teachers Association, [CSTA K-12 Computer Science Standards](https://csteachers.org/k12standards/) (revised 2017), including the seven core practices.
- Computer Science Teachers Association, [Revised PK-12 Computer Science Standards: Draft 3.0](https://csteachers.org/wp-content/uploads/2025/12/Revised-CSTA-PK-12-Standards-Draft-3.0.pdf) (December 2025; final expected as soon as 2026), the in-progress revision with the AI strand, pillars, and dispositions quoted in the CSTA 2026 match-up.
- World Economic Forum, [Future of Jobs Report 2025](https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf) (Figs. 3.3 and 3.4).

# TODO — Part 2: "Soft Skills Are Already in the Standards"

Post: `_posts/2026-07-08-hope-in-the-standards.md` (slug stays `hope-in-the-standards`)
Status: draft, not public

Working thesis: the state already adopted these skills. They are invisible not
because anyone disagrees, but because nothing in the accountability system asks
anyone to look. That is a measurement gap, not a villain.

---

## 1. Retitle + sync

- [ ] `title:` → "Soft Skills Are Already in the Standards"
- [ ] `_includes/series-toc.html` — Part 2 line currently reads "The Right Skills
      Are Hidden in the Standards"; it never matched the post. Fix both the
      `is-current` span and the `<a>`.
- [ ] Decide on Part 3 retitle → "Run the Classroom Like a Studio"? (slug already
      says this). If yes, update the TOC there too.

## 2. Research: Perkins V (the core new evidence)

The point to establish: **states are never required to report anything about
soft skills.** Compliance is possible without one data point on the anchor
standards.

- [ ] Confirm the three secondary "program quality" indicator options states
      choose from under Perkins V:
      1. recognized postsecondary credential attainment
      2. postsecondary credits (dual/concurrent enrollment, articulation)
      3. participation in work-based learning
      Source: ACTE, *Perkins 101: Accountability*
      <https://www.acteonline.org/wp-content/uploads/2025/03/ACTE-Perkins101-Accountability-Feb2025.pdf>
- [ ] Confirm states *may* add a state-developed measure of success (Sec.
      113(b)(2)(iv), indicator 4) — this is the loophole that makes the
      soft-skills measure legal but optional. Verify the statutory cite.
      <https://www.acteonline.org/wp-content/uploads/2024/05/PerkinsV_Quality_Indicators_20221201_508.pdf>
- [ ] Note that the work-based learning indicator measures **participation, not
      skill** — Advance CTE / ECS say the measure isn't required to be structured
      around completion or attainment.
      <https://www.ecs.org/the-state-of-cte-work-based-learning-in-perkins-v-state-plans/>
- [ ] Find **California's** Perkins V state plan. Which indicator(s) did CA pick?
      Get the actual document, not a summary. (Try the WIOA State Plan Portal —
      other states' plans are there: <https://wioaplans.ed.gov/>)
- [ ] Check the CA School Dashboard **College/Career Indicator** for the same
      question: what earns a student "prepared" status? Is any of it teamwork,
      communication, or problem solving?

## 3. Research: the federal government concedes the point

- [ ] US ED, Office of Career, Technical, and Adult Education — Employability
      Skills Framework. The landing page states that defining, measuring, and
      building these skills — even naming them — is challenging. That is Part 2's
      whole argument, admitted by the people who write the rules.
      <https://cte.ed.gov/initiatives/employability-skills-framework>
- [ ] Get the exact wording + a stable citation. Paraphrase, don't block-quote.

## 4. Research: the honest counterexample (keep the piece from overclaiming)

If a state assesses these skills, "too fuzzy to measure" is empirically false.
This *strengthens* the argument — but only if I represent it fairly.

- [ ] Idaho Workplace Readiness Assessment (WRA): required of CTE capstone
      students and seniors in at least their second CTE course, grades 9–12.
      Measures career-readiness standards.
      <https://cte.idaho.gov/programs/secondary-education/workplace-readiness/>
- [ ] Find out **what the WRA actually is.** Critical: if it's a multiple-choice
      knowledge test *about* soft skills, that is the exact failure mode Part 1
      warns against — measuring recall of teamwork instead of teamwork. Either
      way it's usable:
      - if it's performance-based → proof it can be done
      - if it's a bubble sheet → proof that measuring it badly is the real risk,
        which sets up Part 3's "new evidence, not new standards"
- [ ] Scan for other states with employability-skill measures (candidates:
      Virginia's Workplace Readiness Skills assessment, Kansas, Utah).
      Two examples is enough; don't build a fifty-state table.

## 5. Research: I'm not alone (contemporary voices)

- [ ] eSchool News, "Rethinking employability skills in K–12 education" (Jul
      2026). Argues employability skills become visible and measurable when the
      experience–reflect–apply cycle is combined with rubrics, observation, peer
      assessment, and portfolios. Quotes David Yanoski (Marzano Research) and
      Hymel. Part 3 is a concrete instance of exactly this.
      <https://www.eschoolnews.com/innovative-teaching/2026/07/06/rethinking-employability-skills-in-k-12-education/>
- [ ] Optional: AFT / James Stone, "Signature Features of High-Quality CTE"
      (2024) — frames engaging students in employability skills as the *primary
      challenge* of high-quality CTE.
      <https://www.aft.org/ae/spring2024/stone>

## 6. Writing

- [ ] **Reframe the villain.** Current draft says the soft half "goes untested,
      which has kept it honest and kept it quiet." Keep that line — it's the best
      one in the front matter and it's generous. Build the new Perkins section
      around it. Nobody skipped these standards; nobody was ever asked to look.
      Part 1 has a villain. Part 2 reveals there wasn't one. That turn is what
      makes the piece forwardable to a principal.
- [ ] **Add the cheating-question paragraph** (near the end, before "What it would
      take"). The AI cheating panic is a measurement panic: we only fear the
      machine where we were grading the artifact instead of the person. Part 1
      opens the cheating question, Part 3 answers it — right now Part 2 doesn't
      touch it, and that's the weld that makes three essays into one argument.
- [ ] Add a short Perkins subsection. Suggested placement: after "the elective
      wing" paragraph, before "Existence proof, with honest caveats." The elective
      wing explains *where* the skills got filed; Perkins explains *why nobody
      went looking.*
- [ ] Fold the Idaho counterexample into "Existence proof, with honest caveats" —
      it belongs with the caveats, not the argument.
- [ ] Reread the widget caption. If the post now makes a Perkins claim, the chart
      may need a line acknowledging that CTE anchor standards are aspirational and
      unassessed. (Already partly there — check for redundancy.)

## 7. Housekeeping

- [ ] Update the References block with Perkins/ED/Idaho/eSchool sources.
- [ ] `categories: draft` → real category when publishing.
- [ ] Verify Part 1 and Part 3 cross-links still resolve after any title changes
      (URLs don't change; only link *text* might want updating).
- [ ] Excerpt still accurate after the Perkins addition?

---

## Open questions

- Is "already" doing enough work in the title for a cold reader, or does the
  general-public version ("California Already Wrote Down the Skills Employers
  Want") reach further? Could A/B via the social share text without changing the
  post title.
- How hard do I want to hit Perkins? It's the strongest evidence in the piece,
  but it's also federal-policy inside baseball. Parents and techies may glaze.
  Possible fix: one sentence of plain English ("a school can score perfectly on
  every federal CTE measure without anyone ever checking whether students can
  work together") and put the citations in a footnote.
- Do I have standing to critique accountability policy as a new teacher? Yes —
  but the voice should be *"here is what the documents say,"* not *"here is what
  administrators do."* Stay on paper. The documents can't be offended.

---

*Working notes from a conversation with Claude, 2026-07-09:*
<https://claude.ai/share/5a86d887-71ff-4808-8dce-55d3d1bea4c3>