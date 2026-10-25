---
layout: post
title: "CodeHS vs CMU"
date: 2026-06-10
categories: draft
label: Curriculum Review
excerpt: "A comparison of two introductory computer science curricula for high school students: CodeHS and CMU CS Academy."
excerpt_separator: <!--more-->
---

*Draft, not yet public*

Three years teaching both curricula, to the same kinds of students, in the same classroom. Here's what that comparison actually looks like, and why I keep landing on one of them.

---

## About the Author

Eric Brown teaches computer science at San Lorenzo Valley USD, after 25 years as a software engineer. [Full resume](https://porttack.com/resume.html). His read on these curricula comes from that engineering background as much as from three years in the classroom.

---

## Introduction

This post compares two introductory computer science curricula in direct classroom use: CMU CS Academy, developed by Carnegie Mellon University, and CodeHS, a commercial platform whose flagship introductory course is called Corgi. Both are designed for high school students with no prior programming experience. Both cover approximately 110–125 hours of instruction.

My recommendation is CMU CS Academy.

That recommendation is not close. It is based on how students learn, what they produce, how teachers are supported, and what the evidence from my own classroom shows about engagement and retention. I will address each of these in turn, and then address the standards question (which tends to dominate administrative conversations about curriculum) in an appendix.

| | CMU CS Academy | CodeHS |
|---|---|---|
| **Instruction** | Interactive, text-based notes: referenceable, communal, works alongside a teacher or peer | Video lessons: passive, requires headphones, hard to revisit collaboratively |
| **Assessment** | Consistent creative tasks each unit; gradebook reflects real progress | Frequent quizzes of uncertain retention; all-or-nothing submissions produce a gradebook of completions, not understanding |
| **Collaboration** | Built into every unit, with research-backed pair programming | One collaborative project, at the very end of the course |
| **Teacher Materials** | Interactive notes double as shared material, walked through live or worked on together with students. Differentiation always an issue. | Lesson slides provided, but add little beyond what the platform already shows. Differentiation always an issue. |
| **Support** | Single sequenced curriculum; deep community of fellow teachers plus direct access to content creators | 100+ course catalog; support is tiered and spread thin across courses |

---

## 1. How Students Learn: Instruction Format

CMU CS Academy delivers instruction through text-based, interactive notes. Students read, respond to embedded questions, manipulate examples, and write code, all within the same environment, without leaving the page. CodeHS delivers instruction primarily through short video lessons.

This difference has consequences that compound across a school year.

**Text is communal. Video is not.**

In a classroom, a teacher can read through a passage with the whole class. A student who understands the material can help a peer by pointing to a specific line. A teaching assistant can sit next to a struggling student and work through the same words together. When a student is lost, "scroll back to section 3.2" takes ten seconds and puts everyone looking at the same thing.

Video breaks every one of these dynamics. Students need headphones. Helping a peer means watching over their shoulder while they scrub through a timeline. "Rewind to the part about parameters" is a real ask that eats real time. The instruction becomes a private, passive experience at exactly the moment when communal learning would be most valuable.

**CMU's instruction is interactive. CodeHS's is not.**

CMU's notes require active responses throughout: students answer questions, predict outcomes, and try small exercises before moving forward. This is not a cosmetic feature. It is a fundamentally different relationship between student and material. Students are not watching someone program. They are programming.

CodeHS video lessons demonstrate concepts. Watching a demonstration and understanding a concept are not the same thing, and the gap between them shows up in student work.

---

## 2. What Students Produce: Assessment and the Gradebook

CodeHS offers frequent comprehension checks throughout each lesson. This looks thorough. In practice, answering a multiple-choice question correctly in the moment provides limited evidence of what a student will retain or be able to apply independently the following week.

CodeHS also uses an all-or-nothing submission model: students cannot submit work until all automated tests pass. This means every submission that exists in the gradebook is effectively a 100%. A student who got halfway through a problem before giving up leaves no trace. The gradebook tells you who finished, not who learned.

CMU takes a different approach. Creative tasks appear at the end of every unit: open-ended programming projects within the graphics environment that require students to apply what they have learned to something they have made. These tasks are consistent in structure across every unit, which means students know what to expect and teachers know what to look for. They produce authentic evidence of understanding rather than evidence of completion.

CMU's gradebook is also cleaner in practice. The number of gradebook entries is manageable, and the signal is honest. A teacher scanning for students who need attention before the next class can find them quickly. CodeHS generates a high volume of small entries (assignment completion markers, quiz scores, challenge submissions) that can make it genuinely difficult to see who is falling behind until they have fallen too far.

---

## 3. Learning Together: Collaboration

CMU embeds a collaborative task in every unit. These are not group projects described in an assignment sheet. They are built into the platform itself, allowing multiple students to write code simultaneously in the same editor, in real time. CMU's own teacher materials describe the research basis for this: pair programming increases engagement, improves retention, and builds confidence in struggling students specifically.

CodeHS has one collaborative element: an open-ended final project at the very end of the course. Collaboration is a capstone, not a practice.

This is a meaningful structural difference. Collaboration is both a professional skill (every working software engineer practices it daily) and a pedagogical tool. Students learn from each other in ways they do not learn from notes or videos. Building collaborative tasks into the fabric of the curriculum, rather than saving them for a single capstone project, is a choice CMU makes throughout the course. CodeHS's structure doesn't reflect that same emphasis.

---

## 4. Getting Help: The Support Ecosystem

CMU's support operates at three levels. There is a peer teacher community in online forums where educators who have taught the same lessons share experience rooted in classroom reality. There is indirect support from Carnegie Mellon graduate students with deep content knowledge. And there are the content creators themselves (the people who built the curriculum) who are reachable and engage substantively. I have spoken directly with CMU content creators multiple times, and those conversations have been genuinely useful.

This support structure works as well as it does for a structural reason: CMU offers one sequenced curriculum. That means thousands of teachers are teaching the same material in the same order. When a teacher posts a question about Unit 4, there are hundreds of other teachers who have recently taught Unit 4 or are about to. The community has density and specificity. Answers arrive with context, and with the empathy that comes from shared experience.

CodeHS offers over 100 courses, which is marketed as flexibility. In practice it spreads the teacher community thin: fewer teachers are on exactly your path, so fewer people have run into your specific problem in your specific course. Support is tiered, and getting a substantive answer often means escalating past a first line that may not include anyone with classroom teaching experience. You can generally get a response. Getting a conversation with someone who has taught the material is harder.

---

## 5. What I Have Observed in Students

I have taught CMU CS Academy across multiple years and student populations, including both middle school and high school students. I have also taught CodeHS's flagship Corgi course to a high school introductory cohort.

The most meaningful signal I have observed is behavioral rather than stated. Students who go through CMU's curriculum come back to it. Middle school students who complete the Exploring Programming course return to it independently. One sixth grader worked through the entire CS0 course and asked for CS1. I do not observe this with CodeHS. Voluntary continued engagement (students choosing to return to material outside of any assignment) is a more honest measure of a curriculum's impact than any survey or preference question.

When I asked students who preferred CodeHS why, the answer was usually some version of wanting to move through the material quickly and independently. That's a real preference, and CodeHS's video format supports it well. It's just not the same thing as retaining more of what they learned.

---

## Conclusion

CodeHS is the more polished product on paper: a larger catalog, more teacher-facing materials, and prominently marketed standards alignment. Those are real advantages, and I understand why they matter in a curriculum-adoption conversation.

But in my classroom, what predicts whether students learn and retain the material is the instructional design underneath the packaging. CodeHS's video-based instruction is a more solitary experience than text a class can work through together. Its all-or-nothing submission model produces a gradebook that reads as more complete than it is. A student who quit halfway through leaves no trace. And its support, despite being prominently marketed, is harder to get substantive help from, likely a consequence of supporting over 100 courses at once.

CMU CS Academy has been the stronger learning environment on the measures that matter most in my classroom: interactive instruction that builds community instead of isolating students, assessment that produces authentic evidence of learning, collaboration built into the structure of every unit, and a support ecosystem grounded in the shared experience of teachers teaching the same thing.

For my students, CMU CS Academy has been the stronger choice for building real programming ability. That's the conclusion three years of teaching both, and looking closely at how each is built, has led me to.

---

## Appendix A: Standards Coverage

<div style="border-left: 4px solid #0969da; background: #f6f8fa; padding: 0.9em 1.2em; margin: 1.5em 0; border-radius: 4px;">
<p style="margin: 0;">A live version of this comparison, covering more ground than the table below, is maintained at <a href="https://learn.porttack.com/standards/?sources=cmu_cs1,codehs_corgi&view=open-all">learn.porttack.com/standards</a>: the same two courses mapped against California's standards, CSTA 2017, CSTA 2026, and CA CTE (ICT), with an interactive coverage map you can toggle by source. What follows is the California and CSTA 2017 slice, current as of this post, for anyone reading without clicking through.</p>
</div>

CodeHS and CMU both publish California standards alignment claims for their
intro courses. California's 2018 standards are a modified adoption of CSTA
2017, close enough that the table below lists both codes for each row.

The table merges both courses against the eleven core 9-12 Algorithms &
Programming standards, ordered roughly as CMU's CS1 introduces them rather
than by code number. CMU's own alignment document skips AP.14; I've added it
back, since the Creative Task's design sheet has students justify their
choice of concepts, in the standard's own language.

| CA / CSTA 2017 | What it names | CMU CS1 | CodeHS Corgi |
|---|---|---|---|
| [9-12.AP.18](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.18) / [3A-AP-19](https://learn.porttack.com/standards/csta2017-standards-reference.html#S-3A-AP-19) | Design for broad audiences using feedback | Creative Task, every unit | Unit 13 only |
| [9-12.AP.20](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.20) / [3A-AP-21](https://learn.porttack.com/standards/csta2017-standards-reference.html#S-3A-AP-21) | Iteratively evaluate and refine an artifact | Creative Task, every unit | Unit 13 only |
| [9-12.AP.21](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.21) / [3A-AP-22](https://learn.porttack.com/standards/csta2017-standards-reference.html#S-3A-AP-22) | Work in team roles using collaborative tools | Collaborative task, every unit | One lesson in Unit 3, plus Unit 13 |
| [9-12.AP.22](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.22) / [3A-AP-23](https://learn.porttack.com/standards/csta2017-standards-reference.html#S-3A-AP-23) | Document decisions made during design | Creative Task, every unit | Unit 13 only |
| [9-12.AP.15](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.15) / [3A-AP-16](https://learn.porttack.com/standards/csta2017-standards-reference.html#S-3A-AP-16) | Iteratively develop artifacts using events | Units 2-6, 12 | Units 10-12 |
| [9-12.AP.17](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.17) / [3A-AP-18](https://learn.porttack.com/standards/csta2017-standards-reference.html#S-3A-AP-18) | Create artifacts using modular design | Units 2, 4, 7, 10 | Units 1, 3, 8, 9 |
| [9-12.AP.14](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.14) / [3A-AP-15](https://learn.porttack.com/standards/csta2017-standards-reference.html#S-3A-AP-15) | Justify a control-structure choice | Units 3-5, 7-9, plus the Creative Task | Units 1, 6, 7 |
| [9-12.AP.16](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.16) / [3A-AP-17](https://learn.porttack.com/standards/csta2017-standards-reference.html#S-3A-AP-17) | Decompose problems into subproblems | Unit 3 | Units 1-2 |
| [9-12.AP.12](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.12) / [3A-AP-13](https://learn.porttack.com/standards/csta2017-standards-reference.html#S-3A-AP-13) | Design algorithms using original and existing algorithms | Units 8, 11 | Challenge units 2, 5, 7, 9, 11 |
| [9-12.AP.13](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.13) / [3A-AP-14](https://learn.porttack.com/standards/csta2017-standards-reference.html#S-3A-AP-14) | Use collections instead of repeated variables | Units 10-11 | Optional extension only, after the course ends |
| [9-12.AP.19](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.19) / [3A-AP-20](https://learn.porttack.com/standards/csta2017-standards-reference.html#S-3A-AP-20) | Explain software license limitations | Not taught, deferred to AP CS Principles | Not taught |

On a coverage checklist, that's nearly the same course. What the table can't
show is how differently the coverage is delivered: CMU spreads
[AP.14](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.14)
(justify a control-structure choice),
[AP.18](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.18)
(design for an audience using feedback),
[AP.20](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.20)
(iteratively evaluate and refine), and
[AP.22](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.22)
(document design decisions) across the whole course through the Creative
Task, done ten times a year. Corgi concentrates the same standards into Unit
13's final project, done once. I think that difference in delivery, not the
checklist, is what drives the retention gap I described earlier in this post.

### Sources

- California Department of Education, [*Computer Science Standards for
  California Public Schools, Kindergarten through Grade
  Twelve*](https://www.cde.ca.gov/be/st/ss/csstandards.pdf) (adopted August
  2018), grades 9-12 core standards.
- [CMU CS Academy course info](https://academy.cs.cmu.edu/course-info),
  including *CS1: Introduction to Programming - Course Description and
  Standard Alignment* (last updated 6/5/23) and its linked state-specific
  mapping to the California CDE Computer Science Content Standards, plus
  *CS1 Scope and Sequence with Pacing Guide* (last updated 3/15/23) and
  *CS1 Creative Tasks* guide.
- CodeHS, [*Introduction to Computer Science with JavaScript
  (Corgi)*](https://codehs.com/course/17397/overview) syllabus.
- The full cross-framework coverage data behind this appendix (California,
  CSTA 2017, CSTA 2026, CA CTE ICT) is maintained as structured data at
  [learn.porttack.com/standards](https://learn.porttack.com/standards/) and
  is the canonical, kept-current version going forward; this appendix is a
  snapshot of the California slice.

---

## Appendix B: CS50P and Working in Python, Two Advanced Pathways

Two resources are worth mentioning for teachers and administrators thinking beyond introductory CS: Harvard's [CS50P](https://cs50.harvard.edu/python/) (Introduction to Programming with Python), and [Working in Python](https://learn.porttack.com/working-in-python/), my own adaptation of Allen Downey's *Think Python* for AP Computer Science Principles. They aren't competing options. They're two rigorous, text-based answers to the same problem, and I use both.

CS50P is the most pedagogically rigorous free Python curriculum I am aware of. Its sequencing is intellectually honest: loops arrive early, problem sets demand genuine decomposition, and the course treats students as capable of handling real programming challenges without relying on visual scaffolding for motivation. The unit on unit testing alone reflects a level of professional orientation that neither CMU CS Academy nor CodeHS approaches. The bar it sets is real, assuming intrinsic motivation and tolerance for productive frustration that not all high school students, particularly in introductory placements, arrive with. In my classroom it works best as a second course: a bridge from CMU CS1 to AP-level work, or an accelerated track for students who are clearly ready for more.

Working in Python sets a comparable bar from a different direction. It's a full adaptation of Downey's *Think Python, Third Edition*, delivered as interactive Jupyter notebooks rather than a platform or a video series, the same instinct behind preferring CMU to CodeHS in the first place. It's the reading text for my own AP CS Principles course, with its own AP CSP standards coverage and vocabulary tools built in, and it covers much of the same ground as CS50P (functions, conditionals, recursion, data structures, classes) at the pace of a full-year course rather than a self-paced sprint.

Both are mapped against the same standards as the rest of this post, and both
reach past where CS1 and Corgi stop: [14](https://learn.porttack.com/standards/?report=cs50p&view=ap-only)
AP Computer Science Principles learning objectives for CS50P,
[22](https://learn.porttack.com/standards/?report=working_in_python&view=ap-only)
for Working in Python, mostly concentrated in the Algorithms and Programming
strand this whole post has already been comparing (neither claims the AP
exam's Data, Systems, or Impact-of-Computing strands). Still, that's a
framework CS1 and Corgi never touch at all, since neither is pitched at the
AP level. Full coverage for both together is at [learn.porttack.com/standards](https://learn.porttack.com/standards/?sources=cs50p,working_in_python&view=open-all).[^cs50p-report][^wip-report]

The table below is narrower: just the California standards both reach
independently, on the same terms as the CS1/Corgi table above. Every one
CS50P reaches, Working in Python reaches too, just later and with more time
to sit with it:

| CA / CSTA 2017 | What it names | CS50P | Working in Python |
|---|---|---|---|
| [9-12.AP.13](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.13) / [3A-AP-14](https://learn.porttack.com/standards/csta2017-standards-reference.html#S-3A-AP-14) | Use collections instead of repeated variables | Week 2 | Chapter 9 |
| [9-12.AP.14](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.14) / [3A-AP-15](https://learn.porttack.com/standards/csta2017-standards-reference.html#S-3A-AP-15) | Justify a control-structure choice | Week 1 | Chapters 5-6 |
| [9-12.AP.16](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.16) / [3A-AP-17](https://learn.porttack.com/standards/csta2017-standards-reference.html#S-3A-AP-17) | Decompose problems into subproblems | Weeks 0, 8 | Chapters 3-4 |
| [9-12.AP.17](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.17) / [3A-AP-18](https://learn.porttack.com/standards/csta2017-standards-reference.html#S-3A-AP-18) | Create artifacts using modular design | Week 4 | Chapters 2, 4, 8 |
| [9-12.AP.20](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.AP.20) / [3A-AP-21](https://learn.porttack.com/standards/csta2017-standards-reference.html#S-3A-AP-21) | Iteratively evaluate and refine an artifact | Week 5 | Chapters 4, 7 |
| [9-12.DA.9](https://learn.porttack.com/standards/ca-cs-standards-reference.html#S-9-12.DA.9) / [3A-DA-10](https://learn.porttack.com/standards/csta2017-standards-reference.html#S-3A-DA-10) | Choose how to organize and store data | Week 6 | Chapter 7b |

Working in Python goes further from there (design-for-audience feedback,
documenting decisions, data organization, software licensing), but the
overlap above is the real spine both courses share.

Neither replaces a well-scaffolded introductory course. But for a pathway that runs from middle school through AP, CMU CS Academy is the foundation, and these are two directions worth planning toward from there: CS50P for a faster, second pass at similar ideas, Working in Python for the year-long course that sits between CS1 and it.

---

## Appendix C: What About Code.org?

*Status: Not yet written*

---

## Appendix D: Does CMU Wait Too Long to Teach Loops?

*This appendix is intended for CS educators. Administrators can skip it.*

One of the most discussed aspects of CMU CS Academy's sequencing is its treatment of loops. In the CS1 course, for loops do not appear until Unit 7 (the start of the second semester). While loops arrive in Unit 9 and are marked optional. A student completing the first semester of CMU CS1 will not have written a formal loop construct.

This looks like a sequencing problem. It is worth examining whether it actually is one.

The traditional argument for teaching loops early comes from curricula descended from C. In C, a for loop is intimately tied to memory layout: `for (int i = 0; i < n; i++)` is essentially pointer arithmetic in readable form. Teaching it early makes sense in a systems context where understanding memory traversal is the point.

In Python, this argument does not apply. The natural form of iteration in Python is traversal over a collection: `for item in items`. This construct requires having a collection to traverse. Teaching it before students understand lists would be sequencing backwards. CMU appears to be making a principled decision: hold loops until students have something meaningful to iterate over, then teach iteration the right way rather than teaching an index-based idiom borrowed from C.

There is a counterargument. Many students arrive having used [Scratch](https://scratch.mit.edu/) or [MakeCode](https://makecode.microbit.org/), where loops are conceptually simple and visually intuitive. These students already understand iteration. They just haven't seen it in text syntax. Delaying the concept does not help them. And students who encounter loops in other contexts during the first semester (a tutorial, a sibling's code, a game modification) will lack formal language for what they are seeing.

The honest position is that this is a genuine design tradeoff, not an obvious mistake. CMU's sequencing is more intellectually defensible than it first appears. Whether the delay is too long is a reasonable debate. What it is not is evidence of a curriculum that does not take programming seriously.

---

## Appendix E: Python vs. JavaScript

*This appendix is intended for CS educators and curriculum decision-makers.*

CMU CS Academy uses Python. CodeHS's Corgi course uses JavaScript. This is not a neutral difference.

Python is the more defensible choice for a first programming course. Its syntax is readable by design: indentation enforces structure that beginners need to internalize anyway, and the absence of braces, semicolons, and type declarations removes friction that has nothing to do with learning to think computationally. Students can focus on what their code does rather than on syntactic bookkeeping.

Python is also the language students are most likely to encounter again. AP Computer Science Principles supports Python. College introductory courses increasingly use it. Data science, machine learning, and scientific computing are Python-dominated fields. A student who learns Python in high school arrives at their next CS experience with a foundation that transfers.

JavaScript has real advantages: it runs natively in browsers, it is everywhere on the web, and it is a legitimate professional language. But it carries overhead that is genuinely difficult for beginners: the distinction between `var`, `let`, and `const`; implicit type coercion that produces confusing bugs; and a syntax that requires more visual parsing before a student can read what their code means. These are not insurmountable obstacles, but they are unnecessary ones for a first course.

There is also a continuity argument. Switching programming languages mid-curriculum, or between courses, carries a real cognitive cost. Students who learn Python in an introductory course can continue in Python through AP CS Principles and into CS50P. Students who learn JavaScript in CodeHS's Corgi course face a language transition at every subsequent step in a Python-oriented pathway. Language continuity is not everything, but it is not nothing.

Computer science is ultimately about concepts rather than any specific language. But the language a student learns first shapes their mental models in ways that persist. Choosing a language that is readable, transferable, and aligned with the next steps in a student's CS education is a meaningful curriculum decision, not a cosmetic one.

---

## Appendix F: Student Placement in Introductory CS

*Status: Still work in progress*

Many of the challenges teachers encounter with introductory CS curricula (including CMU CS Academy) are better understood as placement problems than curriculum problems. Students arrive in introductory CS courses with widely varying preparation, motivation, and prior exposure to programming concepts through tools like [Scratch](https://scratch.mit.edu/) and [MakeCode](https://makecode.microbit.org/).

A student who is not ready for text-based programming will struggle in any text-based curriculum. The question worth asking is not only "which curriculum is better" but "which students are ready for this curriculum, and what do we offer students who are not yet ready."

Data from multiple years of classroom observation across CMU CS Academy, CodeHS, and CS50 AP is being compiled to address this question more concretely. That analysis will be added here when complete.

 * CMU is thoughtful about placement by design: CS1 is built around the reasoning and problem-solving maturity of an Algebra 1 student, while Exploring Programming (CS0) is the deliberately lighter middle school on-ramp. My experience teaching CS0 to sixth graders, and helpful modifications is here: [Sixth Graders and CMU's Exploring Programming (cs0)](/2026/07/13/sixth-grade-cmu-cs0.html)
 * TBD: Students guessing vs learning/retaining. Anecdotal (All platforms)
 * TBD: Code.org Discoveries progress skew (and other teacher observations)
 * TBD: Issues with highly sequenced Computer Science concepts and how that impacts student absenteeism, and generally assisting students that constantly fall behind. CS concepts are so tightly sequenced that skipping a unit is frequently not an option.

---

*This post reflects classroom experience and professional judgment. It is intended as a resource for CS educators and the administrators who support them. Feedback is welcome.*

*More on teaching and curriculum: [the blog](https://porttack.com/blog).*

[^cs50p-report]: [Full CS50P standards coverage report](https://learn.porttack.com/standards/?report=cs50p).
[^wip-report]: [Full Working in Python standards coverage report](https://learn.porttack.com/standards/?report=working_in_python).