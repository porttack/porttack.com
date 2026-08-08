---
layout: post
title: "What Happens When the Chatbot Tells the Principal"
date: 2026-08-08
categories: draft
# on publish, change categories to: opinion ai education privacy
# on publish, set date: 2026-08-22
description: "One provision of the student-written STUDENTS FIRST Act routes a student's late-night disclosure to five categories of adult, including police. The instinct is defensible. The routing list is not."
image: /assets/img/chatbot-routing-og.png
---

*This is a follow-up to [The Kids Wrote a Discipline Policy]({% post_url 2026-08-07-the-kids-wrote-a-discipline-policy %}). You can read it cold, but the short version of that piece is: ninety-eight students wrote a national AI policy for schools this summer, and most of it turned out to be an enforcement system. This is about the one provision I could not fit in.*

Here is the text. Section 3, provision 10 of the STUDENTS FIRST Act:

> School-purchased/licensed AI software, specifically, chatbots/LLMs, must be able to detect when students attempt to use them for emotional support or life advice. When detected, this software should take action, which may include alerting school officials (including but not limited to: principals, assistant principals, secretaries, counselors, and school resource officers, if available). In such instances, machines cannot fulfill students' requests.

The first thing to notice is where it lives. This is in Section 3, which is titled Parents and Guardians Provisions. A rule about what happens inside a student's private conversation was filed under the section about parental rights. I do not think that was deliberate. I think it says something anyway.

## The case for it, made properly

I want to steelman this before I take it apart, because the students had a real argument and it deserves better than a strawman.

On the Senate floor, Iowa's Dylan Dornack argued that for a student in crisis, a machine that pulls a human into the loop could be the difference. He specifically addressed the objection that a student might be afraid of being outed, and said the risk was worth it. His framing, reported by NPR: this is one of those things that has to be taken to trusted adults.

He is right about the core of it. A language model is not a clinician. It has no ability to check on someone tomorrow. It cannot call anyone. It cannot notice that a kid has stopped coming to fourth period. A system that lets a student pour out a crisis into a text box and then does nothing at all has not helped them. It has only made them feel briefly heard by something that will not remember.

So the instinct is sound. A machine that recognizes a student in danger should get a person involved.

The problem is not the instinct. The problem is that "a person" is not what the provision says.

## The routing list is the problem

Principals. Assistant principals. Secretaries. Counselors. School resource officers. And the phrase "including but not limited to," which in a policy document means the list can grow.

{% include disclosure-routing.html %}

One of those five is a person trained to receive this. The others are, in order: two administrators who run the discipline system, a front office staff member with no confidentiality training and no professional obligation, and a police officer.

Put yourself back at eleven at night. You are fifteen. You are working up to typing the sentence. Somewhere in your head is the knowledge that this thing reports to the front office.

You do not type the sentence.

That is the failure mode. Not a privacy violation in the abstract. A surveillance system built to protect a student that makes that student go quiet is not a partially effective safety system. It is a system that has removed one of the few low-stakes places a scared kid had left, and replaced it with nothing.

{% include callout.html type="warn" title="The design test" body="Any crisis-detection system has to answer one question before anything else: does a student who knows exactly how this works still reach for it? If the honest answer is no, the system does not protect students. It filters out the ones who were paying attention." %}

## What a district would actually have to answer

I am a computer science teacher, not a lawyer, and nothing here is legal advice. But I have sat through enough vendor procurement to know which questions make a district's counsel sit up, and this provision generates several. If your district is drafting AI policy from this document, these are the ones to put in front of your attorney.

**Are the chat logs education records?** FERPA (20 U.S.C. § 1232g, implemented at 34 CFR Part 99) covers records directly related to a student and maintained by the school or by a party acting for the school. A district-licensed chatbot storing conversations tied to a student account looks a great deal like a party acting for the school. If those logs are education records, everything downstream changes: parental inspection rights, disclosure limits, and the annual notification requirement.

**Does every name on that list qualify as a school official?** FERPA permits disclosure without consent to school officials with legitimate educational interests, but the district has to define who those officials are and what counts as a legitimate interest, in its annual notification. A school resource officer can qualify under that exception if the district has done that work. Most districts have not done it with chatbot logs in mind. And "secretaries" as a blanket category, receiving a student's disclosure of a mental health crisis, is going to be a hard sentence to write into a notification.

**Or is this a health or safety emergency?** There is a narrow exception at 34 CFR § 99.36 for an articulable and significant threat, allowing disclosure to appropriate parties. It is meant to be construed narrowly, it requires a contemporaneous record of the disclosure and the threat, and it is an emergency exception rather than a standing routing rule. The bill's provision is a standing routing rule. Those are different legal animals.

**What does state law say about counselor confidentiality?** This is where I think the provision has its sharpest collision. In California, Education Code section 49602 makes information disclosed by a pupil twelve or older to a school counselor confidential, with specific enumerated exceptions, and provides that it is not part of the pupil record. The bill would route substantially similar disclosures to a secretary and a police officer. Check your own state's equivalent. If you are in California, check 49602 against provision 10 line by line.

**What about the ed tech privacy statutes?** California's SOPIPA (Education Code 22584) constrains what operators of school-directed online services may do with student information. A chatbot that classifies students by emotional state and transmits that classification to school staff is doing something that statute was written to think about.

**And mandatory reporting?** Mandatory reporting law, in California the Child Abuse and Neglect Reporting Act, is triggered by reasonable suspicion of abuse or neglect. It is not a general duty to report that a student is sad. Conflating the two is a common error, and this provision reads like it was written by people who had heard of mandatory reporting and assumed it was broader than it is.

**One more, on the bill's internal logic.** Section 1, provision 3c of the same bill says nothing in the act shall preempt federal or state laws regarding student privacy and data protection. If provision 10 conflicts with FERPA or state counselor confidentiality law, the bill has already told you which one loses. The students built the safety valve. They may not have noticed they needed it.

{% include callout.html type="note" title="Also worth reading side by side" body="Section 5, provision 1 of the same bill instructs administrators to keep counselors away from AI tools entirely, especially in mental health contexts, because students should get face-to-face help. Section 3, provision 10 routes a student's mental health disclosure to the front office secretary. Both passed. Both are in the document going to ten thousand superintendents." %}

## What a better rule looks like

None of this argues for doing nothing. It argues for a shorter list and an earlier disclosure. Six changes, in rough order of how much they matter:

1. **Route to a named role, not a category list.** One designated person, with a named backup. A counselor or a school psychologist. Not five buckets and an open-ended "not limited to."
2. **No school resource officer by default.** Police involvement should require a specific, articulable, immediate threat, decided by a human, and it should be logged. It should not be a default recipient in a routing table.
3. **Tell the student before they type.** The single most important fix. A visible, plain-language notice in the interface, before the first message: here is who can see this. Provision 10 requires the reporting and never once requires telling the student it exists. A student who is informed can make a choice. A student who is surprised has been trapped.
4. **Do not make the machine go silent.** The provision says the software cannot fulfill the request. So the student gets refused and reported in the same breath. At minimum, the tool should surface the 988 Suicide and Crisis Lifeline and the district's own resources, and say plainly what it is about to do and why.
5. **Set a retention limit and write it down.** How long do these logs live, who can query them, and does a flag follow the student into next year's records? If the district cannot answer that, it is not ready to buy the tool.
6. **Separate detection from discipline.** A crisis flag must never be routed into, or usable by, the conduct system. That boundary needs to be architectural, not a promise in a policy document.

None of that is exotic. It is the ordinary practice of not designing a reporting pipeline before you have designed the thing it reports to.

## The part that keeps bothering me

The students got the shape of this from somewhere.

Detect, refuse, report. It is the same three steps the bill applies to a suspected essay. Same order, same instinct, and in this case, aimed at a child who was frightened enough to type it into a chatbot at eleven at night instead of telling anyone at school.

They did not ask what that student needs. They asked who has to be notified.

I keep coming back to that because I do not think they invented it. I think they learned it. And I think the fix is not a better routing list. The fix is a school where a fifteen-year-old has a person to go to before they have a text box.

---

*If you or a student you know is struggling, the 988 Suicide and Crisis Lifeline is available by call or text, 24 hours a day, in the United States.*

---

## References

- STUDENTS FIRST Act, full text: [AASA (PDF)](https://www.aasa.org/docs/default-source/resources/reports/17_s-2026-the-students-first-act-final-bill-passed-84-14-july-19-2026.pdf). Provision 10 appears in Section 3.
- Cory Turner, "Adults have struggled to set rules for AI in school. These teens figured it out," NPR, July 30, 2026: [npr.org](https://www.npr.org/2026/07/30/nx-s1-5853571/students-set-ai-policy). Source for Dylan Dornack's floor argument.
- Family Educational Rights and Privacy Act, 20 U.S.C. § 1232g; 34 CFR Part 99. School official exception at § 99.31(a)(1); health or safety emergency exception at § 99.36; recordkeeping at § 99.32.
- California Education Code § 49602 (confidentiality of pupil disclosures to school counselors).
- California Education Code § 22584 (Student Online Personal Information Protection Act).
- California Penal Code § 11164 et seq. (Child Abuse and Neglect Reporting Act).

**Before you publish or forward this:** every statutory citation above should be checked against the current text, and state law varies enormously. I am confident about the shape of the problem. I am not your lawyer, and neither is a blog post.
