import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PROFILE, PROJECTS, QUANTUM } from "./constants/data";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { CursorRipples } from "./components/CursorRipples";
import { ClickRipple } from "./components/ClickRipple";
import { SmoothScrollStyles } from "./components/SmoothScrollStyles";
import { Header } from "./components/Header";
import { Section } from "./components/ui/Section";
import { ProjectCard } from "./components/ProjectCard";
import { QuantumGrid } from "./components/QuantumGrid";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";

export default function App() {
  const [cursorEffectsEnabled, setCursorEffectsEnabled] = useState(true);
  const [clickEffectsEnabled, setClickEffectsEnabled] = useState(true);
  const [quantumEffectsEnabled, setQuantumEffectsEnabled] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white bg-[#0b0d10] overflow-hidden">
      <SmoothScrollStyles />
      <AnimatedBackground />
      {cursorEffectsEnabled && <CursorRipples />}
      <ClickRipple enabled={clickEffectsEnabled} />
      <div className="relative z-20">
        {/* Dropdown Menu */}
        <div
          className="fixed top-4 right-4 z-50"
          data-dropdown-menu
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 rounded-lg backdrop-blur-md border border-white/20 transition-colors flex items-center gap-2">
            Disable Features
            <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full right-0 pt-2 w-56">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden shadow-xl">
              {/* Cursor Effects Toggle */}
              <div
                onClick={() => setCursorEffectsEnabled(!cursorEffectsEnabled)}
                className="px-4 py-3 hover:bg-white/10 cursor-pointer transition-colors flex items-center justify-between"
              >
                <span className="text-sm font-medium">Cursor Effects</span>
                <div
                  className={`w-3 h-3 rounded-full transition-all ${
                    cursorEffectsEnabled
                      ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                      : "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                  }`}
                />
              </div>

              {/* Click Effects Toggle */}
              <div
                onClick={() => setClickEffectsEnabled(!clickEffectsEnabled)}
                className="px-4 py-3 hover:bg-white/10 cursor-pointer transition-colors flex items-center justify-between border-t border-white/10"
              >
                <span className="text-sm font-medium">Click Effects</span>
                <div
                  className={`w-3 h-3 rounded-full transition-all ${
                    clickEffectsEnabled
                      ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                      : "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                  }`}
                />
              </div>

              {/* Quantum Effects Toggle */}
              <div
                onClick={() => setQuantumEffectsEnabled(!quantumEffectsEnabled)}
                className="px-4 py-3 hover:bg-white/10 cursor-pointer transition-colors flex items-center justify-between border-t border-white/10"
              >
                <span className="text-sm font-medium">Quantum Effects</span>
                <div
                  className={`w-3 h-3 rounded-full transition-all ${
                    quantumEffectsEnabled
                      ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                      : "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                  }`}
                />
              </div>
              </div>
            </div>
          )}
        </div>
        <Header />

        <Section id="projects" title="Selected Projects">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {PROJECTS.map((p, i) => (
              <ProjectCard p={p} key={i} />
            ))}
          </div>
        </Section>

        <Section id="quantum" title="Quantum">
          <QuantumGrid items={QUANTUM} effectsEnabled={quantumEffectsEnabled} />
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
