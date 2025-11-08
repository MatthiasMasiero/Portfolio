export const PROFILE = {
  name: "Matthias Masiero",
  tagline: "I've had a lifelong passion for Computer Science so this is just the begining.",
  summary:
    "I'm Matthias Masiero — a CS sophomore at Santa Clara who loves building clean, fast things: web apps, small automations, and ML tools. I'm exploring quantum (IBM Q / Qiskit) and building a sports-science project to help keep athletes healthy. When I'm not coding, I'm out in the sun playing soccer, surfing, or beach volleyball.",
  location: "Santa Clara, CA",
  email: "matthiasmasiero0@gmail.com",
  phone: "+1-908-432-5309",
  links: {
    github: "https://github.com/MatthiasMasiero",
    linkedin: "https://www.linkedin.com/in/matthiasmasiero",
    resume: "/Resume.pdf",
  },
};

export const SKILLS = {
  languages: [
    "Python",
    "Java",
    "C++",
    "Swift",
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "TypeScript",
    "OCaml (partial knowledge)",
    "Qiskit",
    "OpenQASM (learning)",
  ],
  tools: [
    "AWS (Lambda, EC2, S3, SageMaker, CloudWatch, API Gateway, Amplify)",
    "Docker",
    "CI/CD Pipelines",
    "TensorFlow",
    "Bash",
    "Git",
    "GraphQL",
    "IBM Quantum Platform",
    "AI Agents (Amazon Q, LangChain, LlamaIndex, Auto-GPT, Claude)",
  ],
};

export const PROJECTS = [
  {
    title: "DevAngel — DevOps Incident Dashboard (Hackathon Winner)",
    desc:
      "Real-time incident analysis using AWS CloudWatch Logs, Lambda, Step Functions, API Gateway, Bedrock & EC2 to detect anomalies and generate Incident Cards with auto-fix suggestions.",
    tags: ["AWS", "Lambda", "Step Functions", "SageMaker", "Bedrock"],
    links: [
      { href: "https://github.com/MatthiasMasiero/DevAngel", label: "GitHub" },
    ],
    icon: "Rocket",
  },
  {
    title: "Automated Heat‑Sensing Drone (Senior Design)",
    desc:
      "Team project building a drone system that detects & classifies heat signatures using on‑board vision and thermal‑image processing. Built navigation and CV pipeline prototypes.",
    tags: ["Computer Vision", "Robotics"],
    links: [],
    icon: "Cpu",
  },
  {
    title: "Reward Points Management System",
    desc:
      "Web app + SQLite/Flask backend to track & visualize student reward data; collaborated with teacher on UX and feature set; actively used in classes.",
    tags: ["Flask", "SQLite", "Data Viz"],
    links: [
      { href: "https://github.com/MatthiasMasiero/CompSci-RP-Website", label: "Repo (frontend)" },
    ],
    icon: "Star",
  },
  {
    title: "F1‑Website",
    desc: "Responsive storefront concept with product cards and modern layout.",
    tags: ["HTML", "CSS", "UI"],
    links: [{ href: "https://github.com/MatthiasMasiero/F1-Website", label: "GitHub" }],
    icon: "Globe",
  },
  {
    title: "Sports Science Internship (Coming Soon)",
    desc: "Machine learning-based analytics platform for injury prediction and load optimization in collegiate soccer. Full case study coming soon.",
    tags: ["Machine Learning", "Sports Analytics", "Python", "AWS"],
    links: [],
    icon: "Rocket",
  },
  {
    title: "This Website!",
    desc:
      "The code for my React + Vite + Tailwind portfolio with framer-motion animations, ambient background, and smooth-scrolling sections.",
    tags: ["React", "Vite", "Tailwind", "Framer Motion"],
    links: [
      { href: "https://github.com/MatthiasMasiero/Portfolio", label: "GitHub" },
    ],
    icon: "Globe",
  },
];

export const QUANTUM = [
  {
    title: "GHZ-Interference",
    desc:
      "Prepare a 4‑qubit GHZ state and sweep phase to visualize interference. Exports CSV and includes plot‑ready data.",
    tags: ["Qiskit", "IBM Quantum", "GHZ"],
    links: [
      { href: "https://github.com/MatthiasMasiero/GHZ-Interference", label: "GitHub" },
    ],
    icon: "Sparkles",
  },
  {
    title: "GroverAlgorithmDemo",
    desc:
      "Classic Grover search demo (3‑qubit) showing oracle design and amplitude amplification with OpenQASM/Qiskit assets.",
    tags: ["Grover", "Qiskit", "OpenQASM"],
    links: [
      { href: "https://github.com/MatthiasMasiero/GroverAlgorithmDemo", label: "GitHub" },
    ],
    icon: "Cpu",
  },
];

export const EXPERIENCE = [
  {
    org: "Sports Science Internship, SCU Athletic Program",
    when: "Present",
    bullets: [
      "Designing ML model on Catapult tracking data to predict non‑contact injuries.",
      "Feature extraction, regression/classification; optimize training loads with staff.",
      "Goal: reduce non‑contact injury risk by up to 70%.",
    ],
  },
  {
    org: "ACM Club — Board Member",
    when: "Present",
    bullets: [
      "Help lead the largest CS club on campus; organize weekly events and hackathons.",
    ],
  },
  {
    org: "Curriculum Development — Advanced Topics in Computing",
    when: "Previously",
    bullets: [
      "Developed a data-science focused high-school computing curriculum and collaborated with teachers on course design.",
      "Led the proposal and successfully obtained Board of Education approval for two advanced computing courses.",
    ],
  },
  {
    org: "BrainSTEM — Instructor",
    when: "Previously",
    bullets: [
      "Taught robotics & CS to middle school students; designed hands‑on activities.",
    ],
  },
];

export const EDUCATION = [
  {
    school: "Santa Clara University",
    degree: "B.S. in Computer Science, Minor in Physics",
    year: "2028",
  },
];

