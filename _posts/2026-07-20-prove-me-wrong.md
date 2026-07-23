---
layout: post
title: "Prove Me Wrong: A Socratic Seminar on AI and Cheating"
date: 2026-07-20
categories: lesson-plans
label: Lesson Plan / AI Literacy
excerpt_separator: <!--more-->
excerpt: "A ready-to-run Socratic seminar built around a true AI-cheating story: the reading, the norms, a fishbowl with a hot seat, an entry ticket, an observer organizer, an exit ticket, a clear boundary for the student who came to perform, and the California standards it covers. The format is taught first, on accessible content, with my own opinion held back until the end."
---

Before I explain the lesson, read what my students read. It is a true story, and it is the whole hook.

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
</style>
 
<div class="seminar-reading">
  <div class="seminar-reading__bar">
    <span class="seminar-reading__label">Student handout</span>
    <button type="button" class="seminar-reading__copy" onclick="copySeminarReading(this)" aria-label="Copy the reading to the clipboard" title="Copy">
      <svg class="seminar-reading__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
    </button>
  </div>
  <div class="seminar-reading__body" id="seminar-reading-text">
    <p class="seminar-reading__title">The Test That Everyone Aced</p>
    <p><strong>1.</strong> A college professor named Roberto Serrano has taught the same class for almost twenty years. He gives a hard midterm every year. Normally, students score somewhere in the 60s and 70s. A perfect score is rare.</p>
    <p><strong>2.</strong> One year, he let his students take the midterm at home instead of in class. When he graded them, almost everyone did great. The class average was 96 out of 100. Forty students got a perfect score. Professor Serrano was not happy. He was suspicious. A test that hard should not suddenly be that easy.</p>
    <p><strong>3.</strong> So he tested his idea. He typed his own test questions into an AI chatbot, the kind like ChatGPT. The chatbot gave back answers. Some of them looked exactly like what his students had turned in, even the strange parts. It looked like students had let the AI take the test for them.</p>
    <p><strong>4.</strong> So Professor Serrano made the class a deal that was really a dare. The next test, the final, would be taken in the room, on paper, with no phones and no computers. If the class scored as high as they did at home, both tests would count. If they crashed, he would have his answer. <strong>Prove me wrong.</strong></p>
    <p><strong>5.</strong> They could not. The in-class average dropped to about 48 out of 100, the lowest he had ever seen. Some students who had scored a perfect 100 at home did not even show up for the final.</p>
    <p><strong>6.</strong> Here is what the professor believes, and it is worth arguing about. He thinks the struggle of working something out in your own head is how your brain actually learns it. When a computer does the hard thinking for you, you get the answer, but you do not get the learning. The students had a great score. They did not have the knowledge underneath it.</p>
    <p><strong>7.</strong> But there is another side. AI is not always bad for learning. If you already understand something, AI can help you go further and faster, like a coach or a smart study partner. A calculator does not hurt you in math once you already know how the math works. The hard question is this: when does the tool help you, and when does it steal the practice you needed?</p>
  </div>
</div>
<script>
var SEMINAR_COPY_ICON='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
var SEMINAR_CHECK_ICON='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>';
function copySeminarReading(btn){
  var el=document.getElementById('seminar-reading-text');
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

My students argue that story out before they hear a word from me. And where I land tends to surprise people: I do not think the students are the real failure here. That is the argument I make [in a separate post (Brown University: The Midterm Averaged 96. The Final Averaged 48.)](/2026/07/15/brown-university-ai-students.html), and it is exactly the kind of thing I keep out of the room until the very end. Everything below is how I hold my tongue.

(The reading above is the whole handout, paragraph numbers and all. Lift it as is.)

<!--more-->

## The one design move

A seminar tells a class that their voice does the work, not my slides. The risk is that a seminar is a skill students do not have yet. Hand them a dense text and a brand-new format at the same time, and they will spend all their attention decoding the reading, with none left for the actual hard thing, which is talking to each other well. So the whole plan rests on one move: teach the format on content that is easy to read but genuinely worth arguing about. The story does the pulling. The format is what we practice.

Three choices follow from that:

- **Inquiry first.** The text is just the facts and the tension. My own opinion is the reveal at the end, offered as "here is where I landed, and you can disagree." It keeps the discussion from becoming a game of guess-what-the-teacher-thinks.
- **A fishbowl with a hot seat.** A small group in the center keeps it controllable. An empty chair gives everyone else a low-commitment way in.
- **A before-and-after temperature check.** Borrowed from Oxford-style debate, where the room is polled before and after and the winner is whoever changed the most minds. The point is not to win. It is to be moved.

## The run of show

Scaled to whatever time you have. Rough minutes:

1. **Norms, out loud (5 min).** Post them, read them, hold to them.
2. **Opening temperature check (3 min).** Students stand on a line across the room: one wall "AI is basically a calculator," the other "AI is different and takes something from you." Note where the room sits.
3. **Opening round (4 min).** One question, and every student answers briefly from their entry ticket. No one has to be brave to go first, because everyone goes.
4. **The seminar (20 min).** Fishbowl with the hot seat. I stay mostly silent. Stretch and swap the center group once if the energy earns it.
5. **Closing temperature check (4 min).** Students move to the line again. Who shifted, and what moved them?
6. **Reveal and exit ticket (10 min).** I share my take as one opinion among many, and they write.

## Five norms to post

1. One voice at a time.
2. Build on what came before ("Adding to what ___ said...").
3. Cite the text or a real example when you make a claim.
4. Disagree with the idea, not the person.
5. Invite quiet voices in. Silence is thinking time, not dead air.

The last one is aimed at me. The instinct is to fill every pause, and filling pauses is what kills student talk.

## The fishbowl, with guardrails

Four to six students in the center talk. One extra center chair stays empty: the hot seat. Everyone else is on the outside with the observer organizer. The outer circle is not the bench. Listening well is the second skill of the day, and the organizer is what makes it visible and gradable.

Three guardrails:

- **Control the chair the first time.** An open invitation becomes a stampede. The first time, a student raises a hand, I wave them into the hot seat, they make their point, they return. Loosen it once they can handle it.
- **Stack the first circle.** For the debut, hand-pick students who will set the bar rather than clown. Say out loud that the circle rotates all year, so it does not read as favoritism.
- **Keep the observer job simple.** The first time, the task is concrete and non-social. Save partner critique for later.

My job in the center is small: protect the silence, and reach for a back-pocket question only when the room stalls.

## Boundaries, said once

I will have a student or two who would rather be the show than join it. Feeding that with a back-and-forth in front of an audience is the worst move, because the audience is the reward. So I set the boundary once, out loud, at the start, and then enforce it without a scene.

The fishbowl gives a calm ladder. A seat in the circle is a privilege, not a right. Break a norm to grab attention and the first consequence is quiet and automatic: you move out to the observer seats and pick up the organizer. If it continues, you step outside and rejoin when you are ready to work. Because I said all of it up front, enforcing it is not a punishment invented on the spot. It is just what I told them would happen, which drains the drama and denies the attention that was the point.

The goal is not to be harsh. It is to protect the students who came to think from the one who came to perform.

## Facilitator questions

Back-pocket only. The goal is that students generate their own (the entry ticket asks them to). I open with one and hold the rest in reserve.

**Opening (pick one):**

- The professor dared the class instead of reporting them. Fair, or a trap?
- Is struggle really how we learn, or just wasted time when a machine can hand you the answer?

**Core:**

- Is using AI on schoolwork like using a calculator in math, or something different? What is the difference?
- A student got a 96 they could not repeat. Who failed: the student, the professor, or the test?
- If a tool can do the work for you, what is left to make you want to do it yourself?

**Deeper (what school is for):**

- If AI can instantly do the writing and the routine problem-solving, what are we here to learn?
- If a grade rewards willingness to press a button, what should school measure instead?

**After the reveal:**

- Where am I wrong?
- Struggle you should protect, versus the boost AI gives once you already know something: how do you tell which one you are in?

## The handouts

**Entry ticket** (pre-work, or filled out in class right after reading together):

> 1. **Two questions** the story raises for you, ones you could actually argue about.
> 2. **A starting side, and why.** Changing your mind during the seminar is not losing. It is the point.
> 3. **Two pieces of evidence** from the reading, by paragraph number.

**Observer organizer** (the outer circle fills it in while watching; it is their ticket into the hot seat):

| What to catch | Who said it | My note |
| --- | --- | --- |
| An idea I agreed with | | |
| An idea I would push back on | | |
| The strongest point made | | |
| A question nobody has asked yet | | |

Plus one line at the bottom: *tally each time someone builds on another person's idea instead of starting over.* That move is the difference between a discussion and a set of speeches.

**Exit ticket:**

> Did your thinking move today? Three sentences: what you believed walking in, what you believe now, and what said or asked in the room moved you (or held you in place).

I grade effort and honesty here, not the position landed on. "I changed my mind because of what someone said" is the best possible answer.

---

## Appendix: California standards and mandates

Paraphrased. Confirm exact wording against the official California Department of Education documents before citing formally.

**Common Core ELA (California adoption)**

- **SL.6.1 / SL.9-10.1:** engage in, and at 9th drive, collaborative discussions, building on others and justifying one's own views. The spine of the activity.
- **SL.6.3 / SL.9-10.3:** delineate and evaluate a speaker's argument, reasoning, and evidence. The observer's job.
- **RI.6.1 / RI.9-10.1:** cite textual evidence to support analysis. The entry ticket and the cite-the-text norm.
- **RI.6.8 / RI.9-10.8:** trace and evaluate an argument and its specific claims. The seminar in motion.
- **W.6.1 / W.9-10.1:** write to support a claim with reasons and evidence. Entry and exit tickets.

**CTE Anchor Standards**

- **2.0 Communications**, **5.0 Problem Solving and Critical Thinking**, **8.0 Ethics and Legal Responsibilities** (academic honesty and responsible tool use, right on point), and **9.0 Leadership and Teamwork.**

**Media literacy (AB 873)**

AB 873 (Berman), Chapter 815, Statutes of 2023, adds Education Code Section 33548 and took effect January 1, 2024. It directs the Instructional Quality Commission to weave media literacy and digital citizenship into the ELA, math, science, and history-social science frameworks as they are revised. This seminar is a concrete piece of that intent: students evaluating when and how to use an AI tool, and what its use costs or gains them. It is a framework directive rather than a per-lesson standard, so it belongs here as alignment.
