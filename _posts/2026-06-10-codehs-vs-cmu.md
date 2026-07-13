---
layout: post
title: "CodeHS vs CMU"
date: 2026-06-10
categories: draft
label: Curriculum Review
excerpt: "A comparison of two introductory computer science curricula for high school students: CodeHS and CMU CS Academy."
excerpt_separator: <!--more-->
---

*Draft - not yet public*

Three years teaching both. One platform teaches. The other gets watched. Here's the difference.

---

## About the Author

Eric Brown teaches computer science at San Lorenzo Valley USD. Before entering the classroom, he spent 25 years as a software engineer, including roles as CTO at Abaca Technology (acquired by Proofpoint), Staff Engineer at Khan Academy, and Individual Contributor 5 at Apple iCloud Mail. He has written production code in C, C++, Java, Python, and a dozen other languages across systems ranging from anti-spam infrastructure filtering Yahoo and Apple email to high-performance imaging engines at Kodak and Sony. He holds a BSEE from the University of Rochester. He has been teaching computer science for three years.

His assessment of these curricula is informed not just by classroom observation but by decades of professional experience with what competent programming actually looks like - and what it takes to build it.

---

## Introduction

This post compares two introductory computer science curricula in direct classroom use: CMU CS Academy, developed by Carnegie Mellon University, and CodeHS, a commercial platform whose flagship introductory course is called Corgi. Both are designed for high school students with no prior programming experience. Both cover approximately 110–125 hours of instruction.

My recommendation is CMU CS Academy.

That recommendation is not close. It is based on how students learn, what they produce, how teachers are supported, and what the evidence from my own classroom shows about engagement and retention. I will address each of these in turn, and then address the standards question - which tends to dominate administrative conversations about curriculum - in an appendix.

| | CMU CS Academy | CodeHS |
|---|---|---|
| **Instruction** | Interactive, text-based notes - referenceable, communal, works alongside a teacher or peer | Video lessons - passive, requires headphones, hard to revisit collaboratively |
| **Assessment** | Consistent creative tasks each unit; gradebook reflects real progress | Frequent quizzes of uncertain retention; all-or-nothing submissions produce a gradebook of completions, not understanding |
| **Collaboration** | Built into every unit, with research-backed pair programming | One collaborative project, at the very end of the course |
| **Teacher Materials** | Interactive notes double as shared material - walked through live or worked on together with students. Differentiation always an issue. | Lesson slides provided, but add little beyond what the platform already shows. Differentiation always an issue. |
| **Support** | Single sequenced curriculum; deep community of fellow teachers plus direct access to content creators | 100+ course catalog; tiered support staffed by people without classroom teaching experience |

---

## 1. How Students Learn: Instruction Format

CMU CS Academy delivers instruction through text-based, interactive notes. Students read, respond to embedded questions, manipulate examples, and write code - all within the same environment, without leaving the page. CodeHS delivers instruction primarily through short video lessons.

This difference has consequences that compound across a school year.

**Text is communal. Video is not.**

In a classroom, a teacher can read through a passage with the whole class. A student who understands the material can help a peer by pointing to a specific line. A teaching assistant can sit next to a struggling student and work through the same words together. When a student is lost, "scroll back to section 3.2" takes ten seconds and puts everyone looking at the same thing.

Video breaks every one of these dynamics. Students need headphones. Helping a peer means watching over their shoulder while they scrub through a timeline. "Rewind to the part about parameters" is a real ask that eats real time. The instruction becomes a private, passive experience at exactly the moment when communal learning would be most valuable.

**CMU's instruction is interactive. CodeHS's is not.**

CMU's notes require active responses throughout - students answer questions, predict outcomes, and try small exercises before moving forward. This is not a cosmetic feature. It is a fundamentally different relationship between student and material. Students are not watching someone program. They are programming.

CodeHS video lessons demonstrate concepts. Watching a demonstration and understanding a concept are not the same thing, and the gap between them shows up in student work.

---

## 2. What Students Produce: Assessment and the Gradebook

CodeHS offers frequent comprehension checks throughout each lesson. This looks thorough. In practice, answering a multiple-choice question correctly in the moment provides limited evidence of what a student will retain or be able to apply independently the following week.

CodeHS also uses an all-or-nothing submission model: students cannot submit work until all automated tests pass. This means every submission that exists in the gradebook is effectively a 100%. A student who got halfway through a problem before giving up leaves no trace. The gradebook tells you who finished, not who learned.

CMU takes a different approach. Creative tasks appear at the end of every unit - open-ended programming projects within the graphics environment that require students to apply what they have learned to something they have made. These tasks are consistent in structure across every unit, which means students know what to expect and teachers know what to look for. They produce authentic evidence of understanding rather than evidence of completion.

CMU's gradebook is also cleaner in practice. The number of gradebook entries is manageable, and the signal is honest. A teacher scanning for students who need attention before the next class can find them quickly. CodeHS generates a high volume of small entries - assignment completion markers, quiz scores, challenge submissions - that can make it genuinely difficult to see who is falling behind until they have fallen too far.

---

## 3. Learning Together: Collaboration

CMU embeds a collaborative task in every unit. These are not group projects described in an assignment sheet - they are built into the platform itself, allowing multiple students to write code simultaneously in the same editor, in real time. CMU's own teacher materials describe the research basis for this: pair programming increases engagement, improves retention, and builds confidence in struggling students specifically.

CodeHS has one collaborative element: an open-ended final project at the very end of the course. Collaboration is a capstone, not a practice.

This is a meaningful structural difference. Collaboration is both a professional skill - every working software engineer practices it daily - and a pedagogical tool. Students learn from each other in ways they do not learn from notes or videos. Building collaborative tasks into the fabric of the curriculum, rather than treating them as an optional finale, reflects a coherent belief about what learning looks like. CodeHS does not share that belief, or at least does not act on it.

---

## 4. Getting Help: The Support Ecosystem

CMU's support operates at three levels. There is a peer teacher community in online forums where educators who have taught the same lessons share experience rooted in classroom reality. There is indirect support from Carnegie Mellon graduate students with deep content knowledge. And there are the content creators themselves - the people who built the curriculum - who are reachable and engage substantively. I have spoken directly with CMU content creators multiple times, and those conversations have been genuinely useful.

This support structure works as well as it does for a structural reason: CMU offers one sequenced curriculum. That means thousands of teachers are teaching the same material in the same order. When a teacher posts a question about Unit 4, there are hundreds of other teachers who have recently taught Unit 4 or are about to. The community has density and specificity. Answers arrive with context, and with the empathy that comes from shared experience.

CodeHS offers over 100 courses. That breadth is marketed as flexibility. In practice it fragments the teacher community - fewer teachers are on exactly your path, which means fewer people have encountered your specific problem in your specific course. CodeHS's own support reflects this: it is tiered, staffed by people without classroom teaching backgrounds, and requires escalation to get substantive answers. You can always get a response. You cannot get a conversation, and you cannot get one from someone who knows what it feels like to be in your classroom with your students.

The contrast is not a matter of degree. It is a difference in kind.

---

## 5. What I Have Observed in Students

I have taught CMU CS Academy across multiple years and student populations, including both middle school and high school students. I have also taught CodeHS's flagship Corgi course to a high school introductory cohort.

The most meaningful signal I have observed is behavioral rather than stated. Students who go through CMU's curriculum come back to it. Middle school students who complete the Exploring Programming course return to it independently. One sixth grader worked through the entire CS0 course and asked for CS1. I do not observe this with CodeHS. Voluntary continued engagement - students choosing to return to material outside of any assignment - is a more honest measure of a curriculum's impact than any survey or preference question.

Students who preferred CodeHS, when I examined their reasoning, were primarily motivated by wanting to get through the material with minimal effort. CodeHS's passive video format accommodates that goal. That is not a recommendation.

---

## Conclusion

CodeHS is a better-packaged product. It ships with more teacher-facing materials, a larger catalog, and prominent claims about standards alignment. For an administrator evaluating curricula by surface features, those things are visible and CMU's advantages are not.

But packaging is not pedagogy. CodeHS's video-based instruction isolates students and converts learning into a passive, private experience. Its gradebook produces false signal. Its assessment philosophy rewards completion over understanding. Its support - despite being prominently marketed - is frustrating in practice, a direct consequence of trying to support over 100 courses with generalist staff who have never taught.

CMU CS Academy is a better learning environment by every measure that matters for students: interactive instruction that builds community rather than breaking it, assessment that produces authentic evidence of learning, collaboration built into the structure of every unit, and a support ecosystem grounded in the shared experience of teachers teaching the same thing.

For students who are in a classroom to actually learn to program, CMU CS Academy is the stronger choice. The evidence from my classroom, and from the structure of the curricula themselves, supports that conclusion clearly.

---

## Appendix A: The Loop Debate - Does CMU Wait Too Long?

*This appendix is intended for CS educators. Administrators can skip it.*

One of the most discussed aspects of CMU CS Academy's sequencing is its treatment of loops. In the CS1 course, for loops do not appear until Unit 7 - the start of the second semester. While loops arrive in Unit 9 and are marked optional. A student completing the first semester of CMU CS1 will not have written a formal loop construct.

This looks like a sequencing problem. It is worth examining whether it actually is one.

The traditional argument for teaching loops early comes from curricula descended from C. In C, a for loop is intimately tied to memory layout: `for (int i = 0; i < n; i++)` is essentially pointer arithmetic in readable form. Teaching it early makes sense in a systems context where understanding memory traversal is the point.

In Python, this argument does not apply. The natural form of iteration in Python is traversal over a collection: `for item in items`. This construct requires having a collection to traverse. Teaching it before students understand lists would be sequencing backwards. CMU appears to be making a principled decision: hold loops until students have something meaningful to iterate over, then teach iteration the right way rather than teaching an index-based idiom borrowed from C.

There is a counterargument. Many students arrive having used Scratch or MakeCode, where loops are conceptually simple and visually intuitive. These students already understand iteration - they just haven't seen it in text syntax. Delaying the concept does not help them. And students who encounter loops in other contexts during the first semester - a tutorial, a sibling's code, a game modification - will lack formal language for what they are seeing.

The honest position is that this is a genuine design tradeoff, not an obvious mistake. CMU's sequencing is more intellectually defensible than it first appears. Whether the delay is too long is a reasonable debate. What it is not is evidence of a curriculum that does not take programming seriously.

---

## Appendix B: Language Choice - Python vs. JavaScript

*This appendix is intended for CS educators and curriculum decision-makers.*

CMU CS Academy uses Python. CodeHS's Corgi course uses JavaScript. This is not a neutral difference.

Python is the more defensible choice for a first programming course. Its syntax is readable by design - indentation enforces structure that beginners need to internalize anyway, and the absence of braces, semicolons, and type declarations removes friction that has nothing to do with learning to think computationally. Students can focus on what their code does rather than on syntactic bookkeeping.

Python is also the language students are most likely to encounter again. AP Computer Science Principles supports Python. College introductory courses increasingly use it. Data science, machine learning, and scientific computing are Python-dominated fields. A student who learns Python in high school arrives at their next CS experience with a foundation that transfers.

JavaScript has real advantages - it runs natively in browsers, it is everywhere on the web, and it is a legitimate professional language. But it carries overhead that is genuinely difficult for beginners: the distinction between `var`, `let`, and `const`; implicit type coercion that produces confusing bugs; and a syntax that requires more visual parsing before a student can read what their code means. These are not insurmountable obstacles, but they are unnecessary ones for a first course.

There is also a continuity argument. Switching programming languages mid-curriculum, or between courses, carries a real cognitive cost. Students who learn Python in an introductory course can continue in Python through AP CS Principles and into CS50P. Students who learn JavaScript in CodeHS's Corgi course face a language transition at every subsequent step in a Python-oriented pathway. Language continuity is not everything, but it is not nothing.

Computer science is ultimately about concepts rather than any specific language. But the language a student learns first shapes their mental models in ways that persist. Choosing a language that is readable, transferable, and aligned with the next steps in a student's CS education is a meaningful curriculum decision, not a cosmetic one.

---

## Appendix C: CA Standards Coverage

CodeHS markets its California standards alignment prominently. CMU CS Academy
publishes one too: its main alignment document lists CSTA and ISTE standards,
and links to a separate state-specific document mapping CS1 directly to the
California CDE Computer Science Content Standards. For teachers keeping score,
California's 2018 standards are a modified adoption of CSTA 2017, so CMU's CSTA
claims were already California claims wearing different numbers. The
state-specific document just says so explicitly.

What follows is my own mapping of both courses against the California 9-12 core
standards. The short version: on a coverage checklist the two courses nearly
match, CMU undersells itself by one heavily-taught standard, and the real
difference between the courses sits exactly where a checklist cannot see.

### What CMU claims

CMU's California document maps CS1 to nine of the eleven 9-12 core Algorithms &
Programming standards:

| CA standard | What it names |
|---|---|
| 9-12.AP.12 | Design algorithms using original and existing algorithms |
| 9-12.AP.13 | Use collections instead of repeated simple variables |
| 9-12.AP.15 | Iteratively develop artifacts using events |
| 9-12.AP.16 | Decompose problems into subproblems |
| 9-12.AP.17 | Create artifacts using modular design |
| 9-12.AP.18 | Design for broad audiences using feedback |
| 9-12.AP.20 | Iteratively evaluate and refine an artifact |
| 9-12.AP.21 | Work in team roles using collaborative tools |
| 9-12.AP.22 | Document decisions made during design |

### The standard CMU does not claim

Neither CMU document claims **9-12.AP.14: justify the selection of specific
control structures by identifying tradeoffs.** I do not know why. Units 3
through 9 of CS1 are conditionals and loops almost without interruption, and
students do not just use these constructs - they choose among them, and the
Creative Task design sheet makes the choosing explicit. Before building, every
student lists the coding concepts they plan to use and why. That is the
standard's own language: justify your selection.

Add AP.14 back and CS1 delivers ten of eleven. The eleventh, AP.19, asks
students to explain software license limitations. That is not a first-course
topic, and in this pathway it is not skipped - it is taught where it belongs, in
AP CS Principles, where I cover it with my own materials.

Beyond Algorithms & Programming, CS1 is deliberately narrow. It does not teach
the Networks, Impacts, Computing Systems, or data visualization strands, and it
should not. In a three-course pathway, the on-ramp earns its place by teaching
one concept well. Those strands belong to the courses that follow. An intro
course claiming all thirty core standards would be exactly the checkbox problem
this appendix is about.

### Unit-by-unit map: CS1

Two structures recur in every unit and do not belong to any single row: the
Creative Task (Units 1-10) and the collaborative task. They are listed at the
bottom, because they are where the process standards actually live.

| CS1 Unit | Introduced concepts | CA standards reached |
|---|---|---|
| 1 - Creating Drawings | shapes, colors, opacity | Foundational; no AP standard yet |
| 2 - Functions, Mouse Events, Properties | functions, onMousePress/Release, properties | AP.15, AP.17 |
| 3 - Mouse Motion, Conditionals, Helper Functions | onMouseMove/Drag, if, helper functions | AP.14, AP.15, AP.16 |
| 4 - More Conditionals, Key Events, Methods | elif, key events, methods | AP.14, AP.15, AP.17 |
| 5 - Complex Conditionals, More Key Events | compound/nested conditionals, onKeyHold | AP.14, AP.15 |
| 6 - Groups, Step Events, Motion | groups, onStep, motion | AP.15 |
| 7 - New Shapes, Local Variables, For Loops | local variables, for loops | AP.14, AP.17 |
| 8 - Math Functions, Random, Nested Loops | library functions, random, nested loops | AP.12, AP.14 |
| 9 - Types, Strings, While Loops | types, input, strings, while | AP.14 |
| 10 - Lists and Return Values | lists, list methods, return values | AP.13, AP.17 |
| 11 - 2D Lists and Board Games | 2D lists, game logic | AP.12, AP.13 |
| 12 - Final Project | images, sounds, open-ended build | AP.15 |
| Creative Task, Units 1-10 | design, build, reflect on a self-chosen artifact, against a rubric | AP.14, AP.20, AP.22 |
| Collaborative task, every unit | pair programming in a real-time shared editor | AP.21 |

The Creative Task is a rubric-scored cycle: describe the program, sketch the
canvas, list the concepts you will use and why, build, reflect on one difficulty
and how the design changed. That is documentation (AP.22) and refinement (AP.20)
taught ten times a year. One caveat I will state rather than hide: AP.18
requires incorporating feedback from users, and the rubric does not mandate a
feedback step. CMU claims the standard and the structure supports it, but
meeting it depends on the teacher building feedback into the task. In my
classroom it is built in.

### The same map for Corgi

The same exercise applied to the CodeHS Corgi syllabus, with a caveat: the
syllabus lists topics at a coarser grain than CMU's scope and sequence, so this
is inferred from topic lists. Indicative, not audited.

| Corgi Unit | Listed topics | CA standards (inferred) |
|---|---|---|
| 1 - Programming with Karel | functions, control flow, loops, conditionals, top-down design | AP.14, AP.16, AP.17 |
| 2 - Karel Challenges | larger Karel problems | AP.12, AP.16 |
| 3 - JavaScript Basics | variables, input, arithmetic, constants, random, functions | AP.17 |
| 4 - The Canvas and Graphics | canvas, graphics, positioning | Foundational |
| 5 - Graphics Challenges | larger graphics problems | AP.12 |
| 6 - JavaScript Control Structures | booleans, if/else, operators, while, break, for, nesting | AP.14 |
| 7 - Control Structures Challenges | larger problems | AP.12, AP.14 |
| 8 - Functions | parameters, return values, scope | AP.17 |
| 9 - Functions Challenges | larger problems | AP.12, AP.17 |
| 10 - Animation and Games | timers, mouse and keyboard events | AP.15 |
| 11 - Animations Challenges | larger animation problems | AP.12, AP.15 |
| 12 - Project: Breakout | guided build, collision detection | AP.15 |
| 13 - Final Project | project planning, pseudocode, open-ended build | AP.18, AP.20, AP.21, AP.22 |
| 14 - Final Exam | cumulative assessment | - |
| Optional extension - Data Structures | arrays, lists, objects, sets, grids | AP.13 |

Two rows matter most.

Collections first. In CS1, lists and 2D lists are core content, taught and
assessed for every student. In Corgi they live in an optional extension
sequenced after the final project, and the final exam does not touch them - its
listed coverage is Karel, JavaScript basics, graphics, control structures,
functions, and animation. Whether a Corgi student ever meets 9-12.AP.13 depends
on whether their teacher assigns optional material after the course is
functionally over. As designed and assessed, Corgi covers nine core AP
standards. CS1 covers ten.

Second, the process standards. In Corgi, design, refinement, documentation, and
collaboration all land with intent in one place: the Unit 13 final project.
Open-ended moments do appear earlier, but they are sporadic, not the rhythm of
the course. Collaboration gets one lesson in Unit 3 - driver, navigator, list
the pros and cons - and one lesson on pair programming is not 9-12.AP.21 any
more than one lesson on essays is a writing curriculum.

### Conclusion

Evaluated independently, by a teacher who has examined and taught significant
chunks of both courses, the two look very similar in standards coverage. The
maps nearly match, and nothing in this appendix should be read as claiming
otherwise.

What the maps cannot show is where the coverage comes from, and I think that
difference is what predicts retention. CMU reads like a pedagogy executed first
and aligned afterward. The course is built around a rhythm - a creative task
and a collaborative task closing nearly every unit - and the standards coverage
falls out of that rhythm naturally. CodeHS reads more like a course designed by
a computer scientist trying to implement a specification - the standards. Both
approaches produce a defensible map.

Different students learn different ways - some prefer CMU, some prefer CodeHS -
but in three or so years, more have preferred CMU in every class that has seen
both. Some do CMU for fun and some come back to it after they finish my class.
That says something. And the rhythm of CMU works for students who need
predictability, and there are plenty of those. Students retain what they
repeatedly design, defend, and build with a partner. That is a hypothesis from
classroom observation, not a measurement, and I hold it accordingly.

Maybe that is the honest value of a standards comparison: not as a scorecard,
since the scores nearly tie, but as a way of seeing each course's depth and
methodology. Read that way, the maps above and the body of this post say the
same thing. Both courses cover the standards. I simply believe more strongly in
CMU's pedagogy, and the body of this post is why.

### Sources

- California Department of Education, *Computer Science Standards for California
  Public Schools, Kindergarten through Grade Twelve* (adopted August 2018),
  grades 9-12 core standards.
- CMU CS Academy, *CS1: Introduction to Programming - Course Description and
  Standard Alignment* (last updated 6/5/23), and its linked state-specific
  mapping to the California CDE Computer Science Content Standards.
- CMU CS Academy, *CS1 Scope and Sequence with Pacing Guide* (last updated
  3/15/23) and *CS1 Creative Tasks* guide.
- CodeHS, *Introduction to Computer Science with JavaScript (Corgi)* syllabus
  (course 17397).

Method: California standard text matched against each course's scope and
sequence or syllabus. CMU's nine claimed standards are taken from its California
document. 9-12.AP.14 is added on the basis of course content and the Creative
Task requirement that students justify their choice of concepts.

---

## Appendix D: Student Placement in Introductory CS

*Status: Still work in progress*

Many of the challenges teachers encounter with introductory CS curricula - including CMU CS Academy - are better understood as placement problems than curriculum problems. Students arrive in introductory CS courses with widely varying preparation, motivation, and prior exposure to programming concepts through tools like Scratch and MakeCode.

A student who is not ready for text-based programming will struggle in any text-based curriculum. The question worth asking is not only "which curriculum is better" but "which students are ready for this curriculum, and what do we offer students who are not yet ready."

Data from multiple years of classroom observation across CMU CS Academy, CodeHS, and CS50 AP is being compiled to address this question more concretely. That analysis will be added here when complete.

 * CMU is thoughtful about placement by design: CS1 is built around the reasoning and problem-solving maturity of an Algebra 1 student, while Exploring Programming (CS0) is the deliberately lighter middle school on-ramp. My experience teaching CS0 to sixth graders, and helpful modifications is here: [Sixth Graders and CMU's Exploring Programming (cs0)](/2026/07/13/sixth-grade-cmu-cs0.html)
 * TBD: Students guessing vs learning/retaining. Anecdotal (All platforms)
 * TBD: Code.org Discoveries progress skew (and other teacher observations)
 * TBD: Issues with highly sequenced Computer Science concepts and how that impacts student absenteeism, and generally assisting students that constantly fall behind. CS concepts are so tightly sequenced that skipping a unit is frequently not an option.

---

## Appendix E: CS50P as an Advanced Pathway

Harvard's CS50P - Introduction to Programming with Python - deserves mention for teachers and administrators thinking beyond introductory CS.

CS50P is the most pedagogically rigorous free Python curriculum I am aware of. Its sequencing is intellectually honest: loops arrive early, problem sets demand genuine decomposition, and the course treats students as capable of handling real programming challenges without relying on visual scaffolding for motivation. The unit on unit testing alone reflects a level of professional orientation that neither CMU CS Academy nor CodeHS approaches.

The bar CS50P sets is real. It assumes a degree of intrinsic motivation and tolerance for productive frustration that not all high school students - particularly in introductory placements - arrive with. In my experience it works well as a second course, a bridge from CMU CS1 to AP-level work, and as an accelerated track for students who are clearly ready for more.

It is not a replacement for a well-scaffolded introductory course. But for teachers building a CS pathway from middle school through AP, CMU CS Academy is the foundation and CS50P is the horizon worth planning toward.

---

*This post reflects classroom experience and professional judgment. It is intended as a resource for CS educators and the administrators who support them. Feedback is welcome.*