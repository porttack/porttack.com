---
layout: post
title: "Sixth Graders and CMU's Exploring Programming (cs0)"
date: 2026-07-13
categories: draft
label: Curriculum Review
excerpt: "Three years teaching CMU CS Academy's CS0 to sixth graders: the content is within their reach, but there are modifications that help."
excerpt_separator: <!--more-->
---

*Draft - not yet public. This is a very early stage draft. The goal here is to learn from the past few years, improve delivery and results, and apply to the 9th grade cs1 offering.*

See also: Blog post [CodeHS vs CMU](/2026/06/10/codehs-vs-cmu.html).

CMU CS Academy designed Exploring Programming (CS0) for middle school and short high school settings. I have spent three years teaching it to the youngest students in that band: sixth graders, most with no programming experience beyond whatever Scratch exposure their elementary years happened to include. The question I get from other teachers - and the question I asked the CMU community myself before I started - is whether sixth graders can actually succeed with a real, text-based Python curriculum.

They can. But the answer comes with a finding that took me two years of classroom data to state plainly, and it changed how I teach the course.

<!--more-->

## The bottleneck is reading, not programming

Nothing in CS0's first three units exceeds what a typical eleven-year-old can reason about. Shapes, coordinates, parameters, properties, then animation and conditionals - the conceptual load is fine. Cartesian coordinates are new to sixth graders, but they are nearly as new to seventh graders; waiting a year buys almost nothing on the prerequisite that looks scariest on paper.

What sixth graders reliably struggle with is sustained, self-paced technical reading. CS0's interactive notes are excellent - I have argued elsewhere that text-based instruction is one of CMU's decisive advantages over video-based platforms - but the default model asks students to read carefully, alone, at their own pace, and eleven-year-olds are unevenly ready for that. My classroom data made this concrete: the students who fell furthest behind were not failing at programming concepts. They were failing at the notes. Meanwhile, students learned to pattern-match their way past the embedded checkpoints without genuinely reading, a behavior other CS0 teachers in the CMU community have described almost identically.

## What closed the gap

**(Is closing the gap the right heading here??)**

The fix was not to restructure CMU's curriculum. It was to change who does the reading, while keeping CMU's sequence fully intact:

- **Live checkpoint demonstrations.** I work through the notes' checkpoints at the projector, and students predict the output before each Run. Then they redo the same checkpoints individually on their own accounts. The sequence is unchanged; the comprehension floor is new.
- **Point targets by date** rather than vague "keep working" pacing, using the platform's own exercise points.
- **A companion workbook** adding retrieval practice on paper for each lesson - reading support, not curriculum replacement. **(Is it reading support, or re-teaching, or ? This is getting updated before this post goes out. Initial version worked, but an updated version will help significantly.)**
- **Time-boxed creative tasks** with a design guide due on day one, so the open-ended work CMU rightly includes doesn't quietly consume weeks. **(I've not had success with this yet. Is this claim appropriate?)**

The honest caveat: this is teacher-led delivery layered on a self-paced platform. A teacher running CS0 with sixth graders purely as designed - students reading independently, teacher circulating - should expect the reading bottleneck I hit. The curriculum is age-appropriate; the delivery model needs an assist at this age.

## The teacher community is part of the curriculum

None of the above was invented alone, and that is itself a point in CMU's favor. Because CMU offers one sequenced curriculum, the teacher forum is dense with people who have taught exactly your lesson to students like yours. When I asked about sixth graders, program staff explained the design reasoning behind the checkpoints and suggested read-aloud accessibility tooling, which the platform supports. Another middle school teacher shared companion worksheets he had built to slow his students down in the notes - the direct ancestor of my workbook. That kind of specific, experience-rooted help is hard to overstate as an asset.

My workbook for Unit 1 is here: [LINK - workbook v1]. An updated edition covering the full course is in progress: **TBD**.

## What students make

*TBD: embed animated GIF compilation of student creative task work.*

The output is the argument, honestly. Sixth graders writing real Python, producing drawings and animations they chose and designed - that is what "accessible" looks like in practice.

---

## Appendix: CS0 vs Code.org CS Discoveries

My best alternative for this age group is Code.org's CS Discoveries, mostly Unit 3 (interactive animations and games). It works, and I still reach for it with mixed 6-7-8 classes where classroom management is the dominant constraint. A fair comparison, from having taught both:

**Where Discoveries wins.** Block-based means a far lower reading and typing load, so students reach events, loops, and conditionals - genuine algorithmic thinking - faster. For a ten-week wheel or a class that didn't choose CS, that speed matters.

**Where CS0 wins.** Real Python carries real status with this age group, and the fluency transfers directly to CS1 and beyond. The interactive notes, for all the scaffolding they require at this age, teach students to read technical material - a skill Discoveries never demands. The exercise structure gives strong students genuine headroom rather than a ceiling. And the creative task rhythm, with design documentation and rubric scoring, is a stronger pedagogical spine than Discoveries' project structure.

**What I can't yet claim.** I have impressions about which curriculum sends more students back to CS electives later, but they are confounded by which classes get which curriculum, so they stay out of this post. *TBD: revisit if placement data compilation produces something defensible.*

---

*This post reflects classroom experience and professional judgment. Feedback is welcome.*

*Working thread for this draft: [Claude conversation](https://claude.ai/chat/5aeb6149-948e-4b84-8f13-32f35744c32d) - remove before publishing.*