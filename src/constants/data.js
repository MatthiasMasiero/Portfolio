export const PROFILE = {
  name: "Matthias Masiero",
  tagline: "I've had a lifelong passion for Computer Science, and this is just the beginning.",
  summary:
    "I'm Matthias Masiero — a rising junior at Santa Clara University (B.S. Computer Science, class of 2028) who loves building clean, fast things: web apps, low-latency systems, and ML tools. I lead transformer benchmarking for crisis-signal detection under Dr. Smita Ghosh, with work accepted to ASONAM 2026 (Springer LNCS), and I'm deep into quantum computing (IBM Q / Qiskit). When I'm not coding, I'm out in the sun playing soccer, surfing, or beach volleyball.",
  location: "Santa Clara, CA",
  email: "matthiasmasiero0@gmail.com",
  links: {
    github: "https://github.com/MatthiasMasiero",
    linkedin: "https://www.linkedin.com/in/matthiasmasiero",
    resume: "/Resume.pdf",
  },
};

export const SKILLS = {
  languages: [
    "Python",
    "C++",
    "Java",
    "TypeScript",
    "JavaScript",
    "SQL",
    "Swift",
    "OCaml",
    "Qiskit",
    "OpenQASM",
    "HTML/CSS",
  ],
  tools: [
    "AWS (Lambda, EC2, S3, SageMaker, CloudWatch, API Gateway, Amplify)",
    "Docker",
    "CI/CD Pipelines",
    "PyTorch",
    "Hugging Face Transformers",
    "scikit-learn",
    "TensorFlow",
    "Supabase",
    "Stripe",
    "Redis",
    "Bash",
    "Git",
    "GraphQL",
    "IBM Quantum Platform",
    "AI Agents (Amazon Q, LangChain, LlamaIndex, Claude)",
  ],
};

export const PROJECTS = [
  {
    title: "QuantumDx — Quantum ML Diagnostic (Hack for Humanity 2026)",
    desc:
      "Quantum ML diagnostic for leptospirosis screening in low-resource clinics. Encodes 24 clinical features into an 8-qubit ZZFeatureMap and classifies by state fidelity against synthetic reference states, with federated SVM aggregation and DoD 5220.22-M secure erasure. Validated on 141 real patients (Kisumu County, Kenya) at 79% accuracy and 92% specificity, benchmarked against classical SVM and tree baselines.",
    tags: ["Qiskit", "Quantum ML", "Federated Learning", "FastAPI", "React"],
    links: [
      { href: "https://github.com/MatthiasMasiero/H4H2026", label: "GitHub" },
    ],
    icon: "Sparkles",
  },
  {
    title: "DevAngel — DevOps Incident Dashboard (2025 AWS Hackathon Winner)",
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
      "C++ order matching engine processing 300,000+ orders/second with 3.3μs mean latency. Supports LIMIT, MARKET, and STOP orders using price-time priority matching built on intrusive linked lists and a 1M-object pre-allocated pool. Uses SPSC ring buffers and a zero-allocation hot path, sustaining zero data loss under extreme load (load-tested with 3M+ orders).",
    tags: ["C++", "Low Latency", "Trading Systems", "Performance"],
    links: [
      { href: "https://github.com/MatthiasMasiero/MatchingEngine", label: "GitHub" },
    ],
    icon: "Cpu",
  },
  {
    title: "CardTempo — Credit Optimizer (2nd Place, SCU Winter Challenge)",
    desc:
      "Full-stack Next.js / TypeScript fintech platform (25K+ LOC) that boosts credit scores by 15–160 points through optimized payment timing. Features multi-card optimization, payment calendars, what-if scenarios, and a personalized card recommendation engine, backed by Supabase PostgreSQL with row-level security, Stripe subscriptions, and Redis rate limiting.",
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe", "Redis"],
    links: [
      { href: "https://www.cardtempo.com/", label: "Website" },
      { href: "https://github.com/MatthiasMasiero/CardTempo", label: "GitHub" },
    ],
    icon: "Globe",
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
    title: "QuantumDx — Leptospirosis Screening",
    desc:
      "Quantum ML diagnostic that encodes 24 clinical features into an 8-qubit ZZFeatureMap (linear entanglement, depth 2) and classifies by state fidelity F(ψ,φ) = |⟨ψ|φ⟩|² against 30 synthetic reference states. Validated on 141 real patients (Kisumu County, Kenya) at 79% accuracy and 92% specificity, and benchmarked against classical SVM and tree baselines.",
    tags: ["Qiskit", "ZZFeatureMap", "Fidelity Kernel", "Healthcare"],
    links: [
      { href: "https://github.com/MatthiasMasiero/H4H2026", label: "GitHub" },
    ],
    icon: "Sparkles",
  },
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
    org: "Machine Learning Researcher, Santa Clara University (Dr. Smita Ghosh)",
    when: "Nov 2025 - Present",
    bullets: [
      "Benchmarked transformer classifiers (BERT, RoBERTa, MentalRoBERTa, ELECTRA, clinical BERT variants) across 8 public mental-health datasets for early self-harm and crisis-signal detection; models at 0.94–0.98 F1 in-domain collapsed below 0.40 F1 on a curated adversarial test set, exposing reliance on surface lexical cues.",
      "Leading the research team building transformer baselines for conversation-level risk detection on a synthetic multi-turn dialogue corpus engineered to remove the lexical shortcuts identified in prior benchmarks.",
      "Contributing models and evaluation to a paper on context-aware safeguards for conversational AI, accepted to ASONAM 2026 (Springer LNCS).",
    ],
  },
  {
    org: "Sports Data Scientist, Santa Clara University Athletics",
    when: "Jan 2025 - Present",
    bullets: [
      "Processing 750K+ biometric data points per session across 22 athletes at 10Hz sampling frequency from Catapult GPS/accelerometer wearables to predict and prevent non‑contact injuries.",
      "Engineering feature-extraction pipelines and applying regression and classification algorithms to optimize training loads, targeting a 70% reduction in non‑contact injuries.",
      "Built an athlete workload and injury-risk dashboard currently used by SCU teams and training staff; leading its adaptation and rollout to additional teams.",
    ],
  },
  {
    org: "ACM Event Coordinator, Santa Clara University",
    when: "Oct 2024 - June 2026",
    bullets: [
      "Board member of the largest computer science club on campus; designed and taught quantum computing workshops (Qiskit implementations), then AI/ML fundamentals workshops.",
      "Plan and run two major hackathons each year, with over 350 participants and multiple guest speakers.",
    ],
  },
  {
    org: "Treasurer, Zeta Beta Tau Fraternity",
    when: "2025 - Present",
    bullets: [
      "Manage a $150K annual budget for a 100-member chapter; automated dues collection and financial reporting.",
    ],
  },
];

export const EDUCATION = [
  {
    school: "Santa Clara University",
    degree: "B.S. in Computer Science, Minor in Physics",
    year: "Expected June 2028",
  },
];
