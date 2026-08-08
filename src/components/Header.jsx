import { motion } from "framer-motion";
import { Github, Linkedin, Download, Mail } from "lucide-react";
import { PROFILE } from "../constants/data";
import { Button } from "./ui/Button";
import { Chip } from "./ui/Chip";

export function Header() {
  return (
    <header className="relative overflow-hidden">
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
            className="md:col-span-7 glass p-6"
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
            className="md:col-span-5 glass p-5 md:p-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="flex flex-col items-center mb-5">
              <img
                src="/Headshot.jpg"
                alt={PROFILE.name}
                className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover object-[center_top] border-2 border-white/20 shadow-lg mb-4"
                style={{ objectPosition: "center 30%" }}
              />
              <div className="text-center">
                <div className="font-semibold text-base md:text-lg text-white mb-1">
                  {PROFILE.name}
                </div>
                <div className="text-xs md:text-sm text-white/60">
                  Computer Science Student
                </div>
                <div className="text-xs text-white/50 mt-1">
                  {PROFILE.location}
                </div>
              </div>
            </div>
            <div className="text-sm font-semibold mb-2">Quick Contacts</div>
            <div className="space-y-2 text-sm text-white/80">
              <a className="flex items-center gap-2" href={`mailto:${PROFILE.email}`}>
                <Mail className="w-4 h-4" /> {PROFILE.email}
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

