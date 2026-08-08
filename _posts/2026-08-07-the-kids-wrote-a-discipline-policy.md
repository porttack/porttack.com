---
layout: post
title: "The Kids Wrote a Discipline Policy"
date: 2026-08-07
categories: draft
# on publish, change categories to: opinion ai education
# on publish, set date: 2026-08-15
description: "98 teenagers spent a weekend writing the nation's first student-led AI policy for schools. Forty-nine provisions later, they had built an enforcement system. That is not their failure."
image: /assets/img/students-first-act-og.png
---

From July 17 to 19, ninety-eight high school students met in Boston and wrote a national AI policy for schools. Start with what they said about themselves.

{% include section-tabs.html default="2" %}

## What happened

They represented all fifty states, met in the replica Senate chamber at the Edward M. Kennedy Institute in Boston, and were hosted by the Institute, by AASA (The School Superintendents Association), and by Day of AI, a nonprofit out of MIT's RAISE initiative. Over one weekend they drafted, amended, and passed the STUDENTS FIRST Act.

It is not law. It will never be law. But AASA is sending it to roughly ten thousand school leaders, many of whom are writing their own AI rules right now, in the absence of anything from Congress or most state legislatures. That makes it worth reading closely.

{% include callout.html type="source" title="Read the bill, not the coverage" body="Nine pages, five sections, forty-nine numbered provisions. NPR's reporting is good and I have linked it below. The bill is better, and it is short enough to read over coffee." link="https://www.aasa.org/docs/default-source/resources/reports/17_s-2026-the-students-first-act-final-bill-passed-84-14-july-19-2026.pdf" linktext="Download the STUDENTS FIRST Act (PDF, AASA)" %}

## The part where I put my old job on

Before I taught high school computer science I spent about twenty-five years building software, including some time running engineering organizations. Section 4, provision 2 of the bill requires teachers to use one standardized AI detector on every graded written assessment. Section 2, provision 1 tells students to preserve their document history so they can defend themselves against false positives.

The students noticed the tool does not work. They mandated it anyway.

AI detectors are not currently bad. They are structurally bad, and the reason is arithmetic, not engineering. Any test for a rare condition produces mostly false positives, because the small error rate applies to the enormous innocent population and the large true-positive rate applies to a small guilty one. You cannot fix this with a better model. You can only fix it by not running the test.

{% include detector-math.html %}

Play with that. Set the assumptions however you like, including generously in the vendor's favor. Then look at the last number.

Two things about detectors are documented rather than argued. OpenAI withdrew its own AI text classifier in July 2023, six months after launch, citing low accuracy. And a 2023 study in *Patterns* found that GPT detectors flagged writing by non-native English speakers at dramatically higher rates than writing by native speakers. In a California public school, that second finding is not an abstraction. That is a named list of kids.

## Then count the rest

Widen out from detectors to all forty-nine provisions. I read every one and sorted it into one of three buckets: does it **control** somebody, does it grant a **right**, or does it build a **capability**? Twenty control. Seventeen are rights inside a disciplinary process: appeals, explanations, opt-outs. Protections against the machinery, not escapes from it. Twelve build a capability, and half of those are training schedules.

Ninety-eight thoughtful students, handed a blank page and a weekend and told to say what school should do about the most significant new technology of their lives, produced an enforcement system with an appeals process bolted on.

{% include callout.html type="quote" title="The ratio is the finding" body="Forty-nine provisions. Twenty about catching people. Seventeen about surviving being caught. Twelve about becoming able to do something. If that ratio describes your district's AI policy too, the students did not get it wrong. They got it exactly right." %}

## They found the line

Not all forty-nine provisions are enforcement. One of them is the best-written rule in the bill.

I have spent two years arguing for a two-part policy on AI in my classroom. Restrict it hard while students are building fundamentals, because the struggle is where the learning happens. Then open it up as a multiplier once the fundamentals are actually there. I have made that argument to colleagues, to parents, and on this blog, and it has never once been an easy sell.

Section 2, provision 4 of the STUDENTS FIRST Act:

> Students should never use AI for the act of writing, though editing, brainstorming, and studying with AI is permitted after eighth grade. How to edit written assignments (without AI assistance) should be taught and assessed thoroughly prior to eighth grade before students use AI for editing.

Read that last sentence again. Not just "no AI until eighth grade." The skill has to be taught, and assessed, *before* the tool is allowed. They built the prerequisite into the rule.

Nobody argued them into that. No adult handed them a framework. They arrived at it in a weekend because they can feel, from the inside, the difference between learning something and having something produced for them. Ask a sixteen-year-old whether AI helped them and you get a shrug. Ask them to write the rule and they will protect the struggle.

That is the single best-written sentence in the bill and it should be on a poster in every district office in the country.

## This is not their failure

I want to be careful here, because the easy version of this essay is a dunk on teenagers, and that is not the essay.

These students were serious. They fact-checked each other on the floor. West Virginia's Ethan Liu stood up and voted against his own side's bill because he had found internal contradictions in it, then changed his vote when the organizers let them fix a few. Maine's Zora Nobel said out loud, in her floor statement, that the bill contained repetitive provisions, prescriptive language, and contradictions, and voted for it anyway as a foundation. That is a better standard of intellectual honesty than most adult policy documents clear.

They did not produce a control system because they are punitive. They produced one because "policy" is a genre, and the only examples of it they have ever encountered are the student handbook, the academic integrity policy, the acceptable use agreement, and the consequence ladder taped inside the classroom door. Ask someone to write in a genre and they will reproduce its conventions. We taught them the conventions.

The bill is not a proposal. It is a portrait. It is what twelve years of schooling looks like from the inside, rendered in legislative language by the people who went through it.

## Back to the student at eleven at night

Section 3, provision 10. School-licensed chatbots must detect when a student is reaching for emotional support or life advice. When detected, the software must not fulfill the request, and should alert school officials. The bill lists them: principals, assistant principals, secretaries, counselors, and school resource officers.

Detect. Refuse. Report.

That is the same three-step algorithm as the plagiarism sections. Same shape, same order, same instinct. Applied here to a child who is frightened.

The students had a real reason for it, and it is a serious one. Iowa's Dylan Dornack argued on the floor that for a student in crisis, a machine that alerts a human could be the thing that saves them, whether or not that student is afraid of being outed in the process. He is not wrong that some disclosures need a person. That provision deserves more than a paragraph, and it collides with FERPA, with mandatory reporting law, and with the bill's own Section 1. I am writing that up separately and will link it here when it posts.

But notice how they got there. They did not ask what a student in that moment needs. They asked who needs to be notified. That is not cruelty. That is the only vocabulary we gave them.

We asked children what school should do about a technology that will define their working lives. They told us school's job is to catch them.

I think we should believe them.

---

## References

- STUDENTS FIRST Act, full text: [AASA (PDF)](https://www.aasa.org/docs/default-source/resources/reports/17_s-2026-the-students-first-act-final-bill-passed-84-14-july-19-2026.pdf). Provisions cited above by section and number.
- AASA resource page and student floor statements: [The Students First Act: A Student-Led AI Policy](https://www.aasa.org/resources/resource/students-first-act)
- Cory Turner, "Adults have struggled to set rules for AI in school. These teens figured it out," NPR, July 30, 2026: [npr.org](https://www.npr.org/2026/07/30/nx-s1-5853571/students-set-ai-policy)
- OpenAI, "New AI classifier for indicating AI-written text," updated July 20, 2023, announcing the classifier's withdrawal for low accuracy.
- Liang, Yuksekgonul, Mao, Wu, Zou, "GPT detectors are biased against non-native English writers," *Patterns*, 2023.

**A note on the vote count.** NPR and AASA's resource page both report the final vote as 82 to 16. The filename of the bill AASA publishes says 84 to 14. I have not been able to reconcile the two. Where I say the vote was lopsided, that much is not in dispute.

**A note on wording.** NPR summarizes the bill as banning AI on graded *tests*. The text (Sec. 2, prov. 9) says all graded *assessments*, which is considerably broader. If you are drafting district policy from the news coverage, read the text.

**A note on vendor bias disclosure.** Section 1, provision 1 requires any vendor selling generative AI to schools to "address all known biases" in their product and disclose them to districts, which must then pass them along to parents. I understand what the students wanted. I cannot tell you how a vendor would comply. The word "known" is carrying weight no vendor can lift, and a requirement no one can satisfy is a requirement everyone ignores.
