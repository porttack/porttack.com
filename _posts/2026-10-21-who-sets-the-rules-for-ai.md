---
layout: post
title: "Who Sets the Rules for AI? A Socratic Seminar on a Student Survey"
categories: draft
label: Lesson Plan / AI Literacy
lesson_category: society
excerpt: "88% of college students use AI. 57% say nobody has told them where the line is. A ready-to-run Socratic seminar on one survey and one question: when the rules are unclear, who is responsible?"
---

<!-- DRAFT NOTES FOR ERIC (delete before publishing)
- Date and publish status are yours. Dropped the date on purpose.
- The survey is cited from secondary coverage (EdTech Innovation Hub). The article names the Digital Education Council but links no report and gives no fieldwork dates. Find the primary report before publishing.
- The reveal paragraph is a placeholder. I did not write your opinion for you.
- Add this slug to learn/_standards/carriers/porttack-society.json and run tools/publish_standards.sh.
-->

This is the second seminar in a series. The format, norms, fishbowl, and handouts are the same ones in [Prove Me Wrong]({% post_url 2026-07-20-prove-me-wrong %}). I am not repeating them. Use that post's norms, run of show, entry ticket, observer organizer, and exit ticket as written, and swap in the reading and questions below.

The reading is data, not a story. That is the point. Last time students argued about one professor and one test. This time they argue about a number and who is responsible for it.

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
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
    </button>
  </div>
  <div class="seminar-reading__body">
    <p class="seminar-reading__title">Everybody Uses It. Nobody Told Them the Rules.</p>
    <p><strong>1.</strong> In 2026, a group called the Digital Education Council surveyed people at colleges in 35 countries. More than 45,000 people answered. About 27,000 were students and about 18,000 were professors and other faculty.</p>
    <p><strong>2.</strong> The first result: 88% of students said they use AI in their learning. That is almost everyone.</p>
    <p><strong>3.</strong> The second result: 77% of faculty said they use AI in their teaching. That number went up 16 points from the year before.</p>
    <p><strong>4.</strong> The third result is the one the survey's reporters made the headline. 57% of students said the assignments and tests they get come with inadequate guidance about AI. In other words, they are not clearly told what is allowed and what counts as cheating.</p>
    <p><strong>5.</strong> One more number. Only 29% of students believed their instructors were equipped to guide them on using AI.</p>
    <p><strong>6.</strong> So here is the picture. Almost every student uses AI. Most teachers use it too. And most students say nobody has told them where the line is.</p>
    <p><strong>7.</strong> One way to read this is that students are cheating and hiding behind unclear rules. Another way to read it is that the adults are asking students to follow rules that do not exist yet. Both readings might be partly true. The survey cannot tell you which one is bigger.</p>
    <p><strong>8.</strong> Notice what the survey is: people answering questions about themselves. It measures what they say, not what they do. And it asked college students, not middle or high school students. Keep that in mind when you argue.</p>
  </div>
</div>
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

(Source: [EdTech Innovation Hub's coverage of the Digital Education Council survey](https://www.edtechinnovationhub.com/news/q6zw9wco2mttajdbd1jyeonjnpiovu).)

## What changes from the first seminar

- **Temperature check.** One wall: "If the rules are unclear, the student is responsible." Other wall: "If the rules are unclear, the school is responsible." Same line, same before-and-after movement.
- **Entry ticket, question 3.** Evidence by paragraph number still works. Add: "Which number in the reading surprised you most, and why?"
- **Stretch for the outer circle.** Paragraph 8 is a free gift. Ask one observer per round to listen for anyone who uses it, meaning anyone who questions what the survey can and cannot prove.

## Facilitator questions

Back-pocket only. Open with one.

**Opening (pick one):**

- 88% use AI. Is that a surprising number, or an obvious one?
- If nobody told you the rule, can you break it?

**Core:**

- Teachers use AI too (77%). Does that change what students owe the rules?
- Who should write the AI rules for a class: the teacher, the school, the students, or the company that built the tool?
- The survey says 57% of students got inadequate guidance. What would adequate guidance actually look like? Write one rule.
- Paragraph 8 says the survey measures what people say, not what they do. How much should you trust it?

**Deeper:**

- If everybody uses a tool and nobody agrees on the rules, whose job is it to fix that?
- Is "just don't use it" a rule, or a way of not making one?

**After the reveal:**

- Where am I wrong?

## The reveal

*[Eric: your take goes here. Held back until the last ten minutes, offered as one opinion among many.]*

## Standards

Same alignment as [Prove Me Wrong]({% post_url 2026-07-20-prove-me-wrong %}): SL.6.1 / SL.9-10.1, SL.6.3 / SL.9-10.3, RI.6.1 / RI.9-10.1, RI.6.8 / RI.9-10.8, W.6.1 / W.9-10.1. Add a data-literacy note for this one: students critique what a survey can and cannot support (paragraph 8).
