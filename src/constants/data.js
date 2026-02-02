export const PROFILE = {
  name: "Matthias Masiero",
  tagline: "I've had a lifelong passion for Computer Science, and this is just the beginning.",
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
    title: "High-Performance Order Matching Engine",
    desc:
      "C++17 order matching engine processing 300,000+ orders/second with sub-4μs latency. Supports LIMIT, MARKET, and STOP orders using price-time priority matching. Features lock-free architecture, zero data loss under extreme load, and production-ready error handling.",
    tags: ["C++", "Low Latency", "Trading Systems", "Performance"],
    links: [
      { href: "https://github.com/MatthiasMasiero/MatchingEngine", label: "GitHub" },
    ],
    icon: "Cpu",
  },
  {
    title: "CardTempo — Credit Optimizer",
    desc: "Smart financial tool that boosts credit scores by 15-160 points through optimized payment timing. Features multi-card optimization, payment calendars, email reminders, what-if scenarios, and personalized card recommendations with application timelines.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    links: [
      { href: "https://www.cardtempo.com/", label: "Website" },
      { href: "https://github.com/MatthiasMasiero/CardTempo", label: "GitHub" },
    ],
    icon: "Globe",
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
    org: "Sports Science Internship, Santa Clara University Athletics",
    when: "Jan 2025 - Present",
    bullets: [
      "Processing 750K+ biometric data points per session across 22 athletes at 10Hz sampling frequency from Catapult GPS/accelerometer wearables to predict and prevent non‑contact injuries.",
      "Engineering feature-extraction pipelines and applying regression and classification algorithms to optimize training loads.",
      "Collaborating with trainers and data scientists to refine predictive models for injury prevention and recovery, targeting a 70% reduction in non‑contact injuries.",
    ],
  },
  {
    org: "Machine Learning Researcher, Santa Clara University",
    when: "Nov 2025 - Present",
    bullets: [
      "Benchmarked 6 transformer models (BERT, RoBERTa, MentalRoBERTa, ELECTRA, LLaMA-3.2) for suicidal ideation detection across 5 Reddit and Twitter datasets, achieving up to 98% accuracy on binary classification tasks.",
      "Designed a 40 sample adversarial test set spanning implicit ideation, sarcasm, and ambiguous distress to stress test model robustness, exposing failure modes where surface level lexical cues proved insufficient.",
    ],
  },
  {
    org: "ACM Event Coordinator, Santa Clara University",
    when: "Oct 2024 - Present",
    bullets: [
      "Board member of the largest computer science club on campus; lead AI and quantum computing workshops teaching machine learning fundamentals and Qiskit implementations.",
      "Plan and run two major hackathons each year, with over 350 participants and multiple guest speakers.",
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
];

export const EDUCATION = [
  {
    school: "Santa Clara University",
    degree: "B.S. in Computer Science, Minor in Physics",
    year: "Sophomore",
  },
];

