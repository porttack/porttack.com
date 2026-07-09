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
<!-- WEF employer-skills chart. Engine + dataset live in the shared library;
     this page only configures the two tabs. See /assets/skills-widget.js and
     /assets/skills-widget-data.js. -->
<script src="/assets/skills-widget.js"></script>
<script src="/assets/skills-widget-data.js"></script>
<div id="wef-skills-widget" class="skills-widget">
  <div class="wsw-head">
    <h3 class="wsw-title">What employers say they need</h3>
    <div class="wsw-toggle" role="tablist" aria-label="Choose a view"></div>
  </div>

  <p class="wsw-caption"></p>

  <div class="wsw-chart" aria-live="polite"></div>

  <div class="wsw-legend">
    <span class="wsw-key"><i class="dot human"></i>Human / soft skill</span>
    <span class="wsw-key"><i class="dot tech"></i>Cognitive / technical</span>
    <span class="wsw-key"><i class="dot ai"></i>AI &amp; big data</span>
  </div>

  <p class="wsw-source">Source: World Economic Forum, <em>Future of Jobs Report 2025</em> (Figs. 3.3 &amp; 3.4; global; n&gt;1,000 employers). "Today" ranks skills by the share of employers calling each a core skill. "Growing" shows WEF's ranked order of the fastest-growing skills.</p>
</div>

<script>
SkillsWidget.init({
  el: "#wef-skills-widget",
  dataset: "wef-skills",
  defaultView: "now",
  tabs: [
    {view:"now",     label:"Most essential today",    anchor:"wef-skills-now"},
    {view:"growing", label:"Growing fastest by 2030", anchor:"wef-skills-growing"}
  ],
  // This post nudges readers from the "now" tab to "growing"; override just
  // that caption to add the in-widget jump link.
  captions: {
    now: "<b>AI is not on this list.</b> The skills employers call most essential right now are mostly human ones, ranked by the share of employers naming each a core skill. (Click on <a href='#wef-skills-widget' class='wsw-jump' data-view='growing'><b>Growing fastest by 2030</b></a> to see what employers need in just 4 years.)"
  }
});
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