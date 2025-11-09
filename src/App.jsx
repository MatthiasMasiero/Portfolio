import { PROFILE, PROJECTS, QUANTUM } from "./constants/data";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { CursorRipples } from "./components/CursorRipples";
import { SmoothScrollStyles } from "./components/SmoothScrollStyles";
import { Header } from "./components/Header";
import { Section } from "./components/ui/Section";
import { ProjectCard } from "./components/ProjectCard";
import { QuantumGrid } from "./components/QuantumGrid";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";

export default function App() {
  return (
    <div className="relative min-h-screen text-white bg-[#0b0d10] overflow-hidden">
      <SmoothScrollStyles />
      <AnimatedBackground />
      <CursorRipples />
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
            © {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind, and
            framer-motion.
          </div>
        </footer>
      </div>
    </div>
  );
}
