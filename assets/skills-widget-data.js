/*
 * skills-widget-data.js — the WEF "Skills <-> Standards" dataset.
 *
 * Static, reusable content for the skills-widget engine: the two WEF skill
 * lists, the shared skill/standard mapping, and the CTE / CSTA / CSTA 3.0
 * match-up data, plus a canonical set of captions. Loaded after
 * skills-widget.js; registers itself as the "wef-skills" dataset so posts can
 * pull it in with { dataset: "wef-skills" } instead of carrying the data
 * inline. Posts may override individual captions in their init() call.
 */
(function (SW) {
  "use strict";
  if (!SW || !SW.registerDataset) return;

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
    {id:"1", disp:"1.0", name:"Academics", cls:"tech"},
    {id:"2", disp:"2.0", name:"Communications", cls:"human"},
    {id:"3", disp:"3.0", name:"Career Planning &amp; Management", cls:"human"},
    {id:"4", disp:"4.0", name:"Technology", cls:"tech"},
    {id:"5", disp:"5.0", name:"Problem Solving &amp; Critical Thinking", cls:"tech"},
    {id:"6", disp:"6.0", name:"Health &amp; Safety", cls:"tech"},
    {id:"7", disp:"7.0", name:"Responsibility &amp; Flexibility", cls:"human"},
    {id:"8", disp:"8.0", name:"Ethics &amp; Legal Responsibilities", cls:"human"},
    {id:"9", disp:"9.0", name:"Leadership &amp; Teamwork", cls:"human"},
    {id:"10", disp:"10.0", name:"Technical Knowledge &amp; Skills", cls:"tech"},
    {id:"11", disp:"11.0", name:"Demonstration &amp; Application", cls:"human"}
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
    {id:"P1", disp:"P1", name:"Fostering an Inclusive Computing Culture", unit:"practice", cls:"human"},
    {id:"P2", disp:"P2", name:"Collaborating Around Computing", unit:"practice", cls:"human"},
    {id:"P3", disp:"P3", name:"Recognizing &amp; Defining Computational Problems", unit:"practice", cls:"tech"},
    {id:"P4", disp:"P4", name:"Developing &amp; Using Abstractions", unit:"practice", cls:"tech"},
    {id:"P5", disp:"P5", name:"Creating Computational Artifacts", unit:"practice", cls:"human"},
    {id:"P6", disp:"P6", name:"Testing &amp; Refining Computational Artifacts", unit:"practice", cls:"tech"},
    {id:"P7", disp:"P7", name:"Communicating About Computing", unit:"practice", cls:"human"},
    {id:"CS", disp:"CS", name:"Computing Systems", unit:"strand", cls:"tech"},
    {id:"NI", disp:"NI", name:"Networks &amp; the Internet", unit:"strand", cls:"tech"},
    {id:"DA", disp:"DA", name:"Data &amp; Analysis", unit:"strand", cls:"ai"},
    {id:"AP", disp:"AP", name:"Algorithms &amp; Programming", unit:"strand", cls:"tech"},
    {id:"IC", disp:"IC", name:"Impacts of Computing", unit:"strand", cls:"human"}
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

  // The CSTA 3.0 draft (Dec 2025, final expected as soon as 2026): four
  // pillars of practices, seven dispositions, five concepts. All text quoted
  // from the draft; a draft is subject to change. Ordered to minimize line
  // crossings against the WEF skill list.
  var CSTA3_ANCHORS = [
    {id:"CT", disp:"Pillar", name:"Computational Thinking", unit:"pillar", cls:"tech"},
    {id:"D3", disp:"Disp.", name:"Critical Thinking", unit:"disposition", cls:"tech"},
    {id:"D4", disp:"Disp.", name:"Persistence", unit:"disposition", cls:"human"},
    {id:"INC", disp:"Pillar", name:"Inclusive Collaboration", unit:"pillar", cls:"human"},
    {id:"D1", disp:"Disp.", name:"Creativity", unit:"disposition", cls:"human"},
    {id:"D5", disp:"Disp.", name:"Reflectiveness", unit:"disposition", cls:"human"},
    {id:"D2", disp:"Disp.", name:"Sense of Belonging", unit:"disposition", cls:"human"},
    {id:"PR", disp:"Concept", name:"Programming", unit:"concept", cls:"tech"},
    {id:"HCD", disp:"Pillar", name:"Human-Centered Design", unit:"pillar", cls:"human"},
    {id:"D7", disp:"Disp.", name:"Curiosity", unit:"disposition", cls:"human"},
    {id:"D6", disp:"Disp.", name:"Resourcefulness", unit:"disposition", cls:"human"},
    {id:"AD", disp:"Concept", name:"Algorithms &amp; Design", unit:"concept", cls:"tech"},
    {id:"DA3", disp:"Concept", name:"Data &amp; Analysis", unit:"concept", cls:"ai"},
    {id:"SS", disp:"Concept", name:"Systems &amp; Security", unit:"concept", cls:"tech"},
    {id:"ETH", disp:"Pillar", name:"Ethics &amp; Social Responsibility", unit:"pillar", cls:"human"},
    {id:"CSoc", disp:"Concept", name:"Computing &amp; Society", unit:"concept", cls:"human"}
  ];

  // Every WEF skill has a line against the 3.0 draft; the only chip nothing
  // points to is Computing & Society.
  var CSTA3_LINKS = [
    {s:0, a:"CT", w:"strong"}, {s:0, a:"D3", w:"strong"},
    {s:1, a:"D4", w:"strong"},
    {s:2, a:"INC", w:"partial"},
    {s:3, a:"D1", w:"strong"},
    {s:4, a:"D5", w:"strong"}, {s:4, a:"D2", w:"partial"},
    {s:5, a:"PR", w:"strong"}, {s:5, a:"SS", w:"strong"},
    {s:6, a:"HCD", w:"strong"}, {s:6, a:"INC", w:"partial"},
    {s:7, a:"D7", w:"strong"}, {s:7, a:"D6", w:"partial"},
    {s:8, a:"INC", w:"partial"},
    {s:9, a:"HCD", w:"strong"},
    {s:10, a:"DA3", w:"strong"}, {s:10, a:"AD", w:"strong"}, {s:10, a:"PR", w:"partial"},
    {s:11, a:"SS", w:"strong"},
    {s:12, a:"ETH", w:"partial"}
  ];

  var DISP_NOTE = " One of seven dispositions in the CSTA 3.0 draft: habits of mind that shape how students think, persist, collaborate, and reflect, beyond what they can code or recall.";
  var CSTA3_DETAILS = {
    CT: {desc:"One of four pillars of practices in the CSTA 3.0 draft: a way of thinking about problems and formulating problems and solutions so that an information-processing agent can help to solve them. The engineering design process is embedded within this pillar.", subs:[
      {n:"6", t:"Define computational problems."},
      {n:"6.a", t:"Identify real-world problems that can be solved computationally using rule-based approaches, data-driven approaches (e.g., machine learning), or hybrid methods."},
      {n:"6.b", t:"Clearly state criteria for success and identify constraints."},
      {n:"6.c", t:"Decompose complex problems into manageable subproblems."},
      {n:"7", t:"Develop and use abstractions."},
      {n:"7.a", t:"Extract common features and patterns from data, processes, or phenomena to create general methods and algorithms."},
      {n:"7.b", t:"Create reusable modules and procedures that can apply to multiple situations to reduce complexity."},
      {n:"7.c", t:"Model phenomena and develop simulations, using rule-based and data-driven approaches, to understand and evaluate potential outcomes."},
      {n:"8", t:"Create computational artifacts."},
      {n:"8.a", t:"Generate and evaluate multiple solution approaches to determine which best meet the defined criteria given the constraints."},
      {n:"8.b", t:"Plan the development of computational solutions."},
      {n:"8.c", t:"Implement solutions by developing or modifying artifacts through traditional programming, model training, or hybrid methods."},
      {n:"9", t:"Test and refine computational artifacts."},
      {n:"9.a", t:"Test, debug, and troubleshoot computational artifacts systematically using appropriate methods, such as generating test cases for rule-based programs and accuracy evaluation for machine learning models."},
      {n:"9.b", t:"Iteratively refine and optimize solutions to meet criteria for success."}
    ]},
    INC: {desc:"One of four pillars of practices in the CSTA 3.0 draft: productive collaborations with diverse groups of people, addressing communication skills, project management skills, and personal conduct when working with others.", subs:[
      {n:"3", t:"Communicate effectively about computing."},
      {n:"3.a", t:"Share technical ideas and explain computing concepts clearly to different audiences."},
      {n:"3.b", t:"Give and actively listen to others' input and constructive feedback. Consider diverse perspectives and multiple solutions to technical challenges."},
      {n:"4", t:"Manage computing projects."},
      {n:"4.a", t:"Establish shared goals, break the work into discrete tasks, and set development milestones."},
      {n:"4.b", t:"Document code and development processes."},
      {n:"5", t:"Act responsibly in computing collaborations."},
      {n:"5.a", t:"Cultivate working relationships with individuals possessing diverse perspectives, skills, and personalities."},
      {n:"5.b", t:"Participate reliably in computing teamwork, share responsibility for project outcomes, and meet development deadlines."},
      {n:"5.c", t:"Reflect on contributions to computing projects, including technical decisions and team interactions, to improve technical and collaboration skills."}
    ]},
    HCD: {desc:"One of four pillars of practices in the CSTA 3.0 draft: responsibly creating computational solutions through human-centered design, including principles of human-computer interaction.", subs:[
      {n:"10", t:"Understand and involve diverse users in design decisions."},
      {n:"10.a", t:"Learn about different people's experiences with computing technologies, including those with different abilities, backgrounds, and needs."},
      {n:"10.b", t:"Gather input and feedback from diverse users throughout the design and development process to help create positive user experiences."},
      {n:"11", t:"Use iterative design processes."},
      {n:"11.a", t:"Start with simple prototypes and continuously test and refine solutions to ensure usability and accessibility."},
      {n:"12", t:"Design computational technologies that empower and inform users."},
      {n:"12.a", t:"Respect users' autonomy. Be transparent about how computational technologies make decisions that affect users. Give users control over how they interact with technologies rather than leveraging human limitations to serve creators' interests over users' interests."},
      {n:"12.b", t:"Consider the benefits and harms of human-like behaviors in computational technologies (e.g., conversational AI) and how they influence user perceptions and actions."}
    ]},
    ETH: {desc:"One of four pillars of practices in the CSTA 3.0 draft: habits that help students become responsible creators of technology, based on the ACM's general ethical principles.", subs:[
      {n:"1", t:"Use computing for positive social impact."},
      {n:"1.a", t:"Imagine and create computing technologies that solve problems, strengthen communities, and improve quality of life."},
      {n:"1.b", t:"Evaluate whether potential benefits of computing solutions outweigh possible harms. Ensure that harms are not concentrated on specific groups and avoid serious environmental harm."},
      {n:"1.c", t:"Explain design trade-offs in computing projects, including what values these decisions reflect and what was prioritized or sacrificed."},
      {n:"2", t:"Respect others' rights when creating computational technologies."},
      {n:"2.a", t:"Respect other creators of computational technologies. Only use others' work with permission and give appropriate attribution."},
      {n:"2.b", t:"Respect users' privacy and protect their data. Give users choices about how their information is collected and used. Only collect the minimum amount of information necessary."}
    ]},
    D1: {desc:"\"Creativity: Generating original, meaningful computing ideas and projects.\"" + DISP_NOTE, subs:[]},
    D2: {desc:"\"Sense of Belonging: Feeling included, respected, and recognized in the CS community.\"" + DISP_NOTE, subs:[]},
    D3: {desc:"\"Critical Thinking: Using reasoning and evidence to analyze and refine solutions.\"" + DISP_NOTE, subs:[]},
    D4: {desc:"\"Persistence: Continuing effort despite frustration or setbacks.\"" + DISP_NOTE, subs:[]},
    D5: {desc:"\"Reflectiveness: Connecting past experiences to future learning choices.\"" + DISP_NOTE, subs:[]},
    D6: {desc:"\"Resourcefulness: Strategically seeking tools, people, and references to solve problems.\"" + DISP_NOTE, subs:[]},
    D7: {desc:"\"Curiosity: Asking questions and exploring beyond assigned work.\"" + DISP_NOTE, subs:[]},
    AD: {desc:"One of five concepts in the CSTA 3.0 draft. An algorithm is a sequence of steps designed to accomplish a specific task. Students learn the development, combination, and decomposition of algorithms, the evaluation of competing algorithms, and the difference between traditional algorithms and artificial intelligence/machine learning (AI/ML) algorithms. Subconcepts, summarized from the draft:", subs:[
      {n:"Algorithm Fundamentals", t:"Designing algorithms, step-by-step solutions to a task, with complexity and visual representation growing across grades."},
      {n:"Problem Solving", t:"Optimizing algorithms for efficiency and accuracy; exploring algorithms' underlying opaque systems."},
      {n:"Machine Learning", t:"Students train AI models for classification or prediction, analyze how training data shapes model output, and by high school justify the selection of AI algorithms and develop AI models for specific tasks. Sample standards: E4-ALG-02 \"Train an AI model to make a classification or prediction\" (elementary); HS-ALG-04 \"Evaluate AI-generated output to assess bias, accuracy, and potential harms.\""},
      {n:"Impacts of Algorithms and Design", t:"Who an algorithm benefits, who it may unintentionally harm, and why; fairness, equity, accessibility, and bias."}
    ]},
    PR: {desc:"One of five concepts in the CSTA 3.0 draft. Programming controls all computing systems, empowering people to communicate with the world in new ways and solve compelling problems. Societal and ethical impacts are woven throughout its subconcepts, summarized from the draft:", subs:[
      {n:"Programming Fundamentals", t:"Reading and interpreting code, translating algorithms into code, and understanding programming languages' types, syntax, and semantics."},
      {n:"Program Development", t:"Building on existing code, modularizing code, documenting code, and using AI tools to support programming."},
      {n:"Reading and Documenting Code", t:"\"In a world where AI assistants can generate code based on a prompt, the ability to read and interpret code is increasingly important.\" Students evaluate AI-generated code for accuracy, reliability, and usability (HS-PRO-17)."},
      {n:"Testing and Refining Code", t:"Troubleshooting strategies, optimizing code for efficiency and usability, and assessing the accuracy and bias of AI-generated code."},
      {n:"Data Handling", t:"How programs structure and store data; identifying, labeling, and manipulating data types."}
    ]},
    DA3: {desc:"One of five concepts in the CSTA 3.0 draft. Computers collect and store data so it can be analyzed to better understand the world and make more accurate predictions. The draft also adds a full Artificial Intelligence specialty strand for high school. Subconcepts, summarized from the draft:", subs:[
      {n:"Data Fundamentals", t:"Types of data, how data is generated, collected, and organized; metadata and data documentation."},
      {n:"Data Processing", t:"Filtering, grouping, summarizing, transforming, and reshaping data; automating data cleaning and preparing data for analysis."},
      {n:"Data Investigation", t:"Posing data questions, analyzing with computational tools, creating visualizations, and telling the story of the data."},
      {n:"Impacts of Data Science", t:"Bias in data, data privacy, artificial intelligence and machine learning, and large-scale societal and environmental impacts of data science applications."}
    ]},
    SS: {desc:"One of five concepts in the CSTA 3.0 draft: the broad categories of hardware and software, networks, and cybersecurity. A Cybersecurity specialty strand goes deeper for high school. Subconcepts, summarized from the draft:", subs:[
      {n:"Hardware and Software", t:"How systems represent and process information; interactions between hardware and software at multiple levels."},
      {n:"Security", t:"Protecting personal information, information transmission across devices, network design, and protecting networks from different types of threats."},
      {n:"Networks", t:"How information is sent and received across different types of networks."},
      {n:"Impacts of Computing Systems", t:"The benefits, harms, and new problems computing systems create, from individuals to global society."}
    ]},
    CSoc: {desc:"One of five concepts in the CSTA 3.0 draft. Computing shapes, and is shaped by, individuals, communities, and cultures around the world. Students learn to critically and responsibly navigate these social implications, considering issues of equity, access, and accountability. Subconcepts, summarized from the draft:", subs:[
      {n:"History of Computing", t:"How technologies evolved in response to social, scientific, and economic needs; policy and legislation; disparities across communities."},
      {n:"Emerging Technologies", t:"Recently developed technologies with the potential to significantly impact society; their core computational principles and ethical considerations."},
      {n:"Humans and Computing", t:"Deciding when and where computing technologies, including AI, are appropriate and helpful; the trade-offs of AI-powered solutions; how human choices in designing, deploying, and regulating AI influence its outcomes."}
    ]}
  };

  var CSTA3_COVERED = {
    "Machine Learning":"AI & big data",
    "Reading and Documenting Code":"AI & big data",
    "Impacts of Data Science":"AI & big data",
    "Security":"Networks & cybersecurity",
    "Networks":"Networks & cybersecurity",
    "3.b":"Empathy & active listening",
    "4":"Leadership & social influence",
    "4.a":"Talent management",
    "5.b":"Leadership & social influence",
    "1.b":"Environmental stewardship",
    "10.a":"Empathy & active listening",
    "10.b":"Service orientation",
    "12.a":"Service orientation",
    "6.a":"AI & big data",
    "8.c":"AI & big data"
  };

  // Everything a match-up view needs, keyed by view name.
  var MATCH_VIEWS = {
    match: {anchors: CTE_ANCHORS, links: CTE_LINKS, details: ANCHOR_DETAILS, covered: COVERED, rightTitle: "CTE anchor standards"},
    csta: {anchors: CSTA_ANCHORS, links: CSTA_LINKS, details: CSTA_DETAILS, covered: CSTA_COVERED, rightTitle: "CS practices &amp; concept strands"},
    csta3: {anchors: CSTA3_ANCHORS, links: CSTA3_LINKS, details: CSTA3_DETAILS, covered: CSTA3_COVERED, rightTitle: "CSTA 3.0 draft (2026)"}
  };

  var CAPTIONS = {
    now: "<b>AI is not on this list.</b> The skills employers call most essential right now are mostly human ones, ranked by the share of employers naming each a core skill.",
    growing: "<b>Now AI leaps to number one.</b> But the human skills do not fall away. Creativity, resilience, curiosity, and leadership all stay near the top of what is growing fastest.",
    cte: "<b>Most of this list was written into California's standards in 2013.</b> Coverage rates how fully each anchor standard covers the skill. The gaps are honest too: creative thinking is thin, and AI was not yet on anyone's radar.",
    match: "<b>Thirteen employer skills, eleven anchor standards.</b> Solid lines are direct matches, dashed lines partial ones. The one skill with no line, and the one standard nothing points to, tell their own story.",
    csta: "<b>Same thirteen skills, different document.</b> Against California's CS standards, the seven core practices and five concept strands, the gaps flip: AI &amp; big data finds a strong home and creative thinking becomes a whole practice, while motivation, curiosity, and environmental stewardship dangle. Once again, nothing points at the ethics strand.",
    csta3: "<b>Every skill now has a line.</b> Mapped against the CSTA 3.0 draft, the revision expected as soon as 2026, the last gaps close: persistence, curiosity, and reflectiveness arrive as named dispositions, environmental harm enters the ethics pillar, and AI runs through four of the five concepts, elementary school onward. The one thing no employer skill points at, once again, is the ethics-and-society side. The standards writers keep it anyway."
  };

  SW.registerDataset("wef-skills", {
    percentMax: 80,
    bars: { now: NOW, growing: GROWING },
    skills: CTE,
    matchViews: MATCH_VIEWS,
    captions: CAPTIONS
  });
})(window.SkillsWidget);
