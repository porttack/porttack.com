---
layout: post
title: "Soft Skills Are in the Standards"
date: 2026-07-08
categories: draft
excerpt_separator: <!--more-->
excerpt: "Part 2: The skills employers want most are already written into California standards. The CTE anchor standards carry the human skills, the CS standards carry the technical ones, and the soft half goes untested, which has kept it honest and kept it quiet."
---

*Draft - in progress, not yet public*

{% include series-toc.html part=2 %}

<!--more-->

{% raw %}
<!-- WEF skills toggle widget, extended with a CTE-standards mapping view. -->
<a id="wef-skills-now" aria-hidden="true" tabindex="-1" style="display:block;height:0;overflow:hidden;"></a>
<a id="wef-skills-growing" aria-hidden="true" tabindex="-1" style="display:block;height:0;overflow:hidden;"></a>
<a id="wef-skills-cte" aria-hidden="true" tabindex="-1" style="display:block;height:0;overflow:hidden;"></a>
<a id="wef-skills-match" aria-hidden="true" tabindex="-1" style="display:block;height:0;overflow:hidden;"></a>
<a id="wef-skills-csta" aria-hidden="true" tabindex="-1" style="display:block;height:0;overflow:hidden;"></a>
<div id="wef-skills-widget">
  <div class="wsw-head">
    <h3 class="wsw-title">Interactive Chart: Skills &harr; Standards</h3>
    <div class="wsw-toggle" role="tablist" aria-label="Choose a view">
      <button class="wsw-btn" data-view="now" role="tab" aria-selected="false">Most essential today</button>
      <button class="wsw-btn" data-view="growing" role="tab" aria-selected="false">Growing fastest by 2030</button>
      <!-- "In the CTE standards" table tab hidden for now; restore by uncommenting
           this button and the matching print block below. The view itself still
           works via the #wef-skills-cte deep link.
      <button class="wsw-btn" data-view="cte" role="tab" aria-selected="false">In the CTE standards</button>
      -->
      <button class="wsw-btn is-active" data-view="match" role="tab" aria-selected="true">CTE Match-up</button>
      <button class="wsw-btn" data-view="csta" role="tab" aria-selected="false">CSTA Match-up</button>
    </div>
  </div>

  <p class="wsw-caption" id="wsw-caption"></p>

  <div class="wsw-chart" id="wsw-chart" aria-live="polite"></div>

  <!-- Print-only: all views render here so a printout shows everything. -->
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
  <!-- Hidden with the "In the CTE standards" tab; restore together.
  <div class="wsw-print" id="wsw-print-cte">
    <h4 class="wsw-print-title">Mapped to California CTE anchor standards</h4>
    <p class="wsw-caption wsw-print-caption"></p>
    <div class="wsw-chart"></div>
  </div>
  -->

  <div class="wsw-legend">
    <span class="wsw-key"><i class="dot human"></i>Human / soft skill</span>
    <span class="wsw-key"><i class="dot tech"></i>Cognitive / technical</span>
    <span class="wsw-key"><i class="dot ai"></i>AI &amp; big data</span>
  </div>

  <p class="wsw-source">Source: World Economic Forum, <em>Future of Jobs Report 2025</em> (Figs. 3.3 &amp; 3.4; global; n&gt;1,000 employers), and the California CTE Model Curriculum Standards knowledge and performance anchor standards (2013, ICT sector edition). In the standards table, Rank is each skill's 2025 employer rank; skills marked 2030 appear only on the fastest-growing list. Coverage rates how fully the anchor standard covers the skill: strong = named at the anchor-standard level, partial = covered by sub-standards, gap = thin or missing. The match-up views draw the mapping as lines: solid = strong, dashed = partial, no line = gap; hover or tap any item on the right to read its full text with the mapped sub-standards highlighted. The CTE match-up quotes the ICT sector edition (sector name abbreviated to ICT). The CSTA match-up sets the same skills against California's CS standards: the seven core practices (statements quoted from the K-12 Computer Science Framework, end-of-grade-12 expectations) and the five concept strands of the 9-12 core (standards quoted from the 2018 California CS standards).</p>
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
#wef-skills-widget .wsw-toggle{display:inline-flex; flex-wrap:wrap; background:#F1F4F6; border-radius:999px; padding:3px;}
#wef-skills-widget .wsw-btn{
  border:0; background:transparent; cursor:pointer; font:inherit; font-size:.82rem; font-weight:600;
  color:var(--sub); padding:.4rem .8rem; border-radius:999px; transition:all .18s ease;
}
#wef-skills-widget .wsw-btn.is-active{background:#fff; color:var(--ink); box-shadow:0 1px 3px rgba(20,40,60,.14);}
#wef-skills-widget .wsw-caption{font-size:.92rem; color:var(--sub); margin:.2rem 0 1rem; min-height:1.3em;}
#wef-skills-widget .wsw-caption b{color:var(--ink);}
#wef-skills-widget .wsw-row{display:grid; grid-template-columns:26px 168px 1fr 46px; align-items:center; gap:.55rem; margin:.32rem 0;}
#wef-skills-widget .wsw-row.cte{grid-template-columns:36px 168px 1fr 62px; margin:.42rem 0;}
#wef-skills-widget .wsw-row.cte .wsw-rank{font-size:.72rem;}
#wef-skills-widget .wsw-thead{margin:.1rem 0 .5rem; padding-bottom:.35rem; border-bottom:1px solid var(--line);}
#wef-skills-widget .wsw-thead div{font-size:.66rem; font-weight:700; text-transform:uppercase; letter-spacing:.05em; color:var(--sub);}
#wef-skills-widget .wsw-thead div:nth-child(1){text-align:center;}
#wef-skills-widget .wsw-thead div:nth-child(2){text-align:right;}
#wef-skills-widget .wsw-thead div:nth-child(4){text-align:center;}
#wef-skills-widget .wsw-rank{font-size:.8rem; font-weight:700; color:var(--sub); text-align:center;}
#wef-skills-widget .wsw-label{font-size:.84rem; text-align:right; color:var(--ink);}
#wef-skills-widget .wsw-label .dot{width:9px; height:9px; margin-left:.35rem; vertical-align:-1px;}
#wef-skills-widget .wsw-track{background:#F1F4F6; border-radius:5px; height:22px; overflow:hidden;}
#wef-skills-widget .wsw-bar{height:100%; width:0; border-radius:5px; transition:width .55s cubic-bezier(.22,.61,.36,1), background-color .3s ease; position:relative;}
#wef-skills-widget .wsw-bar-rank{position:absolute; left:4px; top:50%; transform:translateY(-50%); font-size:.7rem; font-weight:700; color:#fff; white-space:nowrap; text-shadow:0 1px 2px rgba(0,0,0,.3);}
#wef-skills-widget .wsw-bar.human{background:var(--human);}
#wef-skills-widget .wsw-bar.tech{background:var(--tech);}
#wef-skills-widget .wsw-bar.ai{background:var(--ai);}
#wef-skills-widget .wsw-val{font-size:.84rem; font-weight:700; color:var(--ink);}
#wef-skills-widget .wsw-std{font-size:.8rem; color:var(--ink); line-height:1.3;}
#wef-skills-widget .wsw-std b{font-weight:700;}
/* Coverage tags are deliberately neutral so they don't collide with the
   category legend colors, which label the skills themselves. */
#wef-skills-widget .wsw-fit{font-size:.64rem; font-weight:700; text-transform:uppercase; letter-spacing:.03em; border-radius:4px; padding:3px 0; text-align:center;}
#wef-skills-widget .wsw-fit.strong{background:var(--ink); color:#fff;}
#wef-skills-widget .wsw-fit.partial{background:#8A94A0; color:#fff;}
#wef-skills-widget .wsw-fit.gap{background:#fff; border:1px solid var(--tech); color:var(--sub);}
/* Match-up view: two columns of chips with SVG lines drawn between them. */
#wef-skills-widget .wsw-match{position:relative; display:flex; justify-content:space-between;}
#wef-skills-widget .wsw-match-svg{position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none;}
#wef-skills-widget .wsw-mcol{display:flex; flex-direction:column; gap:.45rem; width:42%; position:relative; z-index:1;}
#wef-skills-widget .wsw-mcol.right{width:36%; justify-content:space-between;}
#wef-skills-widget .wsw-mcol-h{font-size:.66rem; font-weight:700; text-transform:uppercase; letter-spacing:.05em; color:var(--sub); margin-bottom:.15rem;}
#wef-skills-widget .wsw-mcol.left .wsw-mcol-h{text-align:right;}
#wef-skills-widget .wsw-mitem{font-size:.78rem; line-height:1.25; background:#F1F4F6; border-radius:6px; padding:.35rem .55rem; color:var(--ink);}
#wef-skills-widget .wsw-mcol.left .wsw-mitem{text-align:right;}
#wef-skills-widget .wsw-mitem .dot{width:9px; height:9px; margin-left:.35rem; vertical-align:-1px;}
#wef-skills-widget .wsw-mitem.is-gap{background:#fff; border:1px dashed var(--tech); color:var(--sub);}
#wef-skills-widget .wsw-mnum{font-weight:700; color:var(--sub); margin-right:.3rem;}
/* Anchor-standard chips are interactive: hover or tap opens the detail panel. */
#wef-skills-widget .wsw-mcol.right .wsw-mitem{display:flex; align-items:center; justify-content:space-between; gap:.45rem; cursor:pointer; -webkit-tap-highlight-color:transparent; transition:background .15s ease;}
#wef-skills-widget .wsw-mcol.right .wsw-mitem:hover{background:#E6EAEE;}
#wef-skills-widget .wsw-mitem.is-active{background:var(--ink); color:#fff;}
#wef-skills-widget .wsw-mitem.is-active .wsw-mnum{color:#C9D2DA;}
#wef-skills-widget .wsw-minfo{flex:none; width:16px; height:16px; line-height:14px; text-align:center; font-size:.75rem; font-weight:700; color:var(--sub); border:1px solid #D5DBE1; border-radius:50%; background:#fff;}
#wef-skills-widget .wsw-mitem.is-active .wsw-minfo{color:var(--ink);}
#wef-skills-widget .wsw-mhint{font-size:.76rem; color:var(--sub); margin:.65rem 0 0; font-style:italic;}
#wef-skills-widget .wsw-detail{display:none; margin-top:.7rem; border:1px solid var(--line); border-left:4px solid var(--human); border-radius:8px; padding:.75rem .9rem; background:#FBFCFD;}
#wef-skills-widget .wsw-detail h4{margin:0 0 .3rem; font-size:.95rem; color:var(--ink);}
#wef-skills-widget .wsw-detail-match{font-size:.76rem; color:var(--sub); margin:0 0 .55rem;}
#wef-skills-widget .wsw-mtag{display:inline-block; border-radius:999px; padding:1px 8px; font-size:.68rem; font-weight:700; margin:0 .25rem .15rem .1rem;}
#wef-skills-widget .wsw-mtag.human{background:#E0F1F2; color:var(--human);}
#wef-skills-widget .wsw-mtag.tech{background:#EEF1F4; color:var(--sub);}
#wef-skills-widget .wsw-mtag.ai{background:#FBF1D9; color:#8A6A00;}
#wef-skills-widget .wsw-detail-desc{font-size:.82rem; color:var(--ink); margin:0 0 .55rem;}
/* Whole-anchor (strong) matches: the description itself is the covered text,
   and every sub-standard gets a lighter tint than the specifically-mapped ones. */
#wef-skills-widget .wsw-detail-desc.is-covered{background:#E0F1F2; padding:.5rem .6rem; border-radius:5px; box-shadow:inset 3px 0 0 var(--human);}
#wef-skills-widget .wsw-detail li.is-covered-whole{background:#F0F7F8; color:var(--ink);}
#wef-skills-widget .wsw-mwhole{display:block; margin-top:.3rem; font-style:italic;}
#wef-skills-widget .wsw-detail ul{list-style:none; margin:0; padding:0;}
#wef-skills-widget .wsw-detail li{font-size:.78rem; color:var(--sub); margin:.22rem 0; padding:.24rem .45rem; border-radius:5px; line-height:1.35;}
#wef-skills-widget .wsw-detail li b{color:var(--ink); margin-right:.3rem;}
#wef-skills-widget .wsw-detail li.is-covered{background:#E0F1F2; color:var(--ink); box-shadow:inset 3px 0 0 var(--human);}
#wef-skills-widget .wsw-covlabel{display:inline-block; margin-left:.4rem; font-size:.64rem; font-weight:700; text-transform:uppercase; letter-spacing:.03em; color:var(--human);}
#wef-skills-widget .wsw-legend{display:flex; flex-wrap:wrap; gap:.4rem 1.1rem; margin:1rem 0 .5rem; font-size:.8rem; color:var(--sub);}
#wef-skills-widget .wsw-key{display:inline-flex; align-items:center; gap:.4rem;}
#wef-skills-widget .dot{width:11px; height:11px; border-radius:3px; display:inline-block;}
#wef-skills-widget .dot.human{background:var(--human);}
#wef-skills-widget .dot.tech{background:var(--tech);}
#wef-skills-widget .dot.ai{background:var(--ai);}
#wef-skills-widget .wsw-source{font-size:.74rem; color:#8A94A0; margin:.4rem 0 0; line-height:1.4;}
@media (max-width:520px){
  #wef-skills-widget .wsw-row{grid-template-columns:22px 120px 1fr 40px; gap:.4rem;}
  #wef-skills-widget .wsw-row.cte{grid-template-columns:30px 104px 1fr 50px;}
  #wef-skills-widget .wsw-label{font-size:.78rem;}
  #wef-skills-widget .wsw-rank{font-size:.74rem;}
  #wef-skills-widget .wsw-std{font-size:.74rem;}
  #wef-skills-widget .wsw-mitem{font-size:.7rem; padding:.3rem .4rem;}
  #wef-skills-widget .wsw-mcol{width:44%;}
  #wef-skills-widget .wsw-mcol.right{width:40%;}
}
/* On screen the interactive toggle is shown and the print blocks are hidden. */
#wef-skills-widget .wsw-print{display:none;}
@media print{
  /* Hide the interactive controls/live chart; show all static views instead. */
  #wef-skills-widget .wsw-toggle, #wef-skills-widget #wsw-chart, #wef-skills-widget #wsw-caption{display:none !important;}
  #wef-skills-widget .wsw-print{display:block; margin:0 0 1.2rem;}
  #wef-skills-widget .wsw-print-title{font-size:1rem; font-weight:700; margin:0 0 .35rem;}
  #wef-skills-widget .wsw-print-caption{margin:.2rem 0 .8rem; min-height:0;}
  /* No animation in print; bars carry their final width inline. */
  #wef-skills-widget .wsw-bar{transition:none !important;}
  /* Keep bar fills when printers drop background colors. */
  #wef-skills-widget .wsw-bar, #wef-skills-widget .dot, #wef-skills-widget .wsw-fit{-webkit-print-color-adjust:exact; print-color-adjust:exact;}
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

  // Union of both WEF lists, mapped to the CA CTE knowledge and performance
  // anchor standards (2013, ICT sector edition). rank = 2025 "today" rank;
  // null means the skill appears only on the 2030 fastest-growing list.
  // fit: strong = named at anchor level; partial = sub-standards; gap = thin/missing.
  var CTE = [
    {name:"Analytical thinking", cls:"tech", rank:1, std:"<b>5.0</b> Problem Solving &amp; Critical Thinking; <b>1.0</b> Academics", fit:"strong"},
    {name:"Resilience, flexibility & agility", cls:"human", rank:2, std:"<b>7.0</b> Responsibility &amp; Flexibility", fit:"strong"},
    {name:"Leadership & social influence", cls:"human", rank:3, std:"<b>9.0</b> Leadership &amp; Teamwork", fit:"strong"},
    {name:"Creative thinking", cls:"human", rank:4, std:"<b>11.3&ndash;11.4</b> innovation &amp; entrepreneurship only", fit:"partial"},
    {name:"Motivation & self-awareness", cls:"human", rank:5, std:"<b>3.2</b> personal character traits &amp; career success", fit:"partial"},
    {name:"Technological literacy", cls:"tech", rank:6, std:"<b>4.0</b> Technology; <b>10.0</b> Technical Knowledge &amp; Skills", fit:"strong"},
    {name:"Empathy & active listening", cls:"human", rank:7, std:"<b>2.3</b> verbal &amp; nonverbal communication; <b>9.6</b> respect for differences", fit:"partial"},
    {name:"Curiosity & lifelong learning", cls:"human", rank:8, std:"<b>3.0</b> Career Planning; <b>11.2</b> continued learning", fit:"partial"},
    {name:"Talent management", cls:"human", rank:9, std:"<b>9.1&ndash;9.2</b> leadership &amp; team development", fit:"partial"},
    {name:"Service orientation & customer service", cls:"human", rank:10, std:"<b>2.8</b> customer-oriented service approach to users", fit:"partial"},
    {name:"AI & big data", cls:"ai", rank:null, std:"<b>4.5</b> \"projected technological advances\" at best", fit:"gap"},
    {name:"Networks & cybersecurity", cls:"tech", rank:null, std:"<b>10.8</b> security concepts (ICT pathways)", fit:"strong"},
    {name:"Environmental stewardship", cls:"tech", rank:null, std:"<b>6.9&ndash;6.11</b> e-waste, resources, energy", fit:"partial"}
  ];

  // The eleven CTE knowledge and performance anchor standards.
  var CTE_ANCHORS = [
    {id:"1", disp:"1.0", name:"Academics"},
    {id:"2", disp:"2.0", name:"Communications"},
    {id:"3", disp:"3.0", name:"Career Planning &amp; Management"},
    {id:"4", disp:"4.0", name:"Technology"},
    {id:"5", disp:"5.0", name:"Problem Solving &amp; Critical Thinking"},
    {id:"6", disp:"6.0", name:"Health &amp; Safety"},
    {id:"7", disp:"7.0", name:"Responsibility &amp; Flexibility"},
    {id:"8", disp:"8.0", name:"Ethics &amp; Legal Responsibilities"},
    {id:"9", disp:"9.0", name:"Leadership &amp; Teamwork"},
    {id:"10", disp:"10.0", name:"Technical Knowledge &amp; Skills"},
    {id:"11", disp:"11.0", name:"Demonstration &amp; Application"}
  ];

  // Lines for the CTE match-up: s = index into CTE, a = anchor id.
  // w: "strong" draws solid, "partial" draws dashed. Skills with no entry
  // (AI & big data) are the gaps and get no line.
  var CTE_LINKS = [
    {s:0, a:"5", w:"strong"}, {s:0, a:"1", w:"partial"},
    {s:1, a:"7", w:"strong"},
    {s:2, a:"9", w:"strong"},
    {s:3, a:"11", w:"partial"},
    {s:4, a:"3", w:"partial"},
    {s:5, a:"4", w:"strong"}, {s:5, a:"10", w:"strong"},
    {s:6, a:"2", w:"partial"}, {s:6, a:"9", w:"partial"},
    {s:7, a:"3", w:"partial"}, {s:7, a:"11", w:"partial"},
    {s:8, a:"9", w:"partial"},
    {s:9, a:"2", w:"partial"},
    {s:11, a:"10", w:"strong"},
    {s:12, a:"6", w:"partial"}
  ];

  // Full text of each anchor standard, quoted from the CDE ICT sector edition
  // (2013), with the ELA alignment notes dropped and the sector name
  // abbreviated to ICT. 6.6 and 6.8 really are identical in the source.
  var ANCHOR_DETAILS = {
    1: {desc:"Analyze and apply appropriate academic standards required for successful industry sector pathway completion leading to postsecondary education and employment. Refer to the ICT academic alignment matrix for identification of standards.", subs:[]},
    2: {desc:"Acquire and accurately use ICT sector terminology and protocols at the career and college readiness level for communicating effectively in oral, written, and multimedia formats.", subs:[
      {n:"2.1", t:"Recognize the elements of communication using a sender-receiver model."},
      {n:"2.2", t:"Identify barriers to accurate and appropriate communication."},
      {n:"2.3", t:"Interpret verbal and nonverbal communications and respond appropriately."},
      {n:"2.4", t:"Demonstrate elements of written and electronic communication such as accurate spelling, grammar, and format."},
      {n:"2.5", t:"Communicate information and ideas effectively to multiple audiences using a variety of media and formats."},
      {n:"2.6", t:"Advocate and practice safe, legal, and responsible use of digital media information and communications technologies."},
      {n:"2.7", t:"Use technical writing and communication skills to work effectively with diverse groups of people."},
      {n:"2.8", t:"Understand the principles of a customer-oriented service approach to users."}
    ]},
    3: {desc:"Integrate multiple sources of career information from diverse formats to make informed career decisions, solve problems, and manage personal career plans.", subs:[
      {n:"3.1", t:"Identify personal interests, aptitudes, information, and skills necessary for informed career decision making."},
      {n:"3.2", t:"Evaluate personal character traits such as trust, respect, and responsibility and understand the impact they can have on career success."},
      {n:"3.3", t:"Explore how information and communication technologies are used in career planning and decision making."},
      {n:"3.4", t:"Research the scope of career opportunities available and the requirements for education, training, certification, and licensure."},
      {n:"3.5", t:"Integrate changing employment trends, societal needs, and economic conditions into career planning."},
      {n:"3.6", t:"Recognize the role and function of professional organizations, industry associations, and organized labor in a productive society."},
      {n:"3.7", t:"Recognize the importance of small business in the California and global economies."},
      {n:"3.8", t:"Understand how digital media are used by potential employers and postsecondary agencies to evaluate candidates."},
      {n:"3.9", t:"Develop a career plan that reflects career interests, pathways, and postsecondary options."}
    ]},
    4: {desc:"Use existing and emerging technology, to investigate, research, and produce products and services, including new information, as required in the ICT sector workplace environment.", subs:[
      {n:"4.1", t:"Use electronic reference materials to gather information and produce products and services."},
      {n:"4.2", t:"Employ technology based communications responsibly and effectively to explore complex systems and issues."},
      {n:"4.3", t:"Use information and communication technologies to synthesize, summarize, compare, and contrast information from multiple sources."},
      {n:"4.4", t:"Discern the quality and value of information collected using digital technologies, and recognize bias and intent of the associated sources."},
      {n:"4.5", t:"Research past, present, and projected technological advances as they impact a particular pathway."},
      {n:"4.6", t:"Assess the value of various information and communication technologies to interact with constituent populations as part of a search of the current literature or in relation to the information task."}
    ]},
    5: {desc:"Conduct short, as well as more sustained, research to create alternative solutions to answer a question or solve a problem unique to the ICT sector using critical and creative thinking, logical reasoning, analysis, inquiry, and problem-solving techniques.", subs:[
      {n:"5.1", t:"Identify and ask significant questions that clarify various points of view to solve problems."},
      {n:"5.2", t:"Solve predictable and unpredictable work-related problems using various types of reasoning (inductive, deductive) as appropriate."},
      {n:"5.3", t:"Use systems thinking to analyze how various components interact with each other to produce outcomes in a complex work environment."},
      {n:"5.4", t:"Interpret information and draw conclusions, based on the best analysis, to make informed decisions."},
      {n:"5.5", t:"Use a logical and structured approach to isolate and identify the source of problems and to resolve problems."},
      {n:"5.6", t:"Know the available resources for identifying and resolving problems."},
      {n:"5.7", t:"Work out problems iteratively and recursively."},
      {n:"5.8", t:"Create and use algorithms and solve problems."},
      {n:"5.9", t:"Deconstruct large problems into components to solve."},
      {n:"5.10", t:"Use multiple layers of abstraction."},
      {n:"5.11", t:"Understand the concept of base systems, including binary and hexadecimal."},
      {n:"5.12", t:"Apply the concepts of Boolean logic to decision making and searching."}
    ]},
    6: {desc:"Demonstrate health and safety procedures, regulations, and personal health practices and determine the meaning of symbols, key terms, and domain-specific words and phrases as related to the ICT sector workplace environment.", subs:[
      {n:"6.1", t:"Locate, and adhere to, Material Safety Data Sheet (MSDS) instructions."},
      {n:"6.2", t:"Interpret policies, procedures, and regulations for the workplace environment, including employer and employee responsibilities."},
      {n:"6.3", t:"Use health and safety practices for storing, cleaning, and maintaining tools, equipment, and supplies."},
      {n:"6.4", t:"Practice personal safety when lifting, bending, or moving equipment and supplies."},
      {n:"6.5", t:"Demonstrate how to prevent and respond to work-related accidents or injuries; this includes demonstrating an understanding of ergonomics."},
      {n:"6.6", t:"Maintain a safe and healthful working environment."},
      {n:"6.7", t:"Be informed of laws/acts pertaining to the Occupational Safety and Health Administration (OSHA)."},
      {n:"6.8", t:"Maintain a safe and healthful working environment."},
      {n:"6.9", t:"Dispose of e-waste properly, understanding the health, environmental, and legal risks of improper disposal."},
      {n:"6.10", t:"Act conscientiously regarding the use of natural resources (e.g., paper, ink, etc.)"},
      {n:"6.11", t:"Conserve energy while computing (e.g., turn off equipment at night, power-saving settings, etc.)"}
    ]},
    7: {desc:"Initiate, and participate in, a range of collaborations demonstrating behaviors that reflect personal and professional responsibility, flexibility, and respect in the ICT sector workplace environment and community settings.", subs:[
      {n:"7.1", t:"Recognize how financial management impacts the economy, workforce, and community."},
      {n:"7.2", t:"Explain the importance of accountability and responsibility in fulfilling personal, community, and workplace roles."},
      {n:"7.3", t:"Understand the need to adapt to changing and varied roles and responsibilities."},
      {n:"7.4", t:"Practice time management and efficiency to fulfill responsibilities."},
      {n:"7.5", t:"Apply high-quality techniques to product or presentation design and development."},
      {n:"7.6", t:"Demonstrate knowledge and practice of responsible financial management."},
      {n:"7.7", t:"Demonstrate the qualities and behaviors that constitute a positive and professional work demeanor, including appropriate attire for the profession."},
      {n:"7.8", t:"Explore issues of global significance and document the impact on the ICT sector."}
    ]},
    8: {desc:"Practice professional, ethical, and legal behavior, responding thoughtfully to diverse perspectives and resolving contradictions when possible, consistent with applicable laws, regulations, and organizational norms.", subs:[
      {n:"8.1", t:"Access, analyze, and implement quality assurance standards of practice."},
      {n:"8.2", t:"Identify local, district, state, and federal regulatory agencies, entities, laws, and regulations related to the ICT industry sector."},
      {n:"8.3", t:"Demonstrate ethical and legal practices consistent with ICT sector workplace standards."},
      {n:"8.4", t:"Explain the importance of personal integrity, confidentiality, and ethical behavior in the workplace."},
      {n:"8.5", t:"Analyze organizational culture and practices within the workplace environment."},
      {n:"8.6", t:"Adhere to copyright and intellectual property laws and regulations, and use and appropriately cite proprietary information."},
      {n:"8.7", t:"Conform to rules and regulations regarding sharing of confidential information, as determined by ICT sector laws and practices."},
      {n:"8.8", t:"Identify legal and ethical issues that have proliferated with increased technology adoption, including hacking, scamming, and breach of privacy."}
    ]},
    9: {desc:"Work with peers to promote divergent and creative perspectives, effective leadership, group dynamics, team and individual decision making, benefits of workforce diversity, and conflict resolution such as those practiced in the Future Business Leaders of America and SkillsUSA career technical student organization.", subs:[
      {n:"9.1", t:"Define leadership and identify the responsibilities, competencies, and behaviors of successful leaders."},
      {n:"9.2", t:"Identify the characteristics of successful teams, including leadership, cooperation, collaboration, and effective decision-making skills as applied in groups, teams, and career technical student organization activities."},
      {n:"9.3", t:"Understand the characteristics and benefits of teamwork, leadership, and citizenship in the school, community, and workplace setting."},
      {n:"9.4", t:"Explain how professional associations and organizations and associated leadership development and competitive career development activities enhance academic preparation, promote career choices, and contribute to employment opportunities."},
      {n:"9.5", t:"Understand that the modern world is an international community and requires an expanded global view."},
      {n:"9.6", t:"Respect individual and cultural differences and recognize the importance of diversity in the workplace."},
      {n:"9.7", t:"Participate in interactive teamwork to solve real ICT sector issues and problems."}
    ]},
    10: {desc:"Apply essential technical knowledge and skills common to all pathways in the ICT sector, following procedures when carrying out experiments or performing technical tasks.", subs:[
      {n:"10.1", t:"Interpret and explain terminology and practices specific to the ICT sector."},
      {n:"10.2", t:"Comply with the rules, regulations, and expectations of all aspects of the ICT sector."},
      {n:"10.3", t:"Construct projects and products specific to the ICT sector requirements and expectations."},
      {n:"10.4", t:"Collaborate with industry experts for specific technical knowledge and skills."},
      {n:"10.5", t:"Understand the major software and hardware components of a computer and a network and how they relate to each other."},
      {n:"10.6", t:"Understand data sizes of various types of information (text, pictures, sound, video, etc.) and data capacity of various forms of media."},
      {n:"10.7", t:"Understand the SI (metric) prefixes commonly used in computing including, at least, kilo, mega, giga, and tera."},
      {n:"10.8", t:"Understand security concepts including authorization, rights, and encryption."},
      {n:"10.9", t:"Use common industry-standard software and their applications including word processing, spreadsheets, databases, and multimedia software."},
      {n:"10.10", t:"Manage files in a hierarchical system."},
      {n:"10.11", t:"Know multiple ways in which to transfer information and resources (e.g., text, data, sound, video, still images) between software programs and systems."},
      {n:"10.12", t:"Know appropriate search procedures for different types of information, sources, and queries."},
      {n:"10.13", t:"Evaluate the accuracy, relevance, and comprehensiveness of retrieved information."},
      {n:"10.14", t:"Analyze the effectiveness of online information resources to support collaborative tasks, research, publications, communications, and increased productivity."}
    ]},
    11: {desc:"Demonstrate and apply the knowledge and skills contained in the ICT anchor standards, pathway standards, and performance indicators in classroom, laboratory, and workplace settings, and through career technical student organizations such as Future Business Leaders of America and SkillsUSA.", subs:[
      {n:"11.1", t:"Utilize work-based/workplace learning experiences to demonstrate and expand upon knowledge and skills gained during classroom instruction and laboratory practices specific to the ICT sector program of study."},
      {n:"11.2", t:"Demonstrate proficiency in a career technical pathway that leads to certification, licensure, and/or continued learning at the postsecondary level."},
      {n:"11.3", t:"Demonstrate entrepreneurship skills and knowledge of self-employment options and innovative ventures."},
      {n:"11.4", t:"Employ entrepreneurial practices and behaviors appropriate to ICT sector opportunities."},
      {n:"11.5", t:"Create a portfolio, or similar collection of work, that offers evidence through assessment and evaluation of skills and knowledge competency as contained in the anchor standards, pathway standards, and performance indicators."}
    ]}
  };

  // Sub-standards the employer-skill mapping points to, keyed by sub-standard
  // number, valued with the WEF skill that lands there. Drives the highlight
  // in the detail panel.
  var COVERED = {
    "2.3":"Empathy & active listening",
    "2.8":"Service orientation",
    "3.2":"Motivation & self-awareness",
    "3.4":"Curiosity & lifelong learning",
    "3.5":"Curiosity & lifelong learning",
    "4.5":"AI & big data (at best)",
    "6.9":"Environmental stewardship",
    "6.10":"Environmental stewardship",
    "6.11":"Environmental stewardship",
    "7.3":"Resilience & flexibility",
    "9.1":"Talent management",
    "9.2":"Talent management",
    "9.6":"Empathy & active listening",
    "9.7":"Leadership & social influence",
    "10.8":"Networks & cybersecurity",
    "11.2":"Curiosity & lifelong learning",
    "11.3":"Creative thinking",
    "11.4":"Creative thinking"
  };

  // The CSTA/CA CS side of the mapping: the seven core practices plus the
  // five concept strands of the California 9-12 core.
  var CSTA_ANCHORS = [
    {id:"P1", disp:"P1", name:"Fostering an Inclusive Computing Culture", unit:"practice"},
    {id:"P2", disp:"P2", name:"Collaborating Around Computing", unit:"practice"},
    {id:"P3", disp:"P3", name:"Recognizing &amp; Defining Computational Problems", unit:"practice"},
    {id:"P4", disp:"P4", name:"Developing &amp; Using Abstractions", unit:"practice"},
    {id:"P5", disp:"P5", name:"Creating Computational Artifacts", unit:"practice"},
    {id:"P6", disp:"P6", name:"Testing &amp; Refining Computational Artifacts", unit:"practice"},
    {id:"P7", disp:"P7", name:"Communicating About Computing", unit:"practice"},
    {id:"CS", disp:"CS", name:"Computing Systems", unit:"strand"},
    {id:"NI", disp:"NI", name:"Networks &amp; the Internet", unit:"strand"},
    {id:"DA", disp:"DA", name:"Data &amp; Analysis", unit:"strand"},
    {id:"AP", disp:"AP", name:"Algorithms &amp; Programming", unit:"strand"},
    {id:"IC", disp:"IC", name:"Impacts of Computing", unit:"strand"}
  ];

  // Skills with no entry here (motivation, curiosity, environmental
  // stewardship) are the CS-side gaps; note they flip against the CTE map.
  var CSTA_LINKS = [
    {s:0, a:"P3", w:"strong"}, {s:0, a:"P4", w:"strong"},
    {s:1, a:"P6", w:"partial"},
    {s:2, a:"P2", w:"partial"}, {s:2, a:"P7", w:"partial"},
    {s:3, a:"P5", w:"strong"},
    {s:5, a:"CS", w:"strong"}, {s:5, a:"AP", w:"strong"},
    {s:6, a:"P1", w:"strong"},
    {s:8, a:"P2", w:"partial"},
    {s:9, a:"P1", w:"partial"},
    {s:10, a:"DA", w:"strong"},
    {s:11, a:"NI", w:"strong"}
  ];

  // Practice statements quoted from the K-12 Computer Science Framework
  // (end-of-grade-12 expectations); strand standards quoted from the 2018
  // California CS standards, 9-12 core.
  var PRACTICE_DESC = "One of the seven core practices attached to every California CS standard. By the end of Grade 12, students should be able to:";
  var CSTA_DETAILS = {
    P1: {desc: PRACTICE_DESC, subs:[
      {n:"1.1", t:"Include the unique perspectives of others and reflect on one's own perspectives when designing and developing computational products."},
      {n:"1.2", t:"Address the needs of diverse end users during the design process to produce artifacts with broad accessibility and usability."},
      {n:"1.3", t:"Employ self- and peer-advocacy to address bias in interactions, product design, and development methods."}
    ]},
    P2: {desc: PRACTICE_DESC, subs:[
      {n:"2.1", t:"Cultivate working relationships with individuals possessing diverse perspectives, skills, and personalities."},
      {n:"2.2", t:"Create team norms, expectations, and equitable workloads to increase efficiency and effectiveness."},
      {n:"2.3", t:"Solicit and incorporate feedback from, and provide constructive feedback to, team members and other stakeholders."},
      {n:"2.4", t:"Evaluate and select technological tools that can be used to collaborate on a project."}
    ]},
    P3: {desc: PRACTICE_DESC, subs:[
      {n:"3.1", t:"Identify complex, interdisciplinary, real-world problems that can be solved computationally."},
      {n:"3.2", t:"Decompose complex real-world problems into manageable subproblems that could integrate existing solutions or procedures."},
      {n:"3.3", t:"Evaluate whether it is appropriate and feasible to solve a problem computationally."}
    ]},
    P4: {desc: PRACTICE_DESC, subs:[
      {n:"4.1", t:"Extract common features from a set of interrelated processes or complex phenomena."},
      {n:"4.2", t:"Evaluate existing technological functionalities and incorporate them into new designs."},
      {n:"4.3", t:"Create modules and develop points of interaction that can apply to multiple situations and reduce complexity."},
      {n:"4.4", t:"Model phenomena and processes and simulate systems to understand and evaluate potential outcomes."}
    ]},
    P5: {desc: PRACTICE_DESC, subs:[
      {n:"5.1", t:"Plan the development of a computational artifact using an iterative process that includes reflection on and modification of the plan, taking into account key features, time and resource constraints, and user expectations."},
      {n:"5.2", t:"Create a computational artifact for practical intent, personal expression, or to address a societal issue."},
      {n:"5.3", t:"Modify an existing artifact to improve or customize it."}
    ]},
    P6: {desc: PRACTICE_DESC, subs:[
      {n:"6.1", t:"Systematically test computational artifacts by considering all scenarios and using test cases."},
      {n:"6.2", t:"Identify and fix errors using a systematic process."},
      {n:"6.3", t:"Evaluate and refine a computational artifact multiple times to enhance its performance, reliability, usability, and accessibility."}
    ]},
    P7: {desc: PRACTICE_DESC, subs:[
      {n:"7.1", t:"Select, organize, and interpret large data sets from multiple sources to support a claim."},
      {n:"7.2", t:"Describe, justify, and document computational processes and solutions using appropriate terminology consistent with the intended audience and purpose."},
      {n:"7.3", t:"Articulate ideas responsibly by observing intellectual property rights and giving appropriate attribution."}
    ]},
    CS: {desc:"California's three 9-12 core standards for Computing Systems:", subs:[
      {n:"9-12.CS.1", t:"Describe ways in which abstractions hide the underlying implementation details of computing systems to simplify user experiences."},
      {n:"9-12.CS.2", t:"Compare levels of abstraction and interactions between application software, system software, and hardware."},
      {n:"9-12.CS.3", t:"Develop guidelines that convey systematic troubleshooting strategies that others can use to identify and fix errors."}
    ]},
    NI: {desc:"California's four 9-12 core standards for Networks &amp; the Internet:", subs:[
      {n:"9-12.NI.4", t:"Describe issues that impact network functionality."},
      {n:"9-12.NI.5", t:"Describe the design characteristics of the internet."},
      {n:"9-12.NI.6", t:"Compare and contrast security measures to address various security threats."},
      {n:"9-12.NI.7", t:"Compare and contrast cryptographic techniques to model the secure transmission of information."}
    ]},
    DA: {desc:"California's four 9-12 core standards for Data &amp; Analysis. The specialty tier goes further and names artificial intelligence outright (9-12S.AP.10: \"Describe how artificial intelligence drives many software and physical systems\").", subs:[
      {n:"9-12.DA.8", t:"Translate between different representations of data abstractions of real-world phenomena, such as characters, numbers, and images."},
      {n:"9-12.DA.9", t:"Describe tradeoffs associated with how data elements are organized and stored."},
      {n:"9-12.DA.10", t:"Create data visualizations to help others better understand real-world phenomena."},
      {n:"9-12.DA.11", t:"Refine computational models to better represent the relationships among different elements of data collected from a phenomenon or process."}
    ]},
    AP: {desc:"California's eleven 9-12 core standards for Algorithms &amp; Programming:", subs:[
      {n:"9-12.AP.12", t:"Design algorithms to solve computational problems using a combination of original and existing algorithms."},
      {n:"9-12.AP.13", t:"Create more generalized computational solutions using collections instead of repeatedly using simple variables."},
      {n:"9-12.AP.14", t:"Justify the selection of specific control structures by identifying tradeoffs associated with implementation, readability, and performance."},
      {n:"9-12.AP.15", t:"Iteratively design and develop computational artifacts for practical intent, personal expression, or to address a societal issue by using events to initiate instructions."},
      {n:"9-12.AP.16", t:"Decompose problems into smaller subproblems through systematic analysis, using constructs such as procedures, modules, and/or classes."},
      {n:"9-12.AP.17", t:"Create computational artifacts using modular design."},
      {n:"9-12.AP.18", t:"Systematically design programs for broad audiences by incorporating feedback from users."},
      {n:"9-12.AP.19", t:"Explain the limitations of licenses that restrict use of computational artifacts when using resources such as libraries."},
      {n:"9-12.AP.20", t:"Iteratively evaluate and refine a computational artifact to enhance its performance, reliability, usability, and accessibility."},
      {n:"9-12.AP.21", t:"Design and develop computational artifacts working in team roles using collaborative tools."},
      {n:"9-12.AP.22", t:"Document decisions made during the design process using text, graphics, presentations, and/or demonstrations in the development of complex programs."}
    ]},
    IC: {desc:"California's eight 9-12 core standards for Impacts of Computing, the ethics wing of the document:", subs:[
      {n:"9-12.IC.23", t:"Evaluate the ways computing impacts personal, ethical, social, economic, and cultural practices."},
      {n:"9-12.IC.24", t:"Identify impacts of bias and equity deficit on design and implementation of computational artifacts and apply appropriate processes for evaluating issues of bias."},
      {n:"9-12.IC.25", t:"Demonstrate ways a given algorithm applies to problems across disciplines."},
      {n:"9-12.IC.26", t:"Study, discuss, and think critically about the potential impacts and implications of emerging technologies on larger social, economic, and political structures, with evidence from credible sources."},
      {n:"9-12.IC.27", t:"Use collaboration tools and methods to increase connectivity with people of different cultures and careers."},
      {n:"9-12.IC.28", t:"Explain the beneficial and harmful effects that intellectual property laws can have on innovation."},
      {n:"9-12.IC.29", t:"Explain the privacy concerns related to the collection and generation of data through automated processes."},
      {n:"9-12.IC.30", t:"Evaluate the social and economic implications of privacy in the context of safety, law, or ethics."}
    ]}
  };

  var CSTA_COVERED = {
    "1.1":"Empathy & active listening",
    "1.2":"Service orientation",
    "2.2":"Talent management",
    "2.3":"Empathy & active listening",
    "6.3":"Resilience & flexibility",
    "9-12.NI.6":"Networks & cybersecurity",
    "9-12.NI.7":"Networks & cybersecurity",
    "9-12.DA.11":"AI & big data",
    "9-12.AP.15":"Creative thinking",
    "9-12.AP.18":"Service orientation",
    "9-12.AP.21":"Leadership & social influence"
  };

  // Everything a match-up view needs, keyed by view name.
  var MATCH_VIEWS = {
    match: {anchors: CTE_ANCHORS, links: CTE_LINKS, details: ANCHOR_DETAILS, covered: COVERED, rightTitle: "CTE anchor standards"},
    csta: {anchors: CSTA_ANCHORS, links: CSTA_LINKS, details: CSTA_DETAILS, covered: CSTA_COVERED, rightTitle: "CS practices &amp; concept strands"}
  };

  var CAPTIONS = {
    now: "<b>AI is not on this list.</b> The skills employers call most essential right now are mostly human ones, ranked by the share of employers naming each a core skill.",
    growing: "<b>Now AI leaps to number one.</b> But the human skills do not fall away. Creativity, resilience, curiosity, and leadership all stay near the top of what is growing fastest.",
    cte: "<b>Most of this list was written into California's standards in 2013.</b> Coverage rates how fully each anchor standard covers the skill. The gaps are honest too: creative thinking is thin, and AI was not yet on anyone's radar.",
    match: "<b>Thirteen employer skills, eleven anchor standards.</b> Solid lines are direct matches, dashed lines partial ones. The one skill with no line, and the one standard nothing points to, tell their own story.",
    csta: "<b>Same thirteen skills, different document.</b> Against California's CS standards, the seven core practices and five concept strands, the gaps flip: AI &amp; big data finds a strong home and creative thinking becomes a whole practice, while motivation, curiosity, and environmental stewardship dangle. Once again, nothing points at the ethics strand."
  };

  var chart = document.getElementById("wsw-chart");
  var caption = document.getElementById("wsw-caption");
  var btns = widget.querySelectorAll(".wsw-btn");

  // Build the rows for a view. When staticWidth is true (print), the final bar
  // width is baked into the markup so it renders without the screen animation.
  // The "cte" and "match" views have no bars; their markup is static.
  function buildRows(view, staticWidth){
    var html = "";
    if(view === "cte"){
      html += '<div class="wsw-row cte wsw-thead">'
        + '<div>Rank</div><div>WEF skill</div><div>CTE anchor standard</div><div>Coverage</div>'
        + '</div>';
      CTE.forEach(function(d){
        html += '<div class="wsw-row cte">'
          + '<div class="wsw-rank">' + (d.rank ? d.rank : "2030") + '</div>'
          + '<div class="wsw-label">' + d.name + ' <i class="dot ' + d.cls + '"></i></div>'
          + '<div class="wsw-std">' + d.std + '</div>'
          + '<div class="wsw-fit ' + d.fit + '">' + d.fit + '</div>'
          + '</div>';
      });
      return html;
    }
    var mcfg = MATCH_VIEWS[view];
    if(mcfg){
      var linked = {};
      mcfg.links.forEach(function(l){ linked[l.s] = true; });
      html += '<div class="wsw-match" id="wsw-match">'
        + '<svg class="wsw-match-svg" preserveAspectRatio="none"></svg>'
        + '<div class="wsw-mcol left"><div class="wsw-mcol-h">WEF skills (2025 &amp; 2030)</div>';
      CTE.forEach(function(d, i){
        html += '<div class="wsw-mitem' + (linked[i] ? '' : ' is-gap') + '" data-skill="' + i + '">'
          + d.name + ' <i class="dot ' + d.cls + '"></i></div>';
      });
      html += '</div><div class="wsw-mcol right"><div class="wsw-mcol-h">' + mcfg.rightTitle + '</div>';
      mcfg.anchors.forEach(function(a){
        html += '<div class="wsw-mitem" data-anchor="' + a.id + '" role="button" tabindex="0" aria-expanded="false">'
          + '<span><span class="wsw-mnum">' + a.disp + '</span>' + a.name + '</span>'
          + '<span class="wsw-minfo" aria-hidden="true">+</span></div>';
      });
      html += '</div></div>'
        + '<p class="wsw-mhint">Hover or tap an item on the right to read its full text and see where the employer skills land.</p>'
        + '<div class="wsw-detail" id="wsw-detail"></div>';
      return html;
    }
    var rows = (view === "now") ? NOW : GROWING;
    var maxNow = 80;
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

  // Detail-panel state: pinned = anchor locked open by click/tap;
  // shownAnchor = anchor currently displayed (pinned or hover).
  var pinned = null;
  var shownAnchor = null;

  // Draw the match-up lines between skill chips and standard chips. Positions
  // come from the rendered layout, so this runs after render and on resize.
  function drawMatchLines(){
    var mcfg = MATCH_VIEWS[currentView];
    var box = document.getElementById("wsw-match");
    if(!mcfg || !box) return;
    var svg = box.querySelector(".wsw-match-svg");
    var br = box.getBoundingClientRect();
    if(br.width === 0) return;
    svg.setAttribute("viewBox", "0 0 " + br.width + " " + br.height);
    var COLORS = {human:"#0E7C86", tech:"#9AA7B2", ai:"#E0A100"};
    var paths = "";
    mcfg.links.forEach(function(l){
      var s = box.querySelector('.wsw-mitem[data-skill="' + l.s + '"]');
      var t = box.querySelector('.wsw-mitem[data-anchor="' + l.a + '"]');
      if(!s || !t) return;
      var sr = s.getBoundingClientRect(), tr = t.getBoundingClientRect();
      var x1 = sr.right - br.left + 2, y1 = sr.top + sr.height / 2 - br.top;
      var x2 = tr.left - br.left - 2, y2 = tr.top + tr.height / 2 - br.top;
      var mx = (x1 + x2) / 2;
      paths += '<path data-a="' + l.a + '" d="M' + x1 + ' ' + y1 + ' C ' + mx + ' ' + y1 + ', ' + mx + ' ' + y2 + ', ' + x2 + ' ' + y2 + '"'
        + ' fill="none" stroke="' + COLORS[CTE[l.s].cls] + '" stroke-width="2"'
        + (l.w === "partial" ? ' stroke-dasharray="5 4" opacity=".7"' : ' opacity=".9"') + '/>';
    });
    svg.innerHTML = paths;
    if(shownAnchor !== null) highlightLines(shownAnchor);
  }

  // Emphasize the lines into one right-side item; null restores all lines.
  function highlightLines(n){
    var box = document.getElementById("wsw-match");
    if(!box) return;
    Array.prototype.forEach.call(box.querySelectorAll(".wsw-match-svg path"), function(p){
      if(n === null){ p.style.opacity = ""; p.style.strokeWidth = ""; }
      else if(p.getAttribute("data-a") === n){ p.style.opacity = "1"; p.style.strokeWidth = "3"; }
      else { p.style.opacity = ".12"; p.style.strokeWidth = ""; }
    });
  }

  function anchorMatches(mcfg, n){
    var out = [];
    mcfg.links.forEach(function(l){
      if(l.a === n) out.push({name: CTE[l.s].name, cls: CTE[l.s].cls, w: l.w});
    });
    return out;
  }

  function showDetail(n, scroll){
    var mcfg = MATCH_VIEWS[currentView];
    var panel = document.getElementById("wsw-detail");
    var box = document.getElementById("wsw-match");
    if(!mcfg || !panel || !box) return;
    var d = mcfg.details[n];
    var a = null;
    mcfg.anchors.forEach(function(x){ if(x.id === n) a = x; });
    if(!d || !a) return;
    var unit = a.unit || "standard";
    var matches = anchorMatches(mcfg, n);
    var strongNames = [];
    matches.forEach(function(m){ if(m.w === "strong") strongNames.push(m.name); });
    var mhtml;
    if(matches.length){
      mhtml = "Matched employer skills: ";
      matches.forEach(function(m){
        mhtml += '<span class="wsw-mtag ' + m.cls + '">' + m.name + ' (' + m.w + ')</span>';
      });
      if(strongNames.length){
        mhtml += '<span class="wsw-mwhole">A strong match means the whole ' + unit + ' is '
          + strongNames.join(" and ") + ": the description and every item below count toward it.</span>";
      }
    } else {
      mhtml = "No skill on the WEF employer list points here.";
    }
    var html = '<h4>' + a.disp + ' ' + a.name + '</h4>'
      + '<p class="wsw-detail-match">' + mhtml + '</p>'
      + '<p class="wsw-detail-desc' + (strongNames.length ? ' is-covered' : '') + '">' + d.desc + '</p>';
    if(d.subs.length){
      html += '<ul>';
      d.subs.forEach(function(s){
        var cov = mcfg.covered[s.n];
        var cls = cov ? ' class="is-covered"' : (strongNames.length ? ' class="is-covered-whole"' : '');
        html += '<li' + cls + '><b>' + s.n + '</b>' + s.t
          + (cov ? '<span class="wsw-covlabel">' + cov + '</span>' : '') + '</li>';
      });
      html += '</ul>';
    }
    panel.innerHTML = html;
    panel.style.display = "block";
    shownAnchor = n;
    highlightLines(n);
    Array.prototype.forEach.call(box.querySelectorAll('.wsw-mitem[data-anchor]'), function(c){
      var active = c.getAttribute("data-anchor") === n;
      c.classList.toggle("is-active", active);
      c.setAttribute("aria-expanded", active ? "true" : "false");
      var icon = c.querySelector(".wsw-minfo");
      if(icon) icon.textContent = (active && pinned === n) ? "×" : "+";
    });
    if(scroll) panel.scrollIntoView({behavior:"smooth", block:"nearest"});
  }

  function hideDetail(){
    var panel = document.getElementById("wsw-detail");
    if(panel) panel.style.display = "none";
    shownAnchor = null;
    highlightLines(null);
    var box = document.getElementById("wsw-match");
    if(!box) return;
    Array.prototype.forEach.call(box.querySelectorAll('.wsw-mitem[data-anchor]'), function(c){
      c.classList.remove("is-active");
      c.setAttribute("aria-expanded", "false");
      var icon = c.querySelector(".wsw-minfo");
      if(icon) icon.textContent = "+";
    });
  }

  // Hover previews a standard; click/tap pins it open (tap again to close).
  // The hover preview intentionally lingers so the panel below stays readable
  // while the mouse travels to it.
  widget.addEventListener("mouseover", function(e){
    if(pinned !== null) return;
    var chip = e.target.closest(".wsw-mitem[data-anchor]");
    if(chip) showDetail(chip.getAttribute("data-anchor"), false);
  });
  widget.addEventListener("click", function(e){
    var chip = e.target.closest(".wsw-mitem[data-anchor]");
    if(!chip) return;
    var n = chip.getAttribute("data-anchor");
    if(pinned === n){ pinned = null; hideDetail(); }
    else { pinned = n; showDetail(n, true); }
  });
  widget.addEventListener("keydown", function(e){
    if(e.key !== "Enter" && e.key !== " ") return;
    var chip = e.target.closest ? e.target.closest(".wsw-mitem[data-anchor]") : null;
    if(!chip) return;
    e.preventDefault();
    chip.click();
  });

  var currentView = "now";

  function render(view){
    currentView = view;
    pinned = null;
    shownAnchor = null;
    chart.innerHTML = buildRows(view, false);
    caption.innerHTML = CAPTIONS[view];
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        chart.querySelectorAll(".wsw-bar").forEach(function(b){
          b.style.width = b.getAttribute("data-w") + "%";
        });
        drawMatchLines();
      });
    });
  }

  window.addEventListener("resize", function(){
    if(MATCH_VIEWS[currentView]) drawMatchLines();
  });
  // Redraw once everything has loaded, in case late layout shifts moved the chips.
  window.addEventListener("load", function(){
    if(MATCH_VIEWS[currentView]) drawMatchLines();
  });

  // Populate the print-only blocks once. The match-up view is screen-only:
  // its lines are measured from a live layout, which hidden print blocks lack.
  function fillPrint(id, view){
    var block = document.getElementById(id);
    if(!block) return;
    block.querySelector(".wsw-chart").innerHTML = buildRows(view, true);
    block.querySelector(".wsw-print-caption").innerHTML = CAPTIONS[view];
  }
  fillPrint("wsw-print-now", "now");
  fillPrint("wsw-print-growing", "growing");
  fillPrint("wsw-print-cte", "cte");

  btns.forEach(function(btn){
    btn.addEventListener("click", function(){
      btns.forEach(function(b){ b.classList.remove("is-active"); b.setAttribute("aria-selected","false"); });
      btn.classList.add("is-active"); btn.setAttribute("aria-selected","true");
      render(btn.getAttribute("data-view"));
    });
  });

  // Links with class "wsw-jump" flip the widget to a view and scroll to it.
  document.addEventListener("click", function(e){
    var link = e.target.closest(".wsw-jump");
    if(!link) return;
    e.preventDefault();
    var view = link.getAttribute("data-view") || "match";
    var targetBtn = widget.querySelector('.wsw-btn[data-view="' + view + '"]');
    if(targetBtn) targetBtn.click();
    widget.scrollIntoView({behavior:"smooth", block:"center"});
  });

  render("match");

  // Deep-link support: #wef-skills-now / #wef-skills-growing / #wef-skills-cte
  // switch the widget to the right view on page load.
  var hashViews = {"#wef-skills-now":"now", "#wef-skills-growing":"growing", "#wef-skills-cte":"cte", "#wef-skills-match":"match", "#wef-skills-csta":"csta"};
  var view = hashViews[window.location.hash];
  if (view) {
    var btn = widget.querySelector('.wsw-btn[data-view="' + view + '"]');
    if (btn) btn.click();
  }
})();
</script>
{% endraw %}

*Part 2 of a series. [Part 1](/2026/06/19/optimizing-for-wrong-skills.html) argued that a generation of content-mastery optimization squeezed out many of the skills employers actually want. This piece points out that in 2013 California did put many of these skills into CTE (Career Technical Education) Anchor Standards.*

## What is an anchor standard?

California organizes career technical education into fifteen industry sectors: health science, construction, agriculture, and the one my courses live in, Information and Communication Technologies (ICT). Each sector defines pathway standards for its trade-specific skills. Underneath all of them, though, sit the same eleven **anchor standards**, adopted with the [CTE Model Curriculum Standards](https://www.cde.ca.gov/ci/ct/sf/ctemcstandards.asp) in 2013: the things California says every CTE student should learn no matter which sector they chose. Communicate. Plan a career. Solve problems. Take responsibility. Act ethically. Lead a team. And then Standard 11, the quiet radical of the group: demonstrate all of it through work-based learning and a portfolio of real work. That is project-based learning in all but name, written into a state document.

The chart above matches those eleven anchors against the skills more than a thousand employers told the World Economic Forum they need most, the same data Part 1 was built on. Hover or tap any standard to read the state's own words.

The second match-up uses a different document: California's [computer science standards](https://www.cde.ca.gov/be/st/ss/documents/csstandards.pdf), adopted in 2018 and adapted from the CSTA K-12 standards, the Computer Science Teachers Association framework that most states build their CS standards on. That document has two layers. The content standards are grouped into five concept strands, from Computing Systems to Impacts of Computing. Attached to every one of them are seven **core practices**, the ways students are expected to work: collaborating, communicating, creating, testing and refining. The practices are where the soft skills live, and the CSTA Match-up tab maps the employer list against both layers.

## The quiet irony

Part 1 ended in a challenge: we built school around what a test can see, and the skills employers now value most are the ones a test can't. The natural next demand would be new standards. Here is the surprise. California doesn't need them. The skills are already written down, and have been for over a decade.

What makes this odd rather than triumphant is that no statewide assessment looks at the anchor standards. I want to be careful with that observation, because it is not a scandal and there is no villain in it. Assessing collaboration or resilience fairly, at scale, across millions of students is genuinely hard; nobody anywhere has fully cracked it. The accountability system concentrates on what it can measure well and defensibly, and that is a reasonable engineering choice. But the choice has a side effect worth naming.

## Unmeasured, and better for it

The side effect cuts both ways, and the first way is good. Because no high-stakes test ever touched the anchor standards, they never went through the narrowing that reshaped reading and math instruction. Nobody ever had to reduce "participate in interactive teamwork to solve real sector issues" to something a bubble sheet could see, so it still describes the whole capacity instead of a proxy for it. The standards stayed honest because nobody was optimizing them.

The other way is the honest cost. A standard without an assessment depends entirely on the program that delivers it. In a strong CTE classroom the anchor standards are the daily weather: teams, deadlines, documentation, demonstrations. In a weaker one they are a poster on the wall. Both classrooms report the same course code. That variance is real, and pretending otherwise would oversell the good news.

## The CS standards carry the technical half

CTE is not the only place California wrote the employer list down. The state's [computer science standards](https://www.cde.ca.gov/be/st/ss/documents/csstandards.pdf), adopted in 2018 and built on the CSTA K-12 framework, split the job differently, and they cover almost exactly the ground the CTE anchors leave open.

The technical end first. **AI and big data**, the one skill with no line in the chart above, has a real home here: the high school core devotes four standards to Data and Analysis (9-12.DA.8-11), and the specialty tier names artificial intelligence outright (9-12S.AP.10: "Describe how artificial intelligence drives many software and physical systems"). **Networks and cybersecurity** gets four more (9-12.NI.4-7). **Technological literacy** is, arguably, all thirty standards in the core.

The soft skills are in there too, but they live in a different layer. Every standard is tagged with one or more of seven **core practices**, and at least four of the seven are employer-list skills wearing computer science clothes:

- **Collaborating Around Computing**: teamwork, including working in roles on a shared artifact.
- **Communicating About Computing**: explaining your work to audiences who did not build it.
- **Fostering an Inclusive Computing Culture**: empathy in design, building for people unlike yourself.
- **Creating Computational Artifacts**: creative thinking, which the CTE anchors cover only thinly.
- (**Testing and Refining** is at least a cousin of resilience: iterate, debug, try again.)

Put the two documents side by side (the CSTA Match-up tab in the chart above draws this second mapping) and the complementarity is striking. The CTE anchors name the human skills and miss AI; the CS standards name AI and the technical skills and carry the human ones as practices rather than headline outcomes. Neither document alone covers the employer list. The union covers all thirteen. I've seen this from the CS side already: my [*Little Brother* unit](/2026/06/14/little-brother.html) maps a novel onto the Impacts of Computing and Networking strands, eight and four standards respectively, over a third of the core reached through a story.

And the documents are not frozen. CSTA is revising its standards now, with the next version expected in 2027, and the [current draft](https://csteachers.org/wp-content/uploads/2025/12/Revised-CSTA-PK-12-Standards-Draft-3.0.pdf) reads like it was written with this chart open. "AI is Part of CS" is a named priority, backed by a full artificial intelligence specialty strand. Ethics and inclusive collaboration are elevated to pillars that organize everything else. And a new category called **dispositions** names seven habits of mind the current standards leave implicit: creativity, sense of belonging, critical thinking, persistence, reflectiveness, resourcefulness, and curiosity. Two of the three skills dangling in the CSTA match-up above, motivation and curiosity, appear there as reflectiveness and curiosity, and the third, environmental stewardship, surfaces in the AI priority itself, which asks students to weigh the environmental costs of AI systems. The draft even includes a section on how its specialty standards relate to CTE. Standard by standard, revision by revision, the documents are converging on the employer list.

One more detail worth a smile: both documents insist on ethics. CTE anchor 8.0 and the CS core's eight Impacts of Computing standards (9-12.IC.23-30) are the two largest blocks of "soft" content in either document, and ethics appears nowhere on the employer survey at all. The standards writers put it there anyway. Good.

## The elective wing

Part 1 named a deeper inequity: the students who pay the highest price for a content-only curriculum are the ones who don't pick up the human skills at home, or in some other opt-in program. Here is the uncomfortable observation this piece adds. CTE is the opt-in program. So is the CS pathway. The state wrote the other half of school down, then filed nearly all of it in the elective wing. A student is guaranteed the anchor standards only if they choose a pathway, and only if their school offers a strong one. I don't say that to diminish the elective wing; it is where I teach, and it is where this work is furthest along. I say it because the skills are too important to stay there.

## Existence proof, with honest caveats

Am I giving two stacks of paper too much credit? Partly, and it is worth saying exactly where. The anchor standards are aspirational, and identical across all fifteen sectors. They are 2013 vintage, and the AI gap in the chart is proof that nobody sees thirteen years ahead. Standards on a page are not standards in a classroom, and program quality varies enormously. All true.

But the existence proof stands, and it is the point of this piece. The State Board of Education has already adopted teamwork, flexibility, problem solving, creative work, communication, and portfolio-based demonstration as real, teachable outcomes, twice, in two different documents. When someone says soft skills are too fuzzy to be standards, there are two California state documents that say otherwise. The question was never whether these skills belong in school. The state settled that years ago. The question is how to see them without flattening them.

## What it would take (bridge to Part 3)

The ask is not new standards. It is new evidence: ways of seeing these skills that don't kill them in the measuring. How do you grade teamwork without turning it into a rubric performance? How do you verify understanding in the age of AI without a bubble sheet? These are genuinely hard problems, which is exactly why they deserve better than a shrug.

Industry has spent decades building lightweight ways to see this kind of work: demos, reviews, decision records, retrospectives. They translate to a classroom better than you'd think. That is [Part 3](/2026/07/08/run-the-classroom-like-a-studio.html).

---

*All opinions are my own. Feedback and collaboration welcome. -- Eric Brown*

**References**

- California Department of Education, [CTE Model Curriculum Standards](https://www.cde.ca.gov/ci/ct/sf/ctemcstandards.asp) (adopted 2013).
- [Information and Communication Technologies sector standards](https://www.cde.ca.gov/ci/ct/sf/documents/infocomtech.pdf) (PDF), including the knowledge and performance anchor standards quoted above.
- California Department of Education, [Computer Science Standards for California Public Schools](https://www.cde.ca.gov/be/st/ss/documents/csstandards.pdf) (PDF, adopted 2018); individual standards browsable at the [CDE standards site](https://www2.cde.ca.gov/cacs/cs).
- Computer Science Teachers Association, [CSTA K-12 Computer Science Standards](https://csteachers.org/k12standards/) (revised 2017), including the seven core practices.
- Computer Science Teachers Association, [Revised PK-12 Computer Science Standards: Draft 3.0](https://csteachers.org/wp-content/uploads/2025/12/Revised-CSTA-PK-12-Standards-Draft-3.0.pdf) (December 2025), the in-progress revision with the AI strand, pillars, and dispositions.
- World Economic Forum, [Future of Jobs Report 2025](https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf) (Figs. 3.3 and 3.4).
