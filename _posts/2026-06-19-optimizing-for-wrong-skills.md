---
layout: post
title: "We Are Optimizing for the Wrong Skills"
date: 2026-06-19
categories: draft
excerpt_separator: <!--more-->
excerpt: "How a generation of content-mastery optimization squeezed out the skills employers actually want, and why project-based learning (PBL) is the way back. When AI is used in PBL, it can deepen how students learn instead of serving as a cognitive bypass, which is all cheating ever was.<br><a href='/2026/06/19/optimizing-for-wrong-skills.html'><img src='/docs/assets/images/wef-growing-skills-2030.png' alt='WEF fastest-growing skills by 2030' style='max-height: 150px; width: auto; display: block; margin: 0.6em auto 0;'></a>"
---

*Draft - not yet public*

*I'm a CTE teacher. A generation of content-mastery optimization squeezed out the skills employers actually want. Project based learning, plus AI when appropriate, is the way back.*

Much of the conversation I hear about AI in school boils down to detecting cheating. That's hard. But it is more than that. It is cognitive offload. Forget about detecting it; it is like eating sugar instead of vegetables -- it doesn't really benefit our future citizens.

How do we wall the tool off? It is a fair question, but I think it is the wrong place to start. Call it cognitive offload or call it cheating. It is a symptom. The thing underneath it is a question we have been avoiding for twenty years: are we teaching the right things at all?

<!--more-->

This is the tension. I'm a teacher. But I'm also an engineer thinking about a systems problem. On one side is content mastery, the standards and the codes, the material I can put on a test and measure cleanly. On the other side is creativity and the soft skills, the messy, human, hard-to-grade capacities that real work runs on. For most of the last two decades we have poured our energy into the first and quietly starved the second. AI did not create that imbalance. It just made it impossible to ignore, because the part of school we optimized hardest is exactly the part a machine now does for free. But free has a cost. Students still have to learn the fundamentals, and the struggle of learning them together is part of what turns a class into a community. Neither is something I want to hand to a machine.

## How we got here: No Child Left Behind

A colleague pointed something out to me recently that reframed the whole thing. A lot of what we treat as the natural shape of school is actually the residue of one policy: No Child Left Behind.

When NCLB tied school funding and reputation to reading and math test scores, it changed what teaching was for. The [widely documented result was curriculum narrowing](https://www.edweek.org/policy-politics/no-child-left-behind-an-overview/2015/04): schools spent less time on the subjects that were not tested and more time preparing for the ones that were. Social studies, the arts, and foreign language got squeezed. So did the things that never show up on a bubble sheet at all, like collaboration, problem solving, and creative work. The law was [replaced by the Every Student Succeeds Act in 2015](https://www.edweek.org/policy-politics/no-child-left-behind-an-overview/2015/04), but the culture it built outlived it. We learned to value what we could measure, and we got very good at measuring the floor.

I want to be fair to the intent. The goal was equity. If you do not measure, you cannot see which students are being left behind, and plenty were. That instinct was right. But measurement became the mission, and twenty years later the pendulum has swung so far toward measurable content that we have a hard time even describing the other half of the job, let alone grading it.

## What the work actually rewards

Here is the part that should bother us. The skills we de-emphasized are precisely the ones the working world is now asking for most.

The World Economic Forum surveys more than a thousand employers for its [Future of Jobs Report](https://www.weforum.org/publications/the-future-of-jobs-report-2025/).[^wef] In the 2025 edition, the core skills employers rank highest are analytical thinking, resilience and flexibility, leadership, and creative thinking. Creative thinking sits near the top, named by well over half of the companies surveyed. These are not the things a standardized test was built to capture. They are the things a standardized test was built to leave out.

Then there is the finding that ties the whole argument together. The fastest-growing skill employers report wanting is fluency with AI and data. You might expect that to come at the expense of the human skills. It does the opposite. The report's own reading is that as AI spreads, demand for deeply human skills like creativity rises rather than falls. The machine takes the routine, and the premium shifts to the judgment, the design, and the collaboration that sit on top of it.

{% raw %}
<!-- WEF skills toggle widget. Self-contained: paste inline into a post, or save in _includes and reference it. -->
<div id="wef-skills-widget">
  <div class="wsw-head">
    <h3 class="wsw-title">What employers say they need</h3>
    <div class="wsw-toggle" role="tablist" aria-label="Choose a view">
      <button class="wsw-btn is-active" data-view="now" role="tab" aria-selected="true">Most essential today</button>
      <button class="wsw-btn" data-view="growing" role="tab" aria-selected="false">Growing fastest by 2030</button>
    </div>
  </div>

  <p class="wsw-caption" id="wsw-caption"></p>

  <div class="wsw-chart" id="wsw-chart" aria-live="polite"></div>

  <div class="wsw-legend">
    <span class="wsw-key"><i class="dot human"></i>Human / soft skill</span>
    <span class="wsw-key"><i class="dot tech"></i>Cognitive / technical</span>
    <span class="wsw-key"><i class="dot ai"></i>AI &amp; big data</span>
  </div>

  <p class="wsw-source">Source: World Economic Forum, <em>Future of Jobs Report 2025</em> (Figs. 3.3 &amp; 3.4; global; n&gt;1,000 employers). "Today" ranks skills by the share of employers calling each a core skill. "Growing" shows WEF's ranked order of the fastest-growing skills.</p>
</div>

<style>
#wef-skills-widget{
  --ink:#1B2A3A; --sub:#5A6672; --line:#E6EAEE;
  --human:#0E7C86; --tech:#C2CBD3; --ai:#E0A100;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  color:var(--ink); max-width:720px; margin:1.5rem 0; line-height:1.4;
}
#wef-skills-widget *{box-sizing:border-box;}
#wef-skills-widget .wsw-head{display:flex; flex-wrap:wrap; gap:.75rem 1rem; align-items:center; justify-content:space-between; margin-bottom:.35rem;}
#wef-skills-widget .wsw-title{font-size:1.18rem; font-weight:700; margin:0;}
#wef-skills-widget .wsw-toggle{display:inline-flex; background:#F1F4F6; border-radius:999px; padding:3px;}
#wef-skills-widget .wsw-btn{
  border:0; background:transparent; cursor:pointer; font:inherit; font-size:.82rem; font-weight:600;
  color:var(--sub); padding:.4rem .8rem; border-radius:999px; transition:all .18s ease;
}
#wef-skills-widget .wsw-btn.is-active{background:#fff; color:var(--ink); box-shadow:0 1px 3px rgba(20,40,60,.14);}
#wef-skills-widget .wsw-caption{font-size:.92rem; color:var(--sub); margin:.2rem 0 1rem; min-height:1.3em;}
#wef-skills-widget .wsw-caption b{color:var(--ink);}
#wef-skills-widget .wsw-row{display:grid; grid-template-columns:26px 168px 1fr 46px; align-items:center; gap:.55rem; margin:.32rem 0;}
#wef-skills-widget .wsw-rank{font-size:.8rem; font-weight:700; color:var(--sub); text-align:center;}
#wef-skills-widget .wsw-label{font-size:.84rem; text-align:right; color:var(--ink);}
#wef-skills-widget .wsw-track{background:#F1F4F6; border-radius:5px; height:22px; overflow:hidden;}
#wef-skills-widget .wsw-bar{height:100%; width:0; border-radius:5px; transition:width .55s cubic-bezier(.22,.61,.36,1), background-color .3s ease;}
#wef-skills-widget .wsw-bar.human{background:var(--human);}
#wef-skills-widget .wsw-bar.tech{background:var(--tech);}
#wef-skills-widget .wsw-bar.ai{background:var(--ai);}
#wef-skills-widget .wsw-val{font-size:.84rem; font-weight:700; color:var(--ink);}
#wef-skills-widget .wsw-legend{display:flex; flex-wrap:wrap; gap:.4rem 1.1rem; margin:1rem 0 .5rem; font-size:.8rem; color:var(--sub);}
#wef-skills-widget .wsw-key{display:inline-flex; align-items:center; gap:.4rem;}
#wef-skills-widget .dot{width:11px; height:11px; border-radius:3px; display:inline-block;}
#wef-skills-widget .dot.human{background:var(--human);}
#wef-skills-widget .dot.tech{background:var(--tech);}
#wef-skills-widget .dot.ai{background:var(--ai);}
#wef-skills-widget .wsw-source{font-size:.74rem; color:#8A94A0; margin:.4rem 0 0; line-height:1.4;}
@media (max-width:520px){
  #wef-skills-widget .wsw-row{grid-template-columns:22px 120px 1fr 40px; gap:.4rem;}
  #wef-skills-widget .wsw-label{font-size:.78rem;}
  #wef-skills-widget .wsw-rank{font-size:.74rem;}
}
</style>

<script>
(function(){
  var widget = document.getElementById("wef-skills-widget");
  if(!widget) return;

  // % of employers calling each a core skill (WEF Fig. 3.3), full top 10.
  // Verified in WEF text: analytical (7 in 10), resilience 67, curiosity 50.
  // Ranks 6-10 read from Fig 3.3 - spot-check against the report PDF before publishing.
  var NOW = [
    {name:"Analytical thinking", val:69, cls:"tech"},
    {name:"Resilience, flexibility & agility", val:67, cls:"human"},
    {name:"Leadership & social influence", val:61, cls:"human"},
    {name:"Creative thinking", val:57, cls:"human"},
    {name:"Motivation & self-awareness", val:52, cls:"human"},
    {name:"Technological literacy", val:51, cls:"tech"},
    {name:"Empathy & active listening", val:50, cls:"human"},
    {name:"Curiosity & lifelong learning", val:50, cls:"human"},
    {name:"Talent management", val:47, cls:"human"},
    {name:"Service orientation & customer service", val:47, cls:"human"}
  ];

  // Fastest-growing skills to 2030, WEF's ranked order (Fig. 3.4). Shown as rank, not %.
  var GROWING = [
    {name:"AI & big data", cls:"ai"},
    {name:"Networks & cybersecurity", cls:"tech"},
    {name:"Technological literacy", cls:"tech"},
    {name:"Creative thinking", cls:"human"},
    {name:"Resilience, flexibility & agility", cls:"human"},
    {name:"Curiosity & lifelong learning", cls:"human"},
    {name:"Leadership & social influence", cls:"human"},
    {name:"Talent management", cls:"human"},
    {name:"Analytical thinking", cls:"tech"},
    {name:"Environmental stewardship", cls:"tech"}
  ];

  var CAPTIONS = {
    now: "<b>AI is not on this list.</b> The skills employers call most essential right now are mostly human ones, ranked by the share of employers naming each a core skill. (But click above on <b>\"Growing fastest by 2030\"</b> to see what employers need in just 4 years.)",
    growing: "<b>Now AI leaps to number one.</b> But the human skills do not fall away. Creativity, resilience, curiosity, and leadership all stay near the top of what is growing fastest."
  };

  var chart = document.getElementById("wsw-chart");
  var caption = document.getElementById("wsw-caption");
  var btns = widget.querySelectorAll(".wsw-btn");

  function render(view){
    var rows = (view === "now") ? NOW : GROWING;
    var maxNow = 80;
    var html = "";
    rows.forEach(function(d, i){
      var width, valText;
      if(view === "now"){
        width = (d.val / maxNow) * 100;
        valText = d.val + "%";
      } else {
        width = ((GROWING.length - i) / GROWING.length) * 100;
        valText = "";
      }
      html += '<div class="wsw-row">'
        + '<div class="wsw-rank">' + (i + 1) + '</div>'
        + '<div class="wsw-label">' + d.name + '</div>'
        + '<div class="wsw-track"><div class="wsw-bar ' + d.cls + '" data-w="' + width + '"></div></div>'
        + '<div class="wsw-val">' + valText + '</div>'
        + '</div>';
    });
    chart.innerHTML = html;
    caption.innerHTML = CAPTIONS[view];
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        chart.querySelectorAll(".wsw-bar").forEach(function(b){
          b.style.width = b.getAttribute("data-w") + "%";
        });
      });
    });
  }

  btns.forEach(function(btn){
    btn.addEventListener("click", function(){
      btns.forEach(function(b){ b.classList.remove("is-active"); b.setAttribute("aria-selected","false"); });
      btn.classList.add("is-active"); btn.setAttribute("aria-selected","true");
      render(btn.getAttribute("data-view"));
    });
  });

  render("now");
})();
</script>
{% endraw %}

So the market is asking for two things at once: people who can think creatively and work with others, and people who are comfortable using AI to multiply what they produce. That is nearly the inverse of what content-mastery optimization trained us to deliver.

## Projects are where both live

I spent twenty-five years building software before I taught. I was a CTO, I wrote production code at Apple and Khan Academy, and in all that time I never once saw someone hired or kept for their ability to pass a timed multiple-choice test. People were valued for what they could build, how they thought when a system broke, and whether anyone wanted to work with them again.

The format that develops those things is not a worksheet. It is a project.

My robotics students design and build underwater ROVs and compete with them. The work has a real specification, a budget, a team, engineering documentation, and a deadline that does not move, because a competition does not care about your excuses. Students hit problems no answer key anticipated. They debug at the last minute with tired hands. They split up the labor, miss a handoff, fix it, and then present what they made to people who ask hard questions. Every skill on the employer list is in that paragraph. None of it is on a bubble sheet, and none of it can be faked by a student who has to stand up and defend the thing they built.

I won't pretend this is easy or that it scales on its own. PBL like this is a labor of dedication. The prep is heavy and the day-to-day logistics are real. The hard part is getting students to focus, to plan, to work productively together: teaching by doing, and letting them learn the soft skills the way soft skills are actually learned, through experience and failure, and develop character along the way. The students who haven't bought in yet can stall a whole team, and some years the luck of the roster makes it harder still. I keep doing it anyway, because the payoff is worth the cost, and because students can tell when the work is real and when someone actually cares whether they figure it out.

Projects are the one format where content mastery and the soft skills get built in the same motion. You cannot make the robot work without the fundamentals, and you cannot finish the season without the collaboration. That is not a tradeoff between rigor and creativity. It is the place they stop being opposites.

## AI as the multiplier, with one guardrail

This is where AI comes back in, and where I have to be careful, because I have argued before that we should [protect the productive struggle of students who are still learning the basics](/2026/06/03/protect-struggle-multiply-learning.html). I still believe that. A beginner who uses AI to skip the struggle of learning the fundamentals does not learn the fundamentals. The tool has to be earned.

But once a student has the fundamentals, AI stops being a crutch and becomes a multiplier. In a project, an experienced student can use it to reach further: more ambitious designs, more professional documentation, faster iteration, higher-level ideation. That is how the engineers I used to work with use it now, and it is what employers say they want. The skill at that stage is not avoiding the tool. It is using it well: prompting with intent, judging what comes back, slowing down, and cutting the slop. A multiplier only helps if you have something worth multiplying. Fundamentals first, then the multiplier.

None of this means a project needs AI. Plenty of the best ones don't. The point is only that when AI shows up, it should multiply learning rather than replace it.

That is the whole shape of it. Protect the struggle while students build the base. Multiply once they have it. And do both inside projects, where the base and the human skills grow together.

## The real inequity

We usually argue equity at the level of grading: who gets measured fairly, who clears the bar, whether a mark reflects what a student actually knows. But that keeps the fight inside the frame I'm trying to leave. The deeper inequity isn't how we score the soft skills. It's that a content-only mastery-based curriculum never teaches them, and the students who pay the highest price are the ones who don't pick them up at home or in some other opt-in program. Creativity, collaboration, knowing how to carry yourself and work with other people: school is the one place every kid can get them. *Withholding them is the inequity.* How we grade matters, but it's a much smaller question than the one we've let it stand in for.

I'm not the only one circling this. A colleague recently had some of us watch [Most Likely to Succeed](https://en.wikipedia.org/wiki/Most_Likely_to_Succeed_(film)), the 2015 documentary that follows ninth graders at High Tech High, a San Diego charter school built around project-based learning. It argues that the school most of us grew up in was designed more than a century ago to produce reliable, standardized output, and that the economy which rewarded that output is gone. It's a provocation more than a prescription, but it names the thing I keep coming back to. We are optimizing for the wrong skills.

There's a larger version of this argument, about what kind of citizens, leaders, and followers we're forming, and who gets access to that formation. But that's why this piece is about skills and not scores.

None of this is a call for less rigor. It's a call to stop optimizing for what's easiest to score, right when the world started paying a premium for what's hardest. What I want is not complicated: classrooms where students make things together, where creativity and collaboration are the work itself and not the reward at the end of the unit.[^codehs] Where the struggle of learning the fundamentals is something students do alongside each other, which is its own kind of community and its own reason not to hand that part to a machine. And I want schools willing to put project-based learning at the center of how kids learn, not at the edges.

A test was never built to see the skills that matter most: creating, working with other people, and using the right tools well once the fundamentals are real. These are the soft and real-world skills today's work runs on. PBL is a good way to deliver them. They are the right skills our future leaders and citizens need.

---

*All opinions are my own. Feedback and collaboration welcome. -- Eric Brown*

[^codehs]: I compared two intro CS curricula on exactly these axes (creativity & collaboration) in [CodeHS vs. CMU CS Academy](/2026/06/10/codehs-vs-cmu.html) -- which one builds more of what I'm describing here.

[^wef]: Skills data from the World Economic Forum, *Future of Jobs Report 2025*, a survey of more than 1,000 employers across 55 economies. The "most essential today" view ranks skills by the share of employers identifying each as a core skill (Figure 3.3); the "growing fastest by 2030" view follows WEF's ranked list of skills rising in importance (Figure 3.4), where AI and big data place first. Full report: <https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf>. For a US, graduate-specific lens, the National Association of Colleges and Employers (NACE) finds the same priorities: employers rank problem-solving, communication, and teamwork highest among the qualities they seek in new college graduates.