import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ExternalLink, Download, Sparkles, Globe, Cpu, Rocket, Star, GraduationCap } from "lucide-react";
// ---- Minimal UI shims (no external alias) ----------------------------------
function cn(...parts){
  return parts.filter(Boolean).join(" ");
}

// --- Small hooks for responsive and reduced motion ---
function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = React.useState(() => typeof window !== 'undefined' && window.innerWidth <= breakpoint);
  React.useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, [breakpoint]);
  return isMobile;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);
  return reduced;
}

function Card({ className = "", children }) {
  return (
    <div className={cn("rounded-2xl border border-white/10 bg-white/5", className)}>{children}</div>
  );
}

function CardContent({ className = "", children }) {
  return <div className={cn("p-5", className)}>{children}</div>;
}

function Button({ asChild = false, variant = "primary", className = "", children, ...props }) {
  const base = cn(
    "inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium",
    variant === "secondary" ? "bg-white/10 border border-white/15" : "bg-white/20 border border-white/20",
    "hover:bg-white/25 transition-colors",
    className
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(base, children.props.className),
      ...props,
    });
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}


function AnimatedBackground() {
  return (
    <>
      <style>{`
        @keyframes driftA {
          0%   { transform: translate3d(-8%, -6%, 0) scale(1.2); }
          50%  { transform: translate3d( 6%,  4%, 0) scale(1.2); }
          100% { transform: translate3d(-4%,  8%, 0) scale(1.2); }
        }
        @keyframes hueCycle {
          0%   { filter: hue-rotate(0deg)    saturate(1.0); }
          25%  { filter: hue-rotate(60deg)   saturate(1.05); }
          50%  { filter: hue-rotate(120deg)  saturate(1.1); }
          75%  { filter: hue-rotate(200deg)  saturate(1.05); }
          100% { filter: hue-rotate(360deg)  saturate(1.0); }
        }
        @keyframes driftB {
          0%   { transform: translate3d(6%, 8%, 0) scale(1.15); }
          50%  { transform: translate3d(-6%, -4%, 0) scale(1.15); }
          100% { transform: translate3d(8%, -6%, 0) scale(1.15); }
        }
      `}</style>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute -inset-[12%] will-change-transform"
          style={{
            animation: "driftA 42s ease-in-out infinite, hueCycle 56s linear infinite",
            opacity: 1,
            mixBlendMode: "screen",
            background:
              `radial-gradient(1100px 800px at 20% 15%, rgba(167,139,250,.28), transparent 62%),` +
              `radial-gradient(1100px 800px at 78% 18%, rgba(110,231,255,.24), transparent 62%),` +
              `radial-gradient(1400px 900px at 50% 88%, rgba(34,197,94,.16), transparent 66%)`,
          }}
        />
        <div
          className="absolute -inset-[14%] will-change-transform"
          style={{
            animation: "driftB 68s ease-in-out infinite, hueCycle 84s linear infinite",
            opacity: 0.85,
            mixBlendMode: "screen",
            background:
              `radial-gradient(900px 700px at 15% 70%, rgba(59,130,246,.22), transparent 65%),` +
              `radial-gradient(900px 700px at 85% 35%, rgba(236,72,153,.18), transparent 65%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              `radial-gradient(80% 70% at 50% 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,.28) 100%)`,
          }}
        />
      </div>
      {/* Mobile-only backfill to ensure the background always covers the full page height on phones.
          This sits UNDER the current animated layers and does not affect desktop. */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none sm:hidden"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 20%, rgba(29,78,216,.16), transparent 70%)," +
            "radial-gradient(110% 85% at 70% 80%, rgba(139,92,246,.14), transparent 70%)," +
            "radial-gradient(100% 80% at 30% 90%, rgba(16,185,129,.10), transparent 65%)",
        }}
      />
    </>
  );
}

function SmoothScrollStyles(){
  return <style>{`html{scroll-behavior:smooth}`}</style>;
}

const PROFILE = {
  name: "Matthias Masiero",
  tagline: "I've had a lifelong passion for Computer Science so this is just the begining.",
  summary:
    "I’m Matthias Masiero — a CS sophomore at Santa Clara who loves building clean, fast things: web apps, small automations, and ML tools. I’m exploring quantum (IBM Q / Qiskit) and building a sports-science project to help keep athletes healthy. When I’m not coding, I’m out in the sun playing soccer, surfing, or beach volleyball.",
  location: "Santa Clara, CA",
  email: "matthiasmasiero0@gmail.com",
  phone: "+1-908-432-5309",
  links: {
    github: "https://github.com/MatthiasMasiero",
    linkedin: "https://www.linkedin.com/in/matthiasmasiero",
    resume: "/Resume.pdf",
  },
};

const SKILLS = {
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

const PROJECTS = [
  {
    title: "DevAngel — DevOps Incident Dashboard (Hackathon Winner)",
    desc:
      "Real-time incident analysis using AWS CloudWatch Logs, Lambda, Step Functions, API Gateway, Bedrock & EC2 to detect anomalies and generate Incident Cards with auto-fix suggestions.",
    tags: ["AWS", "Lambda", "Step Functions", "SageMaker", "Bedrock"],
    links: [
      { href: "https://github.com/MatthiasMasiero/DevAngel", label: "GitHub" },
    ],
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    title: "Automated Heat‑Sensing Drone (Senior Design)",
    desc:
      "Team project building a drone system that detects & classifies heat signatures using on‑board vision and thermal‑image processing. Built navigation and CV pipeline prototypes.",
    tags: ["Computer Vision", "Robotics"],
    links: [],
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    title: "Reward Points Management System",
    desc:
      "Web app + SQLite/Flask backend to track & visualize student reward data; collaborated with teacher on UX and feature set; actively used in classes.",
    tags: ["Flask", "SQLite", "Data Viz"],
    links: [
      { href: "https://github.com/MatthiasMasiero/CompSci-RP-Website", label: "Repo (frontend)" },
    ],
    icon: <Star className="w-5 h-5" />,
  },
  {
    title: "F1‑Website",
    desc: "Responsive storefront concept with product cards and modern layout.",
    tags: ["HTML", "CSS", "UI"],
    links: [{ href: "https://github.com/MatthiasMasiero/F1-Website", label: "GitHub" }],
    icon: <Globe className="w-5 h-5" />,
  },

  {
    title: "Sports Science Internship (Coming Soon)",
    desc: "Machine learning-based analytics platform for injury prediction and load optimization in collegiate soccer. Full case study coming soon.",
    tags: ["Machine Learning", "Sports Analytics", "Python", "AWS"],
    links: [],
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    title: "This Website!",
    desc:
      "The code for my React + Vite + Tailwind portfolio with framer-motion animations, ambient background, and smooth-scrolling sections.",
    tags: ["React", "Vite", "Tailwind", "Framer Motion"],
    links: [
      { href: "https://github.com/MatthiasMasiero/Portfolio", label: "GitHub" },
    ],
    icon: <Globe className="w-5 h-5" />,
  },
];

const QUANTUM = [
  {
    title: "GHZ-Interference",
    desc:
      "Prepare a 4‑qubit GHZ state and sweep phase to visualize interference. Exports CSV and includes plot‑ready data.",
    tags: ["Qiskit", "IBM Quantum", "GHZ"],
    links: [
      { href: "https://github.com/MatthiasMasiero/GHZ-Interference", label: "GitHub" },
    ],
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    title: "GroverAlgorithmDemo",
    desc:
      "Classic Grover search demo (3‑qubit) showing oracle design and amplitude amplification with OpenQASM/Qiskit assets.",
    tags: ["Grover", "Qiskit", "OpenQASM"],
    links: [
      { href: "https://github.com/MatthiasMasiero/GroverAlgorithmDemo", label: "GitHub" },
    ],
    icon: <Cpu className="w-5 h-5" />,
  },
];

const EXPERIENCE = [
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

const EDUCATION = [
  {
    school: "Santa Clara University",
    degree: "B.S. in Computer Science, Minor in Physics",
    year: "2028",
  },
];

// ---- UI ---------------------------------------------------------------------
function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm bg-white/5 border-white/10 backdrop-blur">
      {children}
    </span>
  );
}

function ProjectCard({ p }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <Card className="bg-white/5 border-white/10 hover:bg-white/20 transition-colors h-full">
        <CardContent className="p-4 md:p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3 text-lg font-semibold">
            <div className="flex items-center justify-center w-5 h-5">
              {React.isValidElement(p.icon)
                ? React.cloneElement(p.icon, { className: "w-5 h-5 text-white", strokeWidth: 2 })
                : p.icon}
            </div>
            <span>{p.title}</span>
          </div>
          <p className="text-white/70 text-sm">{p.desc}</p>
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t, i) => (
              <Chip key={i}>{t}</Chip>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-1">
            {p.links?.map((l, i) => (
              <Button key={i} asChild variant="secondary" className="h-9">
                <a href={l.href} target="_blank" rel="noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" /> {l.label}
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function Header() {
  return (
    <header className="relative overflow-hidden">
      {/* Removed static gradient overlay */}
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 relative">
        <nav className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 font-extrabold">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 shadow-[0_0_0_6px_rgba(167,139,250,.18)]" />
            {PROFILE.name}
          </div>
          <div className="relative max-w-full md:max-w-none">
            <div className="flex items-center gap-2 overflow-x-auto md:overflow-visible no-scrollbar md:no-scrollbar:px-0 px-1 whitespace-nowrap md:whitespace-normal snap-x md:snap-none snap-mandatory">
              <Button variant="secondary" asChild className="snap-start md:snap-none">
                <a href={PROFILE.links.github} target="_blank" rel="noreferrer">
                  <Github className="w-4 h-4 mr-2" /> GitHub
                </a>
              </Button>
              <Button variant="secondary" asChild className="snap-start md:snap-none">
                <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </a>
              </Button>
              <Button variant="secondary" asChild className="snap-start md:snap-none">
                <a href="#projects">
                  <span className="mr-1 font-mono text-xs">&lt;/&gt;</span>
                  Projects
                </a>
              </Button>
              <Button variant="secondary" asChild className="snap-start md:snap-none">
                <a href="#quantum">
                  <span className="mr-1 text-xs leading-none align-middle">|ψ⟩</span>
                  Quantum
                </a>
              </Button>
            </div>
          </div>
        </nav>
        <div className="grid md:grid-cols-12 gap-5 mt-8">
          <motion.div
            className="md:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-white/60 font-semibold">
              Computer Science @ Santa Clara University
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight mt-2">
              {PROFILE.tagline}
            </h1>
            <p className="text-white/70 mt-3 max-w-prose">{PROFILE.summary}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "ML & Data",
                "Serverless",
                "Sports Analytics",
                "Quantum (IBM Q)",
                "AWS",
              ].map((t, i) => (
                <Chip key={i}>{t}</Chip>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              <Button asChild variant="secondary">
                <a href="#projects">
                  <span className="mr-1 font-mono text-sm">&lt;/&gt;</span>
                  See Projects
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="#quantum">
                  <span className="mr-1 text-xs leading-none align-middle">|ψ⟩</span>
                  See Quantum
                </a>
              </Button>
              {PROFILE.links.resume !== "#" && (
                <Button asChild>
                  <a href={PROFILE.links.resume} download target="_blank" rel="noreferrer">
                    <Download className="w-4 h-4 mr-2" /> Resume
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
          <motion.div
            className="md:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 backdrop-blur"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="text-sm font-semibold mb-2">Quick Contacts</div>
            <div className="space-y-2 text-sm text-white/80">
              <a className="flex items-center gap-2" href={`mailto:${PROFILE.email}`}>
                <Mail className="w-4 h-4" /> {PROFILE.email}
              </a>
              <a className="flex items-center gap-2" href={`tel:${PROFILE.phone}`}>
                <Phone className="w-4 h-4" /> {PROFILE.phone}
              </a>
              <a className="flex items-center gap-2" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a className="flex items-center gap-2" href={PROFILE.links.github} target="_blank" rel="noreferrer">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

function Skills() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 font-semibold mb-3">
            <Globe className="w-4 h-4" /> Languages
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILLS.languages.map((s, i) => (
              <Chip key={i}>{s}</Chip>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 font-semibold mb-3">
            <Cpu className="w-4 h-4" /> Tools & Platforms
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILLS.tools.map((s, i) => (
              <Chip key={i}>{s}</Chip>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Experience() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {EXPERIENCE.map((e, idx) => (
        <Card key={idx} className="bg-white/5 border-white/10">
          <CardContent className="p-5">
            <div className="font-semibold">{e.org}</div>
            <div className="text-xs text-white/60">{e.when}</div>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-white/80">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}


function Education() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {EDUCATION.map((ed, i) => (
        <Card key={i} className="bg-white/5 border-white/10">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 font-semibold">
              <GraduationCap className="w-4 h-4" /> {ed.school}
            </div>
            <div className="text-sm text-white/70">{ed.degree}</div>
            <div className="text-xs text-white/60">Class of {ed.year}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// --- Quantum superposition cards -------------------------------------------
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function QuantumCard({ p, index, onHover, onLeave, onMeasure }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const [hovering, setHovering] = React.useState(false);
  const isMobile = useIsMobile();

  const makeTarget = React.useCallback(() => {
    const angle = rand(0, Math.PI * 2);
    const rTilt = rand(7, 11);   // degrees (slightly larger tilt)
    const rMove = rand(5, 9);    // px (slightly larger drift)
    const rDepth = rand(-70, 70); // px in Z for in/out of screen
    const rScale = rand(0.985, 1.03); // subtle size change
    return {
      rotateX: Math.sin(angle) * rTilt,
      rotateY: Math.cos(angle) * rTilt,
      rotateZ: rand(-4, 4),
      x: Math.cos(angle) * rMove,
      y: Math.sin(angle) * rMove,
      z: rDepth,
      scale: rScale,
    };
  }, []);

  const [pose, setPose] = React.useState(makeTarget);
  const [dur, setDur] = React.useState(() => rand(1.3, 2.1));

  // Continuously re-target to new points on the circle; do not return to center.
  React.useEffect(() => {
    if (collapsed) return; // stop re-targeting once measured by click
    let timerId;
    const loop = () => {
      const nextDur = rand(1.3, 2.1);
      setDur(nextDur);
      setPose(makeTarget());
      timerId = setTimeout(loop, nextDur * 1000);
    };
    timerId = setTimeout(loop, dur * 1000);
    return () => clearTimeout(timerId);
  }, [collapsed, dur, makeTarget]);

  const measuredStyle = {
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    x: 0,
    y: 0,
    boxShadow: "0 0 0 rgba(0,0,0,0)",
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 170, damping: 18, mass: 0.7 },
  };

  // In superposition: always animate toward the latest pose with blur; no mid-way return.
  const superAnim = {
    ...pose, // includes rotateX/rotateY/rotateZ/x/y/z/scale
    boxShadow: "0 0 90px rgba(167,139,250,.17)",
    filter: "blur(2.25px)",
  };

  return (
    <motion.div
      style={{ transformStyle: "preserve-3d" }}
      animate={collapsed ? measuredStyle : superAnim}
      transition={collapsed ? measuredStyle.transition : { duration: dur, ease: "easeInOut" }}
      whileHover={measuredStyle}
      className="will-change-transform"
      onClick={() => { setCollapsed(true); onMeasure && onMeasure(index); }}
      onMouseEnter={() => { setHovering(true); onHover && onHover(); }}
      onMouseLeave={() => { setHovering(false); onLeave && onLeave(); }}
    >
      <div className="relative">
        <ProjectCard p={p} />
        {!collapsed && hovering && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.12 }}
            className="absolute -top-2 left-2 z-20 pointer-events-none text-[11px] px-2 py-1 rounded-md bg-black/70 border border-white/10 shadow-lg backdrop-blur"
          >
            {isMobile ? 'Tap to measure qubit' : 'Click to measure qubit'}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function QuantumGrid({ items }) {
  const [focused, setFocused] = React.useState(null);
  const [measured, setMeasured] = React.useState(false);
  const isMobile = useIsMobile();
  const prefersReduced = usePrefersReducedMotion();

  function buildSinePath(W, H, amp, phase, periods = 3, cy = H / 2) {
    const steps = 480;
    const twoPi = Math.PI * 2;
    let d = "";
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = t * W;
      const y = cy + amp * Math.sin(phase + t * periods * twoPi);
      d += (i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`);
    }
    return d;
  }

  const waveCount = prefersReduced ? (measured ? 1 : 8) : (measured ? 1 : (isMobile ? 14 : 28));

  return (
    <div className="relative [perspective:1200px]">
      <style>{`
        @keyframes waveShiftX { 0% { transform: translateX(0); } 100% { transform: translateX(-2400px); } }
      `}</style>

      {/* Full-section wave field (farther behind) */}
      <svg
        className="pointer-events-none absolute inset-0 -z-30 w-full h-full"
        viewBox="0 0 2400 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {Array.from({ length: waveCount }).map((_, i) => {
          const H = isMobile ? 560 : 800;   // shorter canvas on mobile
          const W = 2400;                   // >2x viewport width for seamless slide
          const rowY = ((i + 1) / (waveCount + 1)) * H; // spread vertically across full height
          const baseAmp = measured ? (isMobile ? 34 : 40) : (isMobile ? 22 : 28); // tune amplitude for mobile
          const ampJitter = measured ? 0 : (i % 5) * 1.5;
          const amp = baseAmp + ampJitter;
          const periods = measured ? 6 : 6;           // integer periods to ensure seamless tiling
          const phase = (i * Math.PI) / 10;             // phase offset per line
          const d = buildSinePath(W, H, amp, phase + (rowY / H) * Math.PI, periods, rowY);

          const colorsIdle = [
            "rgba(167,139,250,.18)",
            "rgba(110,231,255,.16)",
            "rgba(59,130,246,.14)",
            "rgba(236,72,153,.12)",
            "rgba(14,165,233,.12)",
          ];
          const stroke = measured ? "rgba(167,139,250,.32)" : colorsIdle[i % colorsIdle.length];
          const strokeWidth = measured ? 2.4 : 1.2 + (i % 3) * 0.2;
          const duration = prefersReduced ? 999 : (measured ? (isMobile ? 11 : 10) : (isMobile ? 9.5 : 8 + (i % 7) * 0.6));
          const delay = (i % 9) * 0.08;

          return (
            <g key={i} style={ prefersReduced ? {} : { animation: `waveShiftX ${duration}s linear infinite`, animationDelay: `${delay}s` } }>
              <path d={d} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="butt" />
              <path d={d} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="butt" transform={`translate(${W}, 0)`} />
            </g>
          );
        })}
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 relative z-10">
        {items.map((p, i) => (
          <QuantumCard
            key={i}
            index={i}
            p={p}
            onHover={() => setFocused(i)}
            onLeave={() => setFocused(null)}
            onMeasure={() => setMeasured(true)}
          />
        ))}
      </div>
    </div>
  );
}
// ---------------------------------------------------------------------------

export default function App() {
  return (
    <div className="relative min-h-screen text-white bg-[#0b0d10] overflow-hidden">
      <SmoothScrollStyles />
      <AnimatedBackground />
      <div className="relative z-20">
        <Header />

        <Section id="projects" title="Selected Projects">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {PROJECTS.map((p, i) => (
              <ProjectCard p={p} key={i} />
            ))}
          </div>
        </Section>

        <Section id="quantum" title="Quantum">
          <QuantumGrid items={QUANTUM} />
        </Section>

        <Section id="skills" title="Skills">
          <Skills />
        </Section>

        <Section id="experience" title="Experience & Leadership">
          <Experience />
        </Section>

        <Section id="education" title="Education">
          <Education />
        </Section>

        <footer className="max-w-6xl mx-auto px-4 pb-10">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind, and framer-motion.
          </div>
        </footer>
      </div>
    </div>
  );
}
