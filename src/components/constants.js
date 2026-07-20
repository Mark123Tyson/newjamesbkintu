// ── COLOUR PALETTE ──
export const C = {
  ink:        "#0f172a",
  inkMid:     "#334155",
  inkLight:   "#64748b",
  paper:      "#f8fafc",
  cream:      "#f1f5f9",
  navy:       "#003366",
  navyMid:    "#1e3a5f",
  navyLight:  "#2563eb",
  blue:       "#1d4ed8",
  blueMid:    "#3b82f6",
  blueLight:  "#bfdbfe",
  red:        "#dc2626",
  redMid:     "#ef4444",
  redLight:   "#fee2e2",
  teal:       "#0d9488",
  tealLight:  "#a3eee0",
  white:      "#ffffff",
  gold:       "#f59e0b",
  goldLight:  "#fde68a",
};

// ── NAV LINKS ──
export const navLinks = [
  { label: "Home",         href: "#home"         },
  { label: "About",        href: "#about"        },
  { label: "Experience",   href: "#experience"   },
  { label: "Research",     href: "#research"     },
  { label: "Publications", href: "#publications" },
  { label: "Contact",      href: "#contact"      },
];

// ── HERO STATS ──
export const stats = [
  { num: "20+", label: "Years in public service & governance",         icon: "🏛️", accent: C.blueMid },
  { num: "PhD", label: "Global Governance & Human Security — UMass Boston, 2026", icon: "🎓", accent: C.gold   },
  { num: "$10M+", label: "Donor-funded budgets managed with zero audit discrepancies", icon: "🌍", accent: C.red },
];

// ── EXPERTISE CARDS ──
export const expertise = [
  {
    icon: "🌱",
    title: "Climate Change Governance",
    accent: C.teal,
    desc: "Policy frameworks for climate resilience in East Africa — stakeholder-led adaptation, cross-sector collaboration, early warning systems, and EAC/AU regional alignment.",
  },
  {
    icon: "♀️",
    title: "Gender & Food Security",
    accent: C.red,
    desc: "Gender-inclusive approaches to strengthen food systems and economic empowerment for rural women and youth, aligned with SDGs 1, 2, 5, and 13.",
  },
  {
    icon: "📋",
    title: "Public Administration",
    accent: C.navyLight,
    desc: "Strategic policy design, results-based management, and institutional reform across Uganda's central and local government structures.",
  },
  {
    icon: "🔬",
    title: "Research & Academia",
    accent: C.blueMid,
    desc: "Doctoral research on Busoga climate-food governance (PhD, UMass Boston, 2026). Curricula development, graduate supervision, and publication of policy briefs for EAC and UN forums.",
  },
  {
    icon: "🤝",
    title: "International Development",
    accent: C.gold,
    desc: "UN-funded programs, World Bank and AfDB consultancies. Multi-million-dollar reforms in health equity, youth empowerment, and sustainable development.",
  },
  {
    icon: "📊",
    title: "Monitoring & Evaluation",
    accent: C.teal,
    desc: "Robust M&E frameworks for climate and food security initiatives. Data-driven governance promoting accountability in public and donor-funded programs.",
  },
];

// ── CAREER TIMELINE ──
export const timeline = [
  {
    period: "2022 — Present",
    role: "Associate Consultant / Lecturer",
    org: "Uganda Management Institute · School of Civil Service, Public Administration and Governance",
    desc: "Developing e-learning curricula on public policy and governance for 1,000+ students. Mentoring 200+ youth and women entrepreneurs. Supporting EAC and UN policy briefs shaping regional climate strategies. Co-opted Secretariat Member, UAPAM.",
    dot: C.teal,
  },
  {
    period: "2022 — 2026",
    role: "Doctoral Researcher / Teaching & Research Assistant",
    org: "University of Massachusetts Boston, USA",
    desc: "Completed PhD in Global Governance and Human Security (conferred May 2026). Led Busoga climate-food governance research drawing on 27 key informant interviews, four focus groups, and 64 policy documents. Recipient of the 2026 Ubuntu Recognition Award and Ubuntu African Scholars Student Research Award.",
    dot: C.blueMid,
  },
  {
    period: "2016 — 2022",
    role: "Undersecretary",
    org: "Ministries of Foreign Affairs & Local Government, Uganda",
    desc: "Directed MATIP II, USMID, and PRELNOR projects enhancing infrastructure for 500,000+ beneficiaries. Supported RMNCAHN-G health equity plans increasing access for 100,000+ rural women. Trained 300+ officials in results-based management.",
    dot: C.navyLight,
  },
  {
    period: "Jan — Jun 2016",
    role: "Deputy Head, Programme Management Unit — Expanding Social Protection (ESP II)",
    org: "Ministry of Gender, Labour & Social Development, Uganda",
    desc: "Coordinated daily implementation of the ESP II program. Led capacity building, coaching, and supervision of multi-disciplinary teams. Coordinated media for national campaigns and authored high-level briefs for parliament and donors.",
    dot: C.red,
  },
  {
    period: "2013 — 2016",
    role: "Undersecretary & Senior Private Secretary to the Prime Minister",
    org: "Office of the Prime Minister, Uganda",
    desc: "Provided policy coordination and administrative support to the Prime Minister, managing DRDIP-NUSAF and KIDP. Managed $10M+ donor-funded budgets with zero audit discrepancies. Mentored 500+ staff in results-based management, aligning programs with Vision 2040 and SDGs.",
    dot: C.gold,
  },
  {
    period: "2012 — 2013",
    role: "Undersecretary, Finance & Administration",
    org: "Ministry of East African Community Affairs, Uganda",
    desc: "Led financial oversight and administrative reforms. Coordinated EAC regional policies, aligning Uganda's priorities with cross-border frameworks. Reduced operational delays by 25% through stakeholder engagement.",
    dot: C.navyLight,
  },
  {
    period: "2009 — 2012",
    role: "Principal Assistant Secretary",
    org: "Ministry of Finance, Planning & Economic Development, Uganda",
    desc: "Managed budget planning and policy analysis supporting national fiscal strategies. Trained 100+ staff in public finance management. Implemented administrative systems improving financial reporting efficiency.",
    dot: C.blueMid,
  },
  {
    period: "2000 — 2009",
    role: "Senior Assistant Secretary / Assistant Secretary",
    org: "Ministries of Works, Housing & Communications, Uganda",
    desc: "Advanced through ranks overseeing infrastructure, diplomatic coordination, and local governance. Contributed to early reforms in public service delivery, establishing a foundation for senior leadership roles.",
    dot: C.teal,
  },
];

// ── EDUCATION ──
export const education = [
  { year: "2020–2026", degree: "PhD — Global Governance & Human Security",    inst: "University of Massachusetts Boston, USA",         accent: C.navyLight, note: "Dissertation: The Governance of Intensive Sugarcane-Growing and Climate Change for Sustainable Food Security in the Busoga Region of Eastern Uganda" },
  { year: "2024",      degree: "Post-Master's Credential — Global Governance & Human Security", inst: "University of Massachusetts Boston, USA", accent: C.blueMid, note: "Earned en route to the PhD" },
  { year: "2014–2016", degree: "MBA — Business Administration",                       inst: "ESAMI, Arusha, Tanzania",                         accent: C.gold      },
  { year: "2002–2005", degree: "MA — Public Administration & Management",             inst: "Makerere University, Kampala, Uganda",            accent: C.teal      },
  { year: "1996–1999", degree: "BA — Social Sciences (Political Science & Social Administration)", inst: "Makerere University, Kampala, Uganda", accent: C.red  },
];

// ── CERTIFICATIONS ──
export const certifications = [
  { year: "2025", title: "MAXIMIZERS Leadership Coaching",        org: ""                    },
  { year: "2018", title: "Public Finance Management",             org: "LDC"                 },
  { year: "2017", title: "Mediation & Conflict Resolution",       org: "UMass Boston"        },
  { year: "2016", title: "Monitoring & Evaluation for Development", org: "UNDP"              },
  { year: "2002", title: "Administrative Law",                    org: "LDC"                 },
];

// ── ADDITIONAL TRAINING ──
export const training = [
  "Central University of China",
  "Crown Agents, United Kingdom",
  "ITC Turin, Italy",
  "York University, Canada",
  "DIHR, Denmark",
];

// ── RESEARCH INTERESTS ──
export const research = [
  {
    title: "Governance of Climate Change",
    icon: "🌡️",
    accent: C.teal,
    body: "Examines policy frameworks that improve climate resilience in East Africa, focusing on stakeholder-led adaptation, cross-sector collaboration, and innovative funding. Studies early warning systems, EAC/AU regional alignment, and community-based adaptation strategies ensuring fair access to resources and participation in decision-making.",
  },
  {
    title: "Gender for Sustainable Food Security",
    icon: "🌾",
    accent: C.red,
    body: "Analyzes gender-inclusive approaches strengthening food systems and economic empowerment, especially for rural women and youth. Explores structural barriers — land access, market linkages, socio-cultural norms — contributing to food insecurity. Uses capability-based frameworks to empower women as agricultural entrepreneurs, aligned with SDGs 1, 2, 5, and 13.",
  },
  {
    title: "Intersection of Climate & Food Security",
    icon: "🔗",
    accent: C.gold,
    body: "Grounded in completed doctoral research in Busoga — examines food insecurity factors including policy gaps, market inefficiencies, and gender disparities alongside climate variability. Develops scalable models incorporating climate-smart agriculture, gender equality, and community governance for sustainable food systems across East Africa.",
  },
  {
    title: "Policy Implementation & Monitoring",
    icon: "📈",
    accent: C.navyLight,
    body: "Creates robust M&E frameworks to track the effects of climate and food security initiatives, ensuring policies lead to real results. Analyzes how data-driven governance can solve implementation issues and promote accountability in public and donor-funded programs.",
  },
];

// ── KEY PROJECTS ──
export const projects = [
  {
    title: "ESPP2 Youth Empowerment",
    tag: "UN-Funded · $5M · 2016–2020",
    accent: C.teal,
    points: [
      "50,000+ youth empowered with vocational skills and market access",
      "20% employment growth across 80+ districts",
      "25% increase in women's participation via gender markers",
      "M&E frameworks tracking SDG 4 and SDG 8",
    ],
  },
  {
    title: "MATIP II & USMID Infrastructure",
    tag: "World Bank · 2018–2020",
    accent: C.navyLight,
    points: [
      "500,000+ beneficiaries across agricultural markets and urban services",
      "30% reduction in procurement delays",
      "High donor audit scores via results-based management",
      "200+ officials trained in project oversight",
    ],
  },
  {
    title: "PRELNOR — Northern Uganda Livelihoods",
    tag: "IFAD / GoU · 2017–2021",
    accent: C.gold,
    points: [
      "Spearheaded rural livelihoods and northern corridor development",
      "150+ local government staff trained in participatory planning",
      ">90% beneficiary satisfaction score",
      "Compliance with IFAD environmental and social safeguards",
    ],
  },
  {
    title: "RMNCAHN-G Health Equity",
    tag: "Global Financing Facility · 2020–2022",
    accent: C.red,
    points: [
      "Improved access for 100,000+ rural women via cross-sector partnerships",
      "15% inclusivity boost with gender marker systems",
      "Reduced maternal mortality gaps, setting national benchmarks",
      "Real-time monitoring for evidence-based adjustments",
    ],
  },
  {
    title: "Busoga Climate-Food Governance",
    tag: "PhD Research · 2022–2026 · Completed",
    accent: C.teal,
    points: [
      "PhD conferred May 2026 — dissertation on sugarcane-growing, climate change, and food security governance",
      "Capability-based framework for climate-resilient agriculture",
      "27 key informant interviews, four focus groups, and 64 policy documents analyzed",
      "Presented at EAC and UN forums shaping regional dialogue",
    ],
  },
];

// ── PUBLICATIONS ──
export const publications = [
  {
    year: "2026",
    title: "The Governance of Intensive Sugarcane-Growing and Climate Change for Sustainable Food Security in the Busoga Region of Eastern Uganda",
    publisher: "PhD Dissertation — University of Massachusetts Boston · Global Governance & Human Security",
    type: "Dissertation",
    accent: C.navyLight,
  },
  {
    year: "2026",
    title: "From Policy Ambition to Household Reality",
    publisher: "Conference Paper — AAPAM Roundtable",
    type: "Conference Paper",
    accent: C.gold,
  },
  {
    year: "2025",
    title: "Upwards Management: Leadership in Public Service and its Influence on the Private Sector",
    publisher: "Mustard Seed International, VA, USA",
    type: "Book",
    accent: C.navyLight,
  },
  {
    year: "2024",
    title: "Climate-Resilient Agriculture in Uganda",
    publisher: "Applied Capability Approach to address food insecurity — influenced EAC policies",
    type: "Research Article",
    accent: C.teal,
  },
  {
    year: "2016–2023",
    title: "Policy Briefs on Gender, Youth, Climate & Sustainability",
    publisher: "10+ reports for government and donors — adopted at national and regional levels",
    type: "Policy Briefs",
    accent: C.gold,
  },
  {
    year: "2016",
    title: "Managing the New Performance Appraisal System in Uganda's Public Service",
    publisher: "MBA Thesis — ESAMI, Tanzania · Case: Ministry of Works, Housing & Communications",
    type: "Thesis",
    accent: C.red,
  },
  {
    year: "2015",
    title: "Capability-Based Frameworks for Climate-Resilient Agriculture in Uganda",
    publisher: "MA Thesis — UMass Boston · Global Governance & Human Security",
    type: "Thesis",
    accent: C.blueMid,
  },
  {
    year: "2005",
    title: "Performance Management in Uganda's Public Service",
    publisher: "MA Thesis — Makerere University · Case: Ministry of ICT, Uganda",
    type: "Thesis",
    accent: C.teal,
  },
];

// ── AFFILIATIONS ──
export const affiliations = [
  { name: "Africa Association of Public Administration & Management (AAPAM)", role: "Member" },
  { name: "Uganda Association of Public Administration & Management (UAPAM)",  role: "Co-opted Secretariat Member" },
  { name: "East African Community (EAC)",  role: "Former Chair, Governance Committee (2013)" },
];

// ── COMMUNITY ──
export const community = [
  { title: "Bukanga United for Development Action", dot: C.teal,      desc: "Co-founded to support and mentor remote students in Luuka's Bukanga Bukendi — with a special focus on breaking barriers for girls' education." },
  { title: "Youth Secretary & Fathers' Union Chair", dot: C.navyLight, desc: "Served in community leadership roles at Kiwanga parishes, Mukono — grounding professional work in genuine, community-driven change." },
  { title: "MAXIMIZERS Leadership Coaching",          dot: C.gold,      desc: "Certified coach committed to transformational and ethical leadership across public, private, and civil sectors at every level." },
  { title: "Conflict Resolution & Peacebuilding",     dot: C.red,       desc: "Certified mediator with a passion for integrating conflict-resolution frameworks at local, national, regional, and international levels." },
];

// ── CONTACTS ──
export const contacts = [
  { icon: "✉️", type: "Email",    val: "jamesbkintu@gmail.com",                    sub: null,                              bg: C.navy    },
  { icon: "💼", type: "LinkedIn", val: "james-kintu-b46960aa",                     sub: "linkedin.com/in/james-kintu-b46960aa", bg: C.navyLight },
  { icon: "📱", type: "Phone",    val: "+256 772 611 055",                          sub: null,                              bg: C.red     },
  { icon: "📮", type: "Address",  val: "P.O. Box 554, Mukono",                      sub: "Kampala, Uganda",                 bg: C.teal    },
];
