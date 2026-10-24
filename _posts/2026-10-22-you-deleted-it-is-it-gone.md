---
layout: post
title: "You Deleted It. Is It Gone? A Socratic Seminar on Doorbell Cameras and AI Chats"
categories: lesson-plans
redirect_from: /2026/10/22/what-does-delete-mean-seminar.html
label: Lesson Plan
lesson_category: society
standards_extra_carrier: socratic_seminar_kit
excerpt: "A doorbell camera, no subscription, and video the sheriff said had been disconnected. The FBI says it came from 'residual data located in backend systems.' A ready-to-run Socratic seminar on a question every engineer who builds one has to answer: what should a company promise when you press Delete?<br><a href='/2026/10/22/you-deleted-it-is-it-gone.html'><img src='https://www.pcworld.com/wp-content/uploads/2026/02/Ring-Search-Party-Super-Bowl-ad-3.jpg?quality=50&strip=all&w=1024' alt='Screenshot from Ring&#39;s Super Bowl ad showing the Search Party feature tracking a lost dog' style='max-height: 150px; width: auto; display: block; margin: 0.6em auto 0;'></a>"
---

<img src="https://www.pcworld.com/wp-content/uploads/2026/02/Ring-Search-Party-Super-Bowl-ad-3.jpg?quality=50&strip=all&w=1024" alt="Screenshot from Ring's Super Bowl ad showing the Search Party feature tracking a lost dog" style="max-height: 250px; width: auto; display: block; margin: 0 auto 0.4em;">
<p style="text-align: center;"><small>A still from Ring's Super Bowl ad, in which a neighborhood's cameras search for a lost dog. (via PCWorld)</small></p>

Slides: **[You Deleted It. Is It Gone?](/delete-seminar-slides/)** &middot; Short overview for colleagues and administrators: **[You Deleted It. Is It Gone? Overview](/delete-seminar-overview/)**

## Learning goals

By the end of the seminar, students can:

1. Weigh a helpful and a damaging outcome of the same design decision: keeping data a user thinks is gone. AP CSP: [IOC-1.A](https://learn.porttack.com/standards/apcsp-standards-reference.html#IOC-1.A).
2. Explain the privacy risks of a company keeping personal data after a user deletes it, and how a simple button like Delete can hide a more complicated system. AP CSP: [IOC-2.A](https://learn.porttack.com/standards/apcsp-standards-reference.html#IOC-2.A); practice [P3 Abstraction in Program Development](https://learn.porttack.com/standards/apcsp-standards-reference.html#P3).
3. Separate what is documented, what an official says, and what nobody knows yet, and say which one a claim rests on.
4. Discuss as a group: cite the text, build on what others said, and change a position when the evidence changes.

## Materials

The format lives in the [Socratic Seminar Kit](/socratic-seminar-kit/?topic=You%20Deleted%20It.%20Is%20It%20Gone%3F&exit=Write%20one%20sentence%20a%20company%20should%20promise%20customers%20when%20they%20press%20Delete%2C%20including%20how%20long%20it%20takes.): the run of show, the norms to post, the fishbowl and hot seat guardrails, the boundaries, and the one-sheet handout.


Specific to this seminar:

- **Handout:** [print the two-sided handout with this seminar's questions filled in](/socratic-seminar-handout/?topic=You%20Deleted%20It.%20Is%20It%20Gone%3F&exit=Write%20one%20sentence%20a%20company%20should%20promise%20customers%20when%20they%20press%20Delete%2C%20including%20how%20long%20it%20takes.). The front is the entry ticket; the back is the observer organizer and the exit ticket. Name and period are at the top.
- **Reading, printable (one page):** [The Delete Button](/delete-reading-1/). The same text is below. Round 2 is two videos, not a reading.
- **Slides:** [You Deleted It. Is It Gone?](/delete-seminar-slides/), with speaker notes and a diagram for the engineer's note. The first five slides are a five-minute warm-up on the Ring ad (the poll, [the ad itself on Ring's YouTube channel](https://www.youtube.com/watch?v=OheUzrXsKrY), the first reaction, and how Search Party works). Press S on any warm-up slide to skip to the seminar, or open [the deck at slide 6](/delete-seminar-slides/?slide=6). The discussion slides carry an amber "stay here" cue in the toolbar, so you know where to stop for each round. Round 2 plays two videos: [WeRateDogs](https://www.youtube.com/watch?v=-ITnLiqKbeI) and [Wyze](https://www.youtube.com/watch?v=ROFblZ_-9q4).
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

## Reading: the camera

Hand this out first. ([Print it](/delete-reading-1/))

<div class="seminar-reading">
  <div class="seminar-reading__bar">
    <span class="seminar-reading__label">Student handout</span>
    <button type="button" class="seminar-reading__copy" onclick="copySeminarReading(this)" aria-label="Copy the reading to the clipboard" title="Copy">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
    </button>
  </div>
  <div class="seminar-reading__body">
    <p class="seminar-reading__title">The Delete Button</p>
    {% include delete-reading-1.html %}
  </div>
</div>

(Sources: NBC News, ["Investigators wrangled video from Nancy Guthrie's Google Nest camera out of 'backend systems,'"](https://www.nbcnews.com/tech/tech-news/investigators-wrangled-video-nancy-guthries-google-nest-camera-backend-rcna258460) Feb. 10, 2026; Fox News, ["Nancy Guthrie video may have been erased after FBI kept out for days, director says,"](https://www.foxnews.com/us/nancy-guthrie-video-may-have-been-erased-after-fbi-kept-out-days-director-says) July 21, 2026; [Google Nest Security & Privacy Commitments](https://safety.google/nest/), Cameras FAQ.)

## Round 2: the reaction (two videos, no handout)

After the engineer's note and the two expert quotes, play two responses to the Ring ad, then run the fishbowl. Both are linked from the deck, and both open in a new tab. Preview them first and check that they still play.

- **A creator responds.** [WeRateDogs, "The Very Dystopian Dog Super Bowl Ad"](https://www.youtube.com/watch?v=-ITnLiqKbeI) (about 3 minutes). Matt Nelson, who runs WeRateDogs, argues that the ad uses dogs to make mass surveillance feel acceptable.
- **A competitor responds.** [Wyze, "Definitely Only for Dogs: Ring's Superbowl Commercial (Parody)"](https://www.youtube.com/watch?v=ROFblZ_-9q4) (about 70 seconds). Wyze sells security cameras, so this is an ad for Wyze.

**What is documented.** Ring's ad aired during Super Bowl LX on Feb. 8, 2026. Ring cancelled its partnership with Flock Safety on Feb. 12. Ring has not given the backlash as its reason, and critics point to the timing. Ring disputes parts of what the videos say, and some claims in them (such as the share of lost-pet reports the feature resolves) are the creators' own figures, not Ring's.

**Why these two.** Neither video is a neutral source. One is a creator arguing a position and one is a competitor's ad. That makes them a good test of the question students have been asking all along: what is documented, what is only claimed, and what is unknown? The deck ends Round 2 with a slide that asks who made each video, and why.

## Slides 16 and 17: delete and AI chats

A doorbell video is easy to hold at a distance. A question typed into an AI chatbot at midnight is not. Two slides make that connection before Round 1 opens.

- **Slide 16, "Your Delete Button."** Students think privately of a question they have asked an AI that they would not want read aloud. They do not say it or write it down. Then they imagine pressing Delete on that chat and ask what they expect to happen. Nobody shares.
- **Optional teacher demo.** Ask a chatbot a harmless question tied to you (a household chore, say), delete the conversation live, then show the company's policy page. Keep it to something you would be comfortable explaining.
- **Slide 17, "Deleting an AI Chat."** What three companies publish, with the point that these are promises students cannot check from outside.

| Company | What its page says | Read directly? |
|---|---|---|
| Anthropic | Deleted chats leave your history immediately and back-end storage within 30 days. Flagged policy violations are kept up to 2 years. Data already used in trained models is not removed. ([Privacy Center](https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data), July 1, 2026) | Yes |
| Google (Gemini) | Chats a human reviewer has seen are not deleted when you delete your activity, and are kept up to three years. Default auto-delete is 18 months. Work or school accounts may follow different terms. ([Gemini Apps Privacy Hub](https://support.google.com/gemini/answer/13594961), updated October 2026) | Yes |
| OpenAI | Deleted chats leave your account right away and are scheduled for permanent deletion within 30 days, unless already de-identified or kept for security or legal reasons. A 2025 court order also required it to keep deleted chats for a time. ([Help Center](https://help.openai.com/en/articles/8983778-chat-and-file-retention-in-chatgpt)) | No. The page blocked the check, so this row comes from search results quoting it. |

The three are similar at the headline level and differ in the details. Google's three-year review exception and a court order that overrode a company's own deletion promise are the two best examples that "delete" is not only the company's call. If your students use school-issued accounts, the rules may be set by the school, not the person.

Some students ask AI about health, family, and worries. If anything a student says concerns you, follow your school's procedures.

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

## The run of show, slide by slide

Start times are in minutes from the beginning of the class, with the sections you might skip marked. The slide numbers are for [the deck](/delete-seminar-slides/). The deck also shows an amber "stay here" badge on the stop slides and a blue "hand out" badge where a worksheet goes out, so the toolbar tells you the same thing.

| Slides | Starts at (min) | What you do |
|---|---|---|
| 1–5 (optional) | 0, skippable | The Ring warm-up: poll, play the ad, first reaction, how Search Party works. Press S on any of them to skip to slide 6. |
| 6–8 | 5 | Title, goals, and the five norms. Read the norms out loud, and add one sentence: "We are talking about the camera, not the crime." |
| 9 | 10 | **Opening temperature check.** Students stand on a line. One wall: "Delete should mean gone, right away." The other: "Delete can take time, as long as the company tells you how long." Note where the room sits. |
| 10 | 13 | **Hand out [the reading](/delete-reading-1/) and the [two-sided handout](/socratic-seminar-handout/?topic=You%20Deleted%20It.%20Is%20It%20Gone%3F&exit=Write%20one%20sentence%20a%20company%20should%20promise%20customers%20when%20they%20press%20Delete%2C%20including%20how%20long%20it%20takes.).** Students read, then fill in the entry ticket on the front. |
| 11–15 | 17 | Project the facts. Keep it brisk, since they have read it. Slide 15, "What Nobody Has Confirmed," is the honest middle. |
| **16** | 20 | **Stop. "Your Delete Button."** Quiet, private thinking about an AI chat. Nobody shares. The optional teacher demo fits here. |
| 17 | 22 | "Deleting an AI Chat": what three companies publish, and that students cannot check it from outside. |
| **18** | 24 | **Stop. Round 1 opening.** Every student answers briefly from their entry ticket: "What should the company promise when you press Delete, and what should it tell you?" |
| **19** | 28 | **Stop. Round 1 fishbowl** with the hot seat. The outer circle fills in the **observer organizer** on the back of the handout. Stay on this slide until it ends. |
| 20–21 | 43, slide 21 skippable | The engineer's note, spoken (see below). Slide 21 is optional. No discussion here. |
| 22–23 | 46, skippable | Silent reads: what two security experts said about deleted data (Stamos, then Jackson). |
| 24 | 49 | **Round 2 intro.** "The Reaction." There is no handout; Round 2 is two videos. |
| 25–27 | 50 | The timeline, then **play the two videos**: WeRateDogs (about 3 min), then the Wyze parody (about 70 sec). Preview both first. |
| **28** | 56 | **Stop. Round 2 fishbowl.** "Who made each video, and why? What would each one leave out?" Stay on this slide until it ends. |
| 29 | 66, skippable | **Temperature check again.** Who moved, and what moved them? |
| 30 | 69, skippable | "Sort It": pick a statement from the reading or a video and sort it as documented, claimed, or unknown. |
| 31 | 72 | **Last temperature check.** Count who shifted across all three. |
| (no slide) | 75 | **Your reveal, spoken.** One opinion among many. Then "Where am I wrong?" |
| 32 | 80 | Students fill in the **exit ticket** on the back of the handout. |
| 33 | 85 | Write-up links. |

Start times assume nothing is skipped, which runs to about minute 85. Rows marked "skippable" can be dropped. Adjust the later start times yourself. These are estimates, not timed runs.

## The engineer's note (spoken)

This is where an engineering background does the work, and it moves the argument. Students will assume Delete is a decision. It is mostly a constraint. Say it in your own words. The points below are general computer science, not sourced to any article, so check them against your own knowledge before using them.

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
- Which would you rather someone else could read: the video from your front door, or your chats with an AI? Why?
- Should a company keep a video from a camera whose owner never paid to save it?
- Who is on that video besides the owner? The delivery driver, the neighbor, a guest. Do they get a say?

**Round 2 (the two videos):**

- Who made each video, and what does each one want you to feel? What would each one leave out?
- Which statements in the videos are documented, which are only one person's claim, and which are unknown?
- Search Party is on by default: you have to turn it off. Who benefits from that default? Who is harmed?
- Does either video change what the Delete button should promise?
- Wyze makes cameras too. Does that change how much you trust its parody? Does it change how much you trust Ring's ad?

**The CS lens (any time):**

- Delete is one word on a button that hides a lot of machinery. What else on your phone does that?
- If police asked a company for footage in time, it could still be retrieved. Who should decide whether they can ask: the police, the company, a judge?
- A copy kept "just in case" could help an investigation. The same copy could be read by someone else. Is it possible to design a system that allows the first and prevents the second?

**Deeper:**

- Is "we keep it in case it's needed" a reasonable default or a privacy risk? Who benefits from that default?

**After the reveal:**

- Where am I wrong?

## What to do if the conversation drifts

Students may want to talk about the crime itself, a theory, or the people involved. Redirect once, calmly: "We are not discussing the case. We are discussing the camera." Then return to the question. This is a real, open case about a real family, and the seminar does not need any of it.

## The reveal

*[Your take goes here. Hold it until the last ten minutes and offer it as one opinion among many.]*

## Evidence of learning

All of this is collected during the seminar. Nothing needs a separate quiz.

| Goal | Evidence | What meeting it looks like |
|---|---|---|
| 1. A helpful and a damaging outcome | Entry ticket: a starting side and two pieces of evidence by paragraph number. Exit ticket. | A position that names both something the kept video made possible and something it risks, and cites the reading. |
| 2. Privacy risk of keeping data | The added exit-ticket line: "Write one sentence a company should promise customers when they press Delete, including how long it takes." | A promise stated clearly enough to hold a company to, with a reason that refers to risk (who else could read it, for how long) and to what a system can actually do. |
| 3. Documented, claimed, unknown | Round 2 fishbowl and "Sort It," tracked on the observer organizer. | Sorts a specific statement from the reading into documented, claimed, or unknown, and says why. |
| 4. Discussion | Observer organizer, including the tally of times a student built on someone else's idea. Three temperature checks, with a count of who moved and why. | Builds on a peer by name, cites a paragraph, and can say what moved them (or why they held). |

I grade evidence and honesty, not the position landed on. "I changed my mind because of what someone said" is the best possible answer.

{% include license-footer.html %}
