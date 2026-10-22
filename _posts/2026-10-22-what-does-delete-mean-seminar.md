---
layout: post
title: "What Does Delete Mean? A Socratic Seminar on a Doorbell Camera"
categories: draft
label: Lesson Plan
lesson_category: society
excerpt: "A doorbell camera, no subscription, and video the sheriff said had been disconnected. The FBI says it came from 'residual data located in backend systems.' A ready-to-run Socratic seminar on a question every engineer who builds one has to answer: what should a company promise when you press Delete?"
---

<!-- DRAFT NOTES FOR ERIC (delete before publishing)

LABEL AND CATEGORY. "Lesson Plan" is an existing label. I did not coin "Lesson Plan / Privacy." lesson_category: society is the closest existing fit; confirm. Add this slug to learn/_standards/carriers/porttack-society.json and run tools/publish_standards.sh.

FRAMING (from Eric): delete is mostly a constraint, not a decision. Big data stores mark things for deletion, and some cannot truly delete; file systems have worked this way for ages. The seminar therefore asks what a company should PROMISE and DISCLOSE about Delete, not what an engineer should make it do. The spoken engineer's note carries general CS statements that are not sourced to any article; verify against your own knowledge.

THE CASE IS REAL AND OPEN. Per reporting in early October, no one had been publicly identified and the sheriff and FBI were publicly disagreeing about the early investigation. The reading deliberately stays on the camera and the footage. It never speculates about the crime and never mentions the sheriff/FBI dispute, the ransom notes, or the Pima County politics. If a student goes there, redirect: "We are not discussing the case, only the camera." Check the current status before class.

WHAT I VERIFIED (read directly):
- NBC News, Feb 10-11, 2026 (Abbruzzese, Melendez, Schapiro): sheriff Nanos said the camera was disconnected at 1:47 a.m. and she had no subscription that would save video; Patel on X: "The video was recovered from residual data located in backend systems."; NBC says it is unclear how the FBI collected it and whether Google stored video without a subscription.
- Fox News, July 21, 2026 (Ruiz, Kramer): Patel: "there was a chance that it was located in their cache just before it was being deleted."
- CBS News, Feb 11, 2026 (Schecter): Stamos and Jackson quotes, verbatim.
- Fortune/AP, Feb 11, 2026 (Riddle, Liedtke): Higginbotham and Dahl quotes, verbatim; AP says Google did not answer its questions.
- Google Safety Center, safety.google/nest (Cameras FAQ): the offline-recording, visual-indicator, and delete-at-any-time sentences, verbatim. The page does NOT say how long video is kept without a subscription.

WHAT I COULD NOT VERIFY, AND LEFT OUT (all of these are in your Finding Fido slide deck):
- "Google's documentation says non-subscribers get only 3 hours of event video history." No source I could read gives a number of hours. NBC reports a different (30-day, standard tier) figure that it does not tie to non-subscribers.
- The Patel quote "We were able to go into their systems and actually excavate material that people would think would normally be deleted." The word "excavate" does not appear in the Fox article I read. It may come from a different interview. NBC quotes a different line ("execute lawful searches and go to these private sector companies and expedite results").
- "Google cooperated and used engineers to excavate the data."
- "4,000+ tips in 24 hours" and the Ring Neighbors App "within 2 miles."
- The deck's framing that Google "had video it told users didn't exist." What is documented is narrower: the sheriff thought no video was available; the FBI got video from backend systems; nobody has explained how or whether the footage was kept on purpose. The seminar is built on that uncertainty.
- "10 days later" is "more than a week" in NBC.
Also: the deck says Alex Stamos's quote is one statement. It is two, from the same CBS article. The reading quotes them as two.
-->

Slides: **[What Does Delete Mean?](/delete-seminar-slides/)**

## Learning goals

By the end of the seminar, students can:

1. Weigh a helpful and a damaging outcome of the same design decision: keeping data a user thinks is gone. AP CSP: [IOC-1.A](https://learn.porttack.com/standards/apcsp-standards-reference.html#IOC-1.A).
2. Explain the privacy risks of a company keeping personal data after a user deletes it, and how a simple button like Delete can hide a more complicated system. AP CSP: [IOC-2.A](https://learn.porttack.com/standards/apcsp-standards-reference.html#IOC-2.A); practice [P3 Abstraction in Program Development](https://learn.porttack.com/standards/apcsp-standards-reference.html#P3).
3. Separate what is documented, what an official says, and what nobody knows yet, and say which one a claim rests on.
4. Discuss as a group: cite the text, build on what others said, and change a position when the evidence changes.

## Materials

Reused as written from [Prove Me Wrong]({% post_url 2026-07-20-prove-me-wrong %}):

- [Norms to post]({% post_url 2026-07-20-prove-me-wrong %}#five-norms-to-post)
- [Fishbowl and hot seat guardrails]({% post_url 2026-07-20-prove-me-wrong %}#the-fishbowl-with-guardrails) and [boundaries]({% post_url 2026-07-20-prove-me-wrong %}#boundaries-said-once)
- [Entry ticket, observer organizer, and exit ticket]({% post_url 2026-07-20-prove-me-wrong %}#the-handouts)

Changes for this seminar:

- **Exit ticket:** add one line: "Write one sentence a company should promise customers when they press Delete, including how long it takes."
- **Readings:** parts 1 and 2 below. Part 2 is handed out partway through.
- **Slides:** [What Does Delete Mean?](/delete-seminar-slides/), with speaker notes and a diagram for the engineer's note.
- **Run of show:** below. Two rounds, no spoken third round.

This builds on [Finding Fido, or Finding You?]({% post_url 2026-03-04-finding-fido-or-finding-you %}), which covers Ring's Search Party. That lesson is about function creep and opt-out defaults. This one is about one question inside it: what "delete" means.

<style>
.seminar-reading{border:1px solid rgba(128,128,128,.35);border-radius:8px;margin:1.5rem 0;overflow:hidden;font-style:normal;}
.seminar-reading__bar{display:flex;align-items:center;justify-content:space-between;gap:.5rem;padding:.5rem .9rem;background:rgba(128,128,128,.12);border-bottom:1px solid rgba(128,128,128,.25);}
.seminar-reading__label{font-size:.75rem;letter-spacing:.05em;text-transform:uppercase;font-weight:700;opacity:.7;}
.seminar-reading__copy{display:inline-flex;align-items:center;justify-content:center;padding:.3rem;border:1px solid rgba(128,128,128,.4);border-radius:6px;background:transparent;color:inherit;cursor:pointer;opacity:.7;line-height:0;}
.seminar-reading__copy:hover{opacity:1;}
.seminar-reading__copy.is-copied{color:#2e7d32;border-color:#2e7d32;opacity:1;}
.seminar-reading__body{padding:1rem 1.15rem;line-height:1.6;font-style:normal;}
.seminar-reading__body p{margin:0 0 .75rem;font-style:normal;}
.seminar-reading__body p:last-child{margin-bottom:0;}
.seminar-reading__title{font-weight:700;font-size:1.05rem;margin:0 0 .9rem;}
.seminar-reading__body blockquote{margin:0 0 .9rem;padding:.4rem .9rem;border-left:3px solid rgba(128,128,128,.5);font-style:normal;}
</style>

## Reading, part 1: the camera

Hand this out first.

<div class="seminar-reading">
  <div class="seminar-reading__bar">
    <span class="seminar-reading__label">Student handout</span>
    <button type="button" class="seminar-reading__copy" onclick="copySeminarReading(this)" aria-label="Copy part 1 to the clipboard" title="Copy">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
    </button>
  </div>
  <div class="seminar-reading__body">
    <p class="seminar-reading__title">The Delete Button (Part 1)</p>
    <p><strong>1.</strong> In early February 2026, Nancy Guthrie, who is 84, was reported missing from her home in Arizona. The case is still open. This reading is not about the crime. It is about one camera.</p>
    <p><strong>2.</strong> Her front door had a Google Nest doorbell camera. The county sheriff said the camera was disconnected at 1:47 a.m. He also said she did not have a paid subscription that would have saved video.</p>
    <p><strong>3.</strong> More than a week after she disappeared, the FBI released video from that camera. FBI Director Kash Patel wrote on X: "The video was recovered from residual data located in backend systems." Months later he told Fox News that "there was a chance that it was located in their cache just before it was being deleted."</p>
    <p><strong>4.</strong> Google's own Nest safety page says this about its cameras:</p>
    <blockquote>"You can access, review, and delete this footage at any time."</blockquote>
    <blockquote>"Some models of our cameras support recording video footage while offline."</blockquote>
    <blockquote>"That means you may not see a visual indicator when your camera is sending the video footage to our servers."</blockquote>
    <p><strong>5.</strong> The same page says a visual indicator would have been visible when the camera was actually recording. It does not say how long video is kept if you do not pay for a subscription.</p>
    <p><strong>6.</strong> Here is what is still unknown. NBC News reported that it was unclear how the FBI collected the video, and whether Google stored video from a device without a subscription. Google did not answer reporters' questions about how the footage was captured or recovered.</p>
    <p><strong>7.</strong> In many computer systems, pressing Delete does not erase anything right away. The system marks the data as deleted and removes it later. You are the engineer on the team that decides what the company tells customers about Delete. A customer presses it. What should the company promise, and what should it tell them?</p>
  </div>
</div>

(Sources: NBC News, ["Investigators wrangled video from Nancy Guthrie's Google Nest camera out of 'backend systems,'"](https://www.nbcnews.com/tech/tech-news/investigators-wrangled-video-nancy-guthries-google-nest-camera-backend-rcna258460) Feb. 10, 2026; Fox News, ["Nancy Guthrie video may have been erased after FBI kept out for days, director says,"](https://www.foxnews.com/us/nancy-guthrie-video-may-have-been-erased-after-fbi-kept-out-days-director-says) July 21, 2026; [Google Nest Security & Privacy Commitments](https://safety.google/nest/), Cameras FAQ.)

## Reading, part 2: what experts said

Hand this out partway through, after the opening round and a few minutes of fishbowl, then run the temperature check again.

<div class="seminar-reading">
  <div class="seminar-reading__bar">
    <span class="seminar-reading__label">Student handout</span>
    <button type="button" class="seminar-reading__copy" onclick="copySeminarReading(this)" aria-label="Copy part 2 to the clipboard" title="Copy">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
    </button>
  </div>
  <div class="seminar-reading__body">
    <p class="seminar-reading__title">The Delete Button (Part 2)</p>
    <p><strong>8.</strong> Reporters asked computer security experts how video could come back from a camera that looked like it had no recording. Alex Stamos, a cybersecurity expert, told CBS News: "Internal storage uses a very lazy deletion mechanism, so the data wouldn't be available to users who didn't pay." He added: "The video for non-subscribers would be marked for deletion," and "the actual files might not be deleted for days."</p>
    <p><strong>9.</strong> Patrick Jackson, a former NSA data researcher, told CBS News: "There's kind of this old saying that data is never deleted, it's just renamed."</p>
    <p><strong>10.</strong> Stacey Higginbotham, a Consumer Reports policy fellow, told the Associated Press that unless a Nest user pays for a subscription, "Google routinely purges the footage rather than retain it indefinitely." She also said that if law enforcement asked for footage before it was overwritten, it could still be retrieved.</p>
    <p><strong>11.</strong> Michelle Dahl of the Surveillance Technology Oversight Project said: "We should absolutely be alarmed over the privacy implications that are at stake with this video that was recovered by the Nest camera." She added that if you rely on a camera for security, you should "look into options where that data is not transmitted off to a cloud."</p>
    <p><strong>12.</strong> The video the FBI released showed a masked person at the door. As of October news reports, that person had not been publicly identified.</p>
    <p><strong>13.</strong> Back to the promise. Has anything you just read changed what the company should say?</p>
  </div>
</div>

(Sources: CBS News, ["Cybersecurity experts explain how surveillance footage of Nancy Guthrie's home was recovered,"](https://www.cbsnews.com/news/cybersecurity-experts-nancy-guthrie-surveillance-footage-recovery/) Feb. 11, 2026; Associated Press via Fortune, ["Law enforcement thought Nancy Guthrie's smart camera was disconnected, but Google Nest still had the tape,"](https://fortune.com/2026/02/11/privacy-concerns-nancy-guthrie-google-nest-camera-footage-kidnapping/) Feb. 11, 2026.)

<script>
var SEMINAR_COPY_ICON='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
var SEMINAR_CHECK_ICON='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>';
function copySeminarReading(btn){
  var box=btn.closest('.seminar-reading');
  var el=box?box.querySelector('.seminar-reading__body'):null;
  if(!el){return;}
  var html=el.innerHTML;
  var text=el.innerText.trim();
  function done(){
    btn.classList.add('is-copied');
    btn.innerHTML=SEMINAR_CHECK_ICON;
    setTimeout(function(){btn.classList.remove('is-copied');btn.innerHTML=SEMINAR_COPY_ICON;},1500);
  }
  if(navigator.clipboard&&window.ClipboardItem){
    var item=new ClipboardItem({
      'text/html':new Blob([html],{type:'text/html'}),
      'text/plain':new Blob([text],{type:'text/plain'})
    });
    navigator.clipboard.write([item]).then(done,function(){seminarPlainCopy(text,done);});
  }else if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(done,function(){seminarPlainCopy(text,done);});
  }else{
    seminarPlainCopy(text,done);
  }
}
function seminarPlainCopy(text,done){
  var ta=document.createElement('textarea');
  ta.value=text;ta.setAttribute('readonly','');
  ta.style.position='absolute';ta.style.left='-9999px';
  document.body.appendChild(ta);ta.select();
  try{document.execCommand('copy');done();}catch(e){}
  document.body.removeChild(ta);
}
</script>

## The run of show

Rough minutes, scaled to your period.

1. **Norms, out loud (5 min).** Post them, read them, hold to them. Add one sentence: "We are talking about the camera, not the crime."
2. **Opening temperature check (3 min).** Students stand on a line. One wall: "Delete should mean gone, right away." The other: "Delete can take time, as long as the company tells you how long."
3. **Read part 1 (4 min).** Then the entry ticket, or students use one already filled out.
4. **Round 1, the promise (15 min).** Opening question to every student, briefly: "What should the company promise when you press Delete, and what should it tell you?" Then fishbowl with the hot seat.
5. **Between rounds, the engineer's note (3 min).** Spoken, in your words. See below.
6. **Round 2, the experts (10 min).** Hand out part 2. Run the temperature check again. Who moved, and what moved them?
7. **Closing temperature check (3 min).** One last move to the line.
8. **Reveal and exit ticket (10 min).** Your take as one opinion among many, then they write.

## The engineer's note (spoken)

This is where your background does the work, and it moves the argument. Students will assume Delete is a decision. It is mostly a constraint. Say it in your own words. The points below are general computer science, not sourced to any article, so check them against your own knowledge before using them.

- **File systems:** deleting a file usually removes the entry that points to it and marks the space as free. The bytes stay where they were until something else overwrites them. This has been true for decades.
- **Big data stores:** many large databases and logs are append-only. A "delete" writes a marker (often called a tombstone) saying the record is dead. The old bytes are removed later, when the system rewrites its files in a background cleanup, which can take days or longer.
- **Copies:** backups and replicas can hold the data after the live copy is gone.
- **Some stores can't delete one item at all** without rewriting a larger block, or by design never change what they have written.

Then ask: "So what can an engineer honestly promise?" The point is that the argument is not about whether companies *can* make data vanish instantly. It is about what they should promise, how long they should take, and whether they should say so up front. That ties directly to abstraction: Delete is one word on one button that hides a lot of machinery.

## Facilitator questions

Back-pocket only. The entry ticket asks students to write their own.

**Round 1:**

- Google says you can delete footage "at any time." If a copy lasts days after you press delete, did the company keep its promise?
- If a system cannot erase instantly, what is an honest button label? "Delete"? "Mark for deletion"? Something else?
- Should a company have to tell you how long "delete" really takes? Where would you put that information so you would see it?
- Should a company keep a video from a camera whose owner never paid to save it?
- Who is on that video besides the owner? The delivery driver, the neighbor, a guest. Do they get a say?

**Round 2 and the CS lens:**

- Delete is one word on a button that hides a lot of machinery. What else on your phone does that?
- Paragraph 10 says that if police asked in time, the footage could still be retrieved. Who should decide whether they can ask: the police, the company, a judge?
- The video may have helped the investigation. The same copy could be read by someone else. Is it possible to design a system that allows the first and prevents the second?
- Which statements in the reading are documented, which are one person's claim, and which are unknown? (Paragraphs 3, 5, and 6.)

**Deeper:**

- Is "we keep it in case it's needed" a reasonable default or a privacy risk? Who benefits from that default?

**After the reveal:**

- Where am I wrong?

## What to do if the conversation drifts

Students may want to talk about the crime itself, a theory, or the people involved. Redirect once, calmly: "We are not discussing the case. We are discussing the camera." Then return to the question. This is a real, open case about a real family, and the seminar does not need any of it.

## The reveal

*[Eric: your take goes here, held back until the last ten minutes and offered as one opinion among many.]*

## Evidence of learning

All of this is collected during the seminar. Nothing needs a separate quiz.

| Goal | Evidence | What meeting it looks like |
|---|---|---|
| 1. A helpful and a damaging outcome | Entry ticket: a starting side and two pieces of evidence by paragraph number. Exit ticket. | A position that names both something the kept video made possible and something it risks, and cites the reading. |
| 2. Privacy risk of keeping data | The added exit-ticket line: "Write one sentence a company should promise customers when they press Delete, including how long it takes." | A promise stated clearly enough to hold a company to, with a reason that refers to risk (who else could read it, for how long) and to what a system can actually do. |
| 3. Documented, claimed, unknown | Fishbowl talk on the last Round 2 question, tracked on the observer organizer. | Sorts a specific statement from the reading into documented, claimed, or unknown, and says why. |
| 4. Discussion | Observer organizer, including the tally of times a student built on someone else's idea. Three temperature checks, with a count of who moved and why. | Builds on a peer by name, cites a paragraph, and can say what moved them (or why they held). |

I grade evidence and honesty, not the position landed on. "I changed my mind because of what someone said" is the best possible answer.

## Standards

Same Common Core alignment as [Prove Me Wrong]({% post_url 2026-07-20-prove-me-wrong %}): SL.6.1 / SL.9-10.1, SL.6.3 / SL.9-10.3, RI.6.1 / RI.9-10.1, RI.6.8 / RI.9-10.8, W.6.1 / W.9-10.1. Goal 3 is RI.6.8 / RI.9-10.8 in practice: evaluating which claims are supported.

**AP CSP, Big Idea 5, Impact of Computing.** This seminar touches:

- **5.1 Beneficial and Harmful Effects.** One outcome that is helpful in one respect and damaging in another.
- **5.6 Safe Computing.** The privacy risk of stored personal data, including data the user thinks is gone.

Check these topic labels against the current College Board framework before citing them formally.
