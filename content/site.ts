export type NavItem = { label: string; href: string };

export type SocialLink = {
  label: string;
  href: string;
};

export type ProjectCategory = "experience" | "academic";

export type Project = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  category: ProjectCategory;
};

/** Content sourced from Baswanth Kollu’s resume (PDF). */
export const site = {
  name: "Baswanth Kollu",
  role: "Software Engineer",
  meta: {
    title: "Baswanth Kollu — Software Engineer",
    description:
      "Information Technology graduate student at Montclair State University (GPA 3.97/4.0) and Alpha Epsilon Lambda member, with professional experience as a UI/UX Developer at TA Digital. Web development with React, Flask, Node.js, and MySQL/MongoDB/Firebase.",
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
      "Full-stack",
      "React",
      "Python",
      "Machine learning",
      "Product",
      "Accessibility",
    ],
    headline:
      "Software engineer focused on scalable, user-centered web experiences.",
    subhead:
      "Information Technology graduate student at Montclair State University (GPA 3.97/4.0) and Alpha Epsilon Lambda honor society member, with one year of professional experience as a UI/UX Developer at TA Digital. Proficient in HTML, CSS, JavaScript, Python, and PHP, with hands-on experience in ReactJS, Flask, Node.js, and databases including MySQL, MongoDB, and Firebase.",
    primaryCta: { label: "Selected work", href: "#projects" },
    secondaryCta: { label: "Contact", href: "#contact" },
  },
  about: {
    title: "About",
    paragraphs: [
      "Information Technology graduate student at Montclair State University (GPA 3.97/4.0) and Alpha Epsilon Lambda honor society member, with one year of professional experience as a UI/UX Developer at TA Digital. I am proficient in web development (HTML, CSS, JavaScript, Python, PHP), with hands-on experience in ReactJS, Flask, Node.js, and databases (MySQL, MongoDB, Firebase). I am passionate about building scalable, user-centered software solutions.",
      "Education: Montclair State University — Master of Science in Information Technology (Jan 2024 – Dec 2025), relevant coursework in Web Development, Blockchain, and Computer Networks, GPA 3.97/4.0. Osmania University — Bachelor of Engineering in Computer Science & Engineering (June 2018 – June 2022), GPA 3.08/4.0. Volunteer and leadership experience includes population survey officer for the Telangana State Government (2019), college admission management (2021), and annual day event organizer (2022).",
      "Research interests include tokenization and blockchain-based investments; usability and responsive e-commerce design; secure software practices across the SDLC; and machine learning in video games (NPC behavior, personalization, and procedural content).",
    ],
    highlights: [
      "UI/UX Developer / Designer",
      "Web Developer",
      "Frontend Developer",
    ],
  },
  projects: {
    title: "Experience & academic projects",
    intro:
      "Professional client work at TA Digital and representative academic projects from Montclair State University and Osmania University, as listed on my resume.",
    filterLabels: {
      all: "All projects",
      experience: "Experience",
      academic: "Academic",
    },
    items: [
      {
        title: "TA Digital — UI/UX Developer",
        description:
          "Designed and developed flight search and e-commerce websites for clients. Collaborated in a five-member team to design and deliver responsive web pages. Earned Pluralsight certifications in HTML, CSS, JavaScript, and Scrum, applying skills directly to client projects.",
        href: "https://www.tadigital.com/",
        tags: [
          "Hyderabad, India",
          "Jun 2022 – Jun 2023",
          "UI/UX",
          "Responsive web",
        ],
        category: "experience",
      },
      {
        title: "Depression detection using text classification",
        description:
          "Built an ML model to detect depression from COVID-19 tweets using Python, TensorFlow, and NLP preprocessing with TF-IDF features. Applied neural networks and AdaBoost, achieving approximately 99% accuracy.",
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
        title: "AI financial application",
        description:
          "Built a web-based AI financial system for credit card fraud detection and budget forecasting with report downloads and admin management, using Flask, Python, SQLite, HTML, CSS, and Bootstrap. Applied Random Forest, Logistic Regression, and Facebook Prophet models.",
        href: "#contact",
        tags: ["Flask", "SQLite", "Bootstrap", "Random Forest", "Prophet"],
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
