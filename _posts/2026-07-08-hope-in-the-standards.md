---
layout: post
title: "Soft Skills Are in the Standards"
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
  ],
  printViews: ["now", "growing"]
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
