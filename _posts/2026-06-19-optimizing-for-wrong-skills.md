---
layout: post
title: "We Are Optimizing for the Wrong Skills"
date: 2026-06-19
categories: draft
excerpt_separator: <!--more-->
excerpt: "How a generation of content-mastery optimization squeezed out the skills employers actually want, and why project-based learning (PBL) is the way back. When AI is used in PBL, it can deepen how students learn instead of serving as a cognitive bypass, which is all cheating ever was.<br><a href='/2026/06/19/optimizing-for-wrong-skills.html'><img src='/docs/assets/images/wef-growing-skills-2030.png' alt='WEF fastest-growing skills by 2030' style='max-height: 225px; width: auto; display: block; margin: 0.6em auto 0;'></a>"
---

*Draft - not yet public*

{% include series-toc.html part=1 %}

*I'm a CTE teacher. A generation of content-mastery optimization squeezed out the skills employers actually want. Project-based learning, plus AI when appropriate, is the way back.*

Much of the conversation I hear about AI in school boils down to detecting cheating. That's hard, and while it is frequently necessary, it's the wrong fight. The deeper problem isn't that a student fooled me. It's cognitive offload: the student who skips the thinking is mostly cheating themselves. It is like eating sugar instead of vegetables, the easy version feels fine now and starves the growth that matters later.

How do we wall the tool off? It is a fair question, but I don't think that's always the answer. Call it cognitive offload or call it cheating, it is a symptom. The real question is the one underneath: is focusing on content mastery alone the right thing?

<!--more-->

This is the tension. I'm a teacher. But I'm also an engineer thinking about a systems problem. On one side is content mastery, the standards and the codes, the material I can put on a test and measure cleanly. On the other side is creativity and the soft skills, the messy, human, hard-to-grade capacities that real work runs on. For most of the last two decades we have poured our energy into the first and quietly starved the second. AI did not create that imbalance. It just made it impossible to ignore, because the part of school we optimized hardest is exactly the part a machine now does for free: the recall of content and the routine production of well-formed answers. But free has a cost. Students still have to learn the fundamentals, and the struggle of learning them together is part of what turns a class into a community. Neither is something I want to hand to a machine.

## How we got here: No Child Left Behind

A colleague pointed something out to me recently that reframed the whole thing. A lot of what we treat as the natural shape of school is actually the residue of one policy: No Child Left Behind.

When NCLB tied school funding and reputation to reading and math test scores, it changed what teaching was for. The [widely documented result was curriculum narrowing](https://www.edweek.org/policy-politics/no-child-left-behind-an-overview/2015/04): schools spent less time on the subjects that were not tested and more time preparing for the ones that were. Social studies, the arts, and foreign language got squeezed. So did the things that never show up on a bubble sheet at all, like collaboration, problem solving, and creative work. The law was [replaced by the Every Student Succeeds Act in 2015](https://www.edweek.org/policy-politics/no-child-left-behind-an-overview/2015/04), but the culture it built outlived it. We learned to value what we could measure, and we got very good at measuring the floor.

I want to be fair to the intent. The goal was equity. If you do not measure, you cannot see which students are being left behind, and plenty were. That instinct was right. But measurement became the mission, and twenty years later the pendulum has swung so far toward measurable content that we have a hard time even describing the other half of the job, let alone grading it.

## What the work actually rewards

Here is the part that should bother us. The skills we de-emphasized are precisely the ones the working world is now asking for most.

The World Economic Forum surveys more than a thousand employers for its [Future of Jobs Report](https://www.weforum.org/publications/the-future-of-jobs-report-2025/).[^wef] In the 2025 edition, the core skills employers rank highest are analytical thinking, resilience and flexibility, leadership, and creative thinking. Creative thinking sits near the top, named by well over half of the companies surveyed. 

A standardized test can measure analytical thinking, the skill at the top of that list in 2025 and the one school works hardest to build. It is nearly blind to everything else. Teachers reach for creativity, collaboration, and perseverance where the day allows, but reaching for these skills is not the same as building them, and a schedule packed with required content leaves little room to do it on purpose.

Then there is the finding that ties the whole argument together. The fastest-growing skill employers report wanting by 2030 is fluency with AI and data. You might expect that to come at the expense of the human skills. It does the opposite. The report's own reading is that as AI spreads, demand for deeply human skills like creative thinking rises rather than falls. The machine takes the routine, and the premium shifts to the judgment, the design, and the collaboration that sit on top of it.

Analytical thinking tops the list today, and nothing suggests it stops mattering. But it isn't where the growth is. On WEF's ranking of the skills growing fastest by 2030, it <a href="#wef-skills-widget" class="wsw-jump" data-view="growing">comes in ninth</a>, and the skills growing faster are the human ones we leave the least room for.

{% raw %}
<!-- WEF skills toggle widget. Self-contained: paste inline into a post, or save in _includes and reference it. -->
<a id="wef-skills-now" aria-hidden="true" tabindex="-1" style="display:block;height:0;overflow:hidden;"></a>
<a id="wef-skills-growing" aria-hidden="true" tabindex="-1" style="display:block;height:0;overflow:hidden;"></a>
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

  <!-- Print-only: both views render here so a printout shows 2025 and 2030 side by side. -->
  <div class="wsw-print" id="wsw-print-now">
    <h4 class="wsw-print-title">Most essential today</h4>
    <p class="wsw-caption wsw-print-caption"></p>
    <div class="wsw-chart"></div>
  </div>
  <div class="wsw-print" id="wsw-print-growing">
    <h4 class="wsw-print-title">Growing fastest by 2030</h4>
    <p class="wsw-caption wsw-print-caption"></p>
    <div class="wsw-chart"></div>
  </div>

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
/* Match the site's in-content H2 (minima: 2rem, weight 400, 1.75rem <=800px). */
#wef-skills-widget .wsw-title{font-size:2rem; font-weight:400; margin:0;}
@media (max-width:800px){#wef-skills-widget .wsw-title{font-size:1.75rem;}}
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
#wef-skills-widget .wsw-bar{height:100%; width:0; border-radius:5px; transition:width .55s cubic-bezier(.22,.61,.36,1), background-color .3s ease; position:relative;}
#wef-skills-widget .wsw-bar-rank{position:absolute; left:4px; top:50%; transform:translateY(-50%); font-size:.7rem; font-weight:700; color:#fff; white-space:nowrap; text-shadow:0 1px 2px rgba(0,0,0,.3);}
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
/* On screen the interactive toggle is shown and the print blocks are hidden. */
#wef-skills-widget .wsw-print{display:none;}
@media print{
  /* Hide the interactive controls/live chart; show both static views instead. */
  #wef-skills-widget .wsw-toggle, #wef-skills-widget #wsw-chart, #wef-skills-widget #wsw-caption{display:none !important;}
  #wef-skills-widget .wsw-print{display:block; margin:0 0 1.2rem;}
  #wef-skills-widget .wsw-print-title{font-size:1rem; font-weight:700; margin:0 0 .35rem;}
  #wef-skills-widget .wsw-print-caption{margin:.2rem 0 .8rem; min-height:0;}
  /* No animation in print; bars carry their final width inline. */
  #wef-skills-widget .wsw-bar{transition:none !important;}
  /* Keep bar fills when printers drop background colors. */
  #wef-skills-widget .wsw-bar, #wef-skills-widget .dot{-webkit-print-color-adjust:exact; print-color-adjust:exact;}
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
  // rank2025 tracks where each skill ranked in the "today" view for comparison.
  var GROWING = [
    {name:"AI & big data", cls:"ai", rank2025: null},
    {name:"Networks & cybersecurity", cls:"tech", rank2025: null},
    {name:"Technological literacy", cls:"tech", rank2025: 6},
    {name:"Creative thinking", cls:"human", rank2025: 4},
    {name:"Resilience, flexibility & agility", cls:"human", rank2025: 2},
    {name:"Curiosity & lifelong learning", cls:"human", rank2025: 8},
    {name:"Leadership & social influence", cls:"human", rank2025: 3},
    {name:"Talent management", cls:"human", rank2025: 9},
    {name:"Analytical thinking", cls:"tech", rank2025: 1},
    {name:"Environmental stewardship", cls:"tech", rank2025: null}
  ];

  var CAPTIONS = {
    now: "<b>AI is not on this list.</b> The skills employers call most essential right now are mostly human ones, ranked by the share of employers naming each a core skill. (Click on <a href='#wef-skills-widget' class='wsw-jump' data-view='growing'><b>Growing fastest by 2030</b></a> to see what employers need in just 4 years.)",
    growing: "<b>Now AI leaps to number one.</b> But the human skills do not fall away. Creativity, resilience, curiosity, and leadership all stay near the top of what is growing fastest."
  };

  var chart = document.getElementById("wsw-chart");
  var caption = document.getElementById("wsw-caption");
  var btns = widget.querySelectorAll(".wsw-btn");

  // Build the rows for a view. When staticWidth is true (print), the final bar
  // width is baked into the markup so it renders without the screen animation.
  function buildRows(view, staticWidth){
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
      var barAttr = staticWidth ? 'style="width:' + width + '%"' : 'data-w="' + width + '"';
      // For the 2030 view, show each skill's 2025 rank inside the bar.
      var rankInner = "";
      if(view === "growing" && d.rank2025 !== undefined) {
        var rankText = d.rank2025 ? d.rank2025 : "—";
        rankInner = '<span class="wsw-bar-rank">' + rankText + '</span>';
      }
      html += '<div class="wsw-row">'
        + '<div class="wsw-rank">' + (i + 1) + '</div>'
        + '<div class="wsw-label">' + d.name + '</div>'
        + '<div class="wsw-track"><div class="wsw-bar ' + d.cls + '" ' + barAttr + '>' + rankInner + '</div></div>'
        + '<div class="wsw-val">' + valText + '</div>'
        + '</div>';
    });
    return html;
  }

  function render(view){
    chart.innerHTML = buildRows(view, false);
    caption.innerHTML = CAPTIONS[view];
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        chart.querySelectorAll(".wsw-bar").forEach(function(b){
          b.style.width = b.getAttribute("data-w") + "%";
        });
      });
    });
  }

  // Populate the print-only blocks once; both views are always present for printing.
  function fillPrint(id, view){
    var block = document.getElementById(id);
    if(!block) return;
    block.querySelector(".wsw-chart").innerHTML = buildRows(view, true);
    block.querySelector(".wsw-print-caption").innerHTML = CAPTIONS[view];
  }
  fillPrint("wsw-print-now", "now");
  fillPrint("wsw-print-growing", "growing");

  btns.forEach(function(btn){
    btn.addEventListener("click", function(){
      btns.forEach(function(b){ b.classList.remove("is-active"); b.setAttribute("aria-selected","false"); });
      btn.classList.add("is-active"); btn.setAttribute("aria-selected","true");
      render(btn.getAttribute("data-view"));
    });
  });

  // Links with class "wsw-jump" flip the widget to a view and scroll to it.
  // Delegated so it covers both in-prose links and the dynamically-rendered caption link.
  document.addEventListener("click", function(e){
    var link = e.target.closest(".wsw-jump");
    if(!link) return;
    e.preventDefault();
    var view = link.getAttribute("data-view") || "growing";
    var targetBtn = widget.querySelector('.wsw-btn[data-view="' + view + '"]');
    if(targetBtn) targetBtn.click();
    widget.scrollIntoView({behavior:"smooth", block:"center"});
  });

  render("now");

  // Deep-link support: #wef-skills-growing (or #wef-skills-now) switches the
  // widget to the right view on page load so external links land in context.
  var hash = window.location.hash;
  if (hash === "#wef-skills-growing") {
    var btn = widget.querySelector('.wsw-btn[data-view="growing"]');
    if (btn) btn.click();
  }
})();
</script>
{% endraw %}

So the market is asking for two things at once: people who can think creatively and work with others, and people who are comfortable using AI to multiply what they produce. That is nearly the inverse of what content-mastery optimization trained us to deliver.

## Applying fundamentals, building soft skills

I spent twenty-five years building software before I taught. I was a CTO, I wrote production code at Apple and Khan Academy, and in all that time I never once saw someone hired or kept for a test score. People were valued for what they could build, how they thought when a system broke, how clearly they could explain it, and whether anyone wanted to work with them again.

The format that develops those things is not a worksheet. It is a project.

My robotics students design and build underwater ROVs and compete with them. The work has a real specification, a budget, a team, engineering documentation, and a deadline that does not move, because a competition does not care about your excuses. Students hit problems no answer key anticipated. They debug at the last minute with tired hands. They split up the labor, miss a handoff, fix it, and then present what they made to people who ask hard questions. Every skill on the employer list is in that paragraph. None of it is on a bubble sheet, and none of it can be faked by a student who has to stand up and defend the thing they built.

I won't pretend this is easy or that it scales on its own. PBL like this is a labor of dedication. The prep is heavy and the day-to-day logistics are real. The hard part is getting students to focus, to plan, to work productively together: teaching by doing, and letting them learn the soft skills the way soft skills are actually learned, through experience and failure, and develop character along the way. The students who haven't bought in yet can stall a whole team, and some years the luck of the roster makes it harder still. I keep doing it anyway, because the payoff is worth the cost, and because students can tell when the work is real. They know I care.

Projects are the one format where students apply the fundamentals and build the soft skills at the same time. You cannot make the robot work without the fundamentals you already have, and you cannot finish the season without the collaboration you are learning as you go. That is not a tradeoff between rigor and creativity. It is the place they stop being opposites.

## AI as the multiplier, with one guardrail

This is where AI comes back in, and where I have to be careful, because I have argued before that we should [protect the productive struggle of students who are still learning the basics](/2026/06/03/protect-struggle-multiply-learning.html). I still believe that. A beginner who uses AI to skip the struggle of learning the fundamentals does not learn the fundamentals. The tool has to be earned.

But once a student has the fundamentals, AI stops being a crutch and becomes a multiplier. In a project, an experienced student can use it to reach further: more ambitious designs, more professional documentation, faster iteration, higher-level ideation. That is how the engineers I used to work with use it now, and it is what employers say they want. The skill at that stage is not avoiding the tool. It is using it well: prompting with intent, judging what comes back, slowing down, and cutting the slop. A multiplier only helps if you have something worth multiplying. Fundamentals first, then the multiplier.

None of this means a project needs AI. Plenty of the best ones don't. The point is only that when AI shows up, it should multiply learning rather than replace it.

That is the whole shape of it. Protect the cognitive struggle while students learn the fundamentals. Multiply once they have them. Then, inside projects, students apply those fundamentals while building the human skills.

## The real inequity

We usually argue equity at the level of grading: who gets measured fairly, who clears the bar, whether a mark reflects what a student actually knows. But that keeps the fight inside the frame I'm trying to leave. The deeper inequity isn't how we score the soft skills. It's that a content-only curriculum never teaches them, and the students who pay the highest price are the ones who don't pick them up at home or in some other opt-in program. Creativity, collaboration, knowing how to carry yourself and work with other people: school is the one place every kid can get them. *Withholding them is the inequity.* How we grade matters, but it's a much smaller question than the one we've let it stand in for.

I'm not the only one circling this. A colleague recently had some of us watch [Most Likely to Succeed](https://en.wikipedia.org/wiki/Most_Likely_to_Succeed_(film)), the 2015 documentary that follows ninth graders at High Tech High, a San Diego charter school built around project-based learning. It argues that the school most of us grew up in was designed more than a century ago to produce reliable, standardized output, and that the economy which rewarded that output is gone. It's a provocation more than a prescription, but it names the thing I keep coming back to. We are optimizing for the wrong skills.

There's a larger version of this argument, about what kind of citizens, leaders, and followers we're forming, and who gets access to that formation. But that's why this piece is about skills and not scores.

## What I'm really saying

The whole argument in a breath. We built school around what a test can measure, and spent twenty years getting better at it. The world now pays most for what it can't. The content recall we worked hardest to test is exactly what a machine now produces for free. Projects are where students apply the fundamentals and build the human skills a machine can't do for them.

None of this is a call for less rigor. It's a call to stop optimizing for what's easiest to score. What I want is not complicated: classrooms where students make things together, where creativity and collaboration are the work itself and not the reward at the end of the unit.[^codehs] Where the struggle of learning the fundamentals is something students do alongside each other, which is its own kind of community and its own reason not to hand that part to a machine. And I want schools willing to put project-based learning at the center of how kids learn, not at the edges.

A test was never built to see the skills that matter most: creating, working with other people, and using the right tools well once the fundamentals are real. These are the soft and real-world skills today's work runs on. PBL is a good way to deliver them. They are the right skills our future leaders and citizens need.

There is a strange piece of hope buried in California's own standards. The CTE anchor standards already name nearly every skill on the employer list: teamwork, flexibility, problem solving, real projects and portfolios. They have been sitting in the elective wing of the school, unmeasured and mostly unnoticed. That is [the next piece](/2026/07/08/hope-in-the-standards.html). After that comes [the practice](/2026/07/08/run-the-classroom-like-a-studio.html): what it looks like to run a classroom on industry's own tools.

---

*All opinions are my own. Feedback and collaboration welcome. -- Eric Brown*

[^codehs]: I compared two intro CS curricula on exactly these axes (creativity & collaboration) in [CodeHS vs. CMU CS Academy](/2026/06/10/codehs-vs-cmu.html) -- which one builds more of what I'm describing here.

[^wef]: Skills data from the World Economic Forum, *Future of Jobs Report 2025*, a survey of more than 1,000 employers across 55 economies. The "most essential today" view ranks skills by the share of employers identifying each as a core skill (Figure 3.3); the "growing fastest by 2030" view follows WEF's ranked list of skills rising in importance (Figure 3.4), where AI and big data place first. Full report: <https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf>. For a US, graduate-specific lens, the National Association of Colleges and Employers (NACE) finds the same priorities: employers rank problem-solving, communication, and teamwork highest among the qualities they seek in new college graduates.