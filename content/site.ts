export type NavItem = { label: string; href: string };

export type SocialLink = {
  label: string;
  href: string;
};

export type ProjectCategory = "experience" | "academic";

export type Project = {
  title: string;
  description: string;
  /** Full bullet list from the resume (shown on project cards when present). */
  details?: readonly string[];
  href: string;
  tags: string[];
  category: ProjectCategory;
};

export type EducationEntry = {
  institution: string;
  location: string;
  degree: string;
  start: string;
  end: string;
  gpa: string;
  notes?: readonly string[];
};

export type ResearchPaper = {
  title: string;
  points: readonly string[];
};

export type SkillsGroups = {
  languages: readonly string[];
  frameworksLibraries: readonly string[];
  toolsPlatforms: readonly string[];
  databases: readonly string[];
};

/** Every factual block below maps directly to Baswanth Kollu’s resume (PDF). */
export const site = {
  name: "Baswanth Kollu",
  role: "Software Engineer",
  meta: {
    title: "Baswanth Kollu — Software Engineer",
    description:
      "MS Information Technology at Montclair State University (GPA 3.97), Alpha Epsilon Lambda. UI/UX Developer at TA Digital; skilled in HTML, CSS, JavaScript, Python, PHP, ReactJS, Flask, Node.js, MySQL, MongoDB, Firebase.",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  hero: {
    eyebrow: "Montclair State University · MS Information Technology",
    marquee: [
      "UI / UX",
      "Web development",
      "ReactJS",
      "Flask",
      "Node.js",
      "Python",
      "TensorFlow",
      "Flutter",
      "Figma",
      "REST APIs",
      "Accessibility",
    ],
    headline:
      "Software engineer focused on scalable, user-centered web experiences.",
    primaryCta: { label: "Selected work", href: "#projects" },
    secondaryCta: { label: "Contact", href: "#contact" },
  },
  about: {
    title: "About",
    /** Full SUMMARY section from the resume. */
    summary:
      "Information Technology graduate student at Montclair State University (GPA: 3.97/4.0) and Alpha Epsilon Lambda honor society member, with one year of professional experience as a UI/UX Developer at TA Digital. Proficient in web development (HTML, CSS, JavaScript, Python, PHP), with hands-on experience in frameworks (ReactJS, Flask, Node.js) and databases (MySQL, MongoDB, Firebase). Passionate about building scalable, user-centered software solutions.",
    /** Areas of Expertise — verbatim emphasis areas from the resume. */
    areasOfExpertise: [
      "UI/UX Developer / Designer",
      "Web Developer",
      "Frontend Developer",
    ],
  },
  education: [
    {
      institution: "Montclair State University (MSU)",
      location: "Montclair, NJ",
      degree: "Master of Science in Information Technology",
      start: "Jan 2024",
      end: "Dec 2025",
      gpa: "3.97/4.0",
      notes: [
        "Relevant coursework: Web Development, Blockchain, Computer Networks",
      ],
    },
    {
      institution: "Osmania University (OU)",
      location: "Hyderabad, India",
      degree: "Bachelor of Engineering in Computer Science & Engineering",
      start: "June 2018",
      end: "June 2022",
      gpa: "3.08/4.0",
    },
  ] satisfies EducationEntry[],
  skills: {
    languages: ["Python", "JavaScript", "HTML", "CSS", "PHP", "JSON", "Java"],
    frameworksLibraries: [
      "ReactJS",
      "Flask",
      "Node.js",
      "Express",
      "TensorFlow",
    ],
    toolsPlatforms: [
      "Microsoft Office",
      "Canva",
      "WordPress",
      "GitHub",
      "Figma",
      "Git",
    ],
    databases: ["MySQL", "MongoDB", "Firebase", "SQLite"],
  } satisfies SkillsGroups,
  researchPapers: [
    {
      title:
        "Tokenizing the Future: Revolutionizing Investments through Asset Tokenization.",
      points: [
        "Analyzed how blockchain-based tokenization improves liquidity and fractional ownership.",
        "Studied real-world platforms and challenges in decentralized finance.",
      ],
    },
    {
      title:
        "Improving User Experience in Responsive E-commerce Design: Integrating Usability Principles.",
      points: [
        "Studied usability principles for responsive e-commerce interfaces.",
        "Proposed UX guidelines for accessibility, consistency and mobile-first design.",
      ],
    },
    {
      title: "Importance of Secure Software Practices.",
      points: [
        "Analyzed security integration across the SDLC lifecycle.",
        "Covered secure coding, vulnerability detection, and threat prevention.",
      ],
    },
    {
      title:
        "Machine Learning in Video Games: Revolutionizing Game Development and Player Interaction.",
      points: [
        "Analyzed ML techniques for NPC behavior, game personalization and procedural content.",
        "Studied deep learning, reinforcement learning, and player modeling approaches.",
      ],
    },
  ] satisfies ResearchPaper[],
  honors: ["Alpha Epsilon Lambda"] as const,
  volunteerAndLeadership: [
    "Population survey officer for Telangana State Government – 2019",
    "College admission management – 2021",
    "Annual day event organizer – 2022",
  ] as const,
  projects: {
    title: "Experience & academic projects",
    intro:
      "Complete list of professional experience and academic projects as shown on my resume (TA Digital; MSU and OU work).",
    filterLabels: {
      all: "All projects",
      experience: "Experience",
      academic: "Academic",
    },
    items: [
      {
        title: "TA Digital — UI/UX Developer",
        description:
          "Client flight search and e-commerce sites, responsive delivery in a 5-person team, and Pluralsight certifications applied to real work.",
        details: [
          "Designed and developed flight search and e-commerce websites for clients.",
          "Collaborated in a 5-member team to design and deliver responsive web pages.",
          "Earned Pluralsight certifications in HTML, CSS, JavaScript, and Scrum, applying skills directly to client projects.",
        ],
        href: "https://www.tadigital.com/",
        tags: [
          "TA Digital",
          "Hyderabad, India",
          "Jun 2022 – Jun 2023",
          "UI/UX",
          "Pluralsight",
          "Responsive web",
        ],
        category: "experience",
      },
      {
        title: "Depression detection using text classification",
        description:
          "ML model on COVID-19 tweets with TF-IDF NLP, neural networks and AdaBoost — approximately 99% accuracy.",
        details: [
          "Built an ML model to detect depression from COVID-19 tweets.",
          "Used Python, TensorFlow, NLP preprocessing with TF-IDF features.",
          "Applied Neural Networks + AdaBoost; achieved ~99% accuracy.",
        ],
        href: "#contact",
        tags: [
          "Python",
          "TensorFlow",
          "NLP",
          "TF-IDF",
          "Neural networks",
          "AdaBoost",
        ],
        category: "academic",
      },
      {
        title: "E-Commerce bookstore application",
        description:
          "Cross-platform Flutter and Firebase app with browsing, cart, and login.",
        details: [
          "Built a cross-platform Flutter & Firebase bookstore app with browsing, cart and login features.",
          "Tech: Flutter (UI), Dart, Firebase.",
        ],
        href: "#contact",
        tags: ["Flutter", "Dart", "Firebase", "E-commerce", "Mobile"],
        category: "academic",
      },
      {
        title: "Hospital ventilation management system",
        description:
          "Node.js/Express backend to track and manage hospital ventilation data and device status via REST APIs.",
        details: [
          "Built a Node.js/Express backend to track and manage hospital ventilation data.",
          "Tech: JavaScript, Node.js, Express, REST APIs for ventilation stats & device status.",
        ],
        href: "#contact",
        tags: ["Node.js", "Express", "REST APIs", "JavaScript", "Healthcare"],
        category: "academic",
      },
      {
        title: "Hotel Management system",
        description:
          "Full-stack hotel booking with room search, booking flow, and admin control.",
        details: [
          "Built a full-stack hotel booking website with room search, booking and admin control.",
          "Tech: PHP, MySQL, HTML, CSS, Bootstrap.",
        ],
        href: "#contact",
        tags: ["PHP", "MySQL", "Bootstrap", "Full-stack", "Booking"],
        category: "academic",
      },
      {
        title: "UI/UX of E-Commerce App (car accessories)",
        description:
          "Figma design for a car accessories shopping app with compatibility wizard, filters, order tracking, and cart.",
        details: [
          "Designed a car accessories shopping app using Figma.",
          "Features: vehicle compatibility wizard, smart filters, order tracking, & cart.",
        ],
        href: "#contact",
        tags: ["Figma", "UI/UX", "E-commerce", "Product design"],
        category: "academic",
      },
      {
        title: "Multi-threaded web server (Python)",
        description:
          "Custom Python web server using sockets and multithreading for concurrent client handling.",
        details: [
          "Engineered a multi-threaded web server using Python to handle concurrent requests and manage network traffic.",
          "Built a custom web server handling multiple client requests concurrently.",
          "Tech: Python, Socket Programming, Multithreading.",
        ],
        href: "#contact",
        tags: ["Python", "Sockets", "Multithreading", "Networking"],
        category: "academic",
      },
      {
        title: "Tax & Payment Tracking System",
        description:
          "Flask/SQLite web app for tax payments with CRUD APIs, summaries, and due-date tracking.",
        details: [
          "Built a web app to track, add, update and delete tax payments.",
          "Tech: Flask, SQLite, HTML, CSS, JS.",
          "Implemented CRUD APIs, summaries and due-date tracking.",
        ],
        href: "#contact",
        tags: ["Flask", "SQLite", "JavaScript", "CRUD", "Full-stack"],
        category: "academic",
      },
      {
        title: "AI financial application",
        description:
          "Web app for credit card fraud detection and budget forecasting with admin tools; Random Forest, Logistic Regression, Prophet.",
        details: [
          "Built a web-based AI financial system for credit card fraud detection & budget forecast with report downloads and admin management.",
          "Tech: Flask, Python, SQLite, HTML, CSS, Bootstrap.",
          "AI & Algorithms: Used Random Forest, Logistic Regression and Facebook Prophet models.",
        ],
        href: "#contact",
        tags: [
          "Flask",
          "SQLite",
          "Bootstrap",
          "Random Forest",
          "Logistic Regression",
          "Prophet",
        ],
        category: "academic",
      },
    ] satisfies Project[],
  },
  contact: {
    title: "Contact",
    flair: "Let’s go.",
    headline: "Need a sharp web experience?",
    body: "Prefer email; phone is fine for a quick conversation.",
    email: "baswanth.kollu@gmail.com",
    phone: "551-226-1252",
    location: "Jersey City, NJ, 07306",
    social: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/baswanthkollu",
      },
    ] satisfies SocialLink[],
  },
  footer: {
    note: "Built with Next.js & Tailwind CSS.",
  },
} as const;
