import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";
import { ProjectCard } from "./ProjectCard";

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export function QuantumCard({ p, index, onHover, onLeave, onMeasure, resetTrigger, effectsEnabled = true }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const [hovering, setHovering] = React.useState(false);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    if (resetTrigger > 0) {
      setCollapsed(false);
    }
  }, [resetTrigger]);

  const makeTarget = React.useCallback(() => {
    const angle = rand(0, Math.PI * 2);
    const rTilt = rand(7, 11);
    const rMove = rand(5, 9);
    const rDepth = rand(-70, 70);
    const rScale = rand(0.985, 1.03);
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

  React.useEffect(() => {
    if (collapsed || !effectsEnabled) return;
    let timerId;
    const loop = () => {
      const nextDur = rand(1.3, 2.1);
      setDur(nextDur);
      setPose(makeTarget());
      timerId = setTimeout(loop, nextDur * 1000);
    };
    timerId = setTimeout(loop, dur * 1000);
    return () => clearTimeout(timerId);
  }, [collapsed, dur, makeTarget, effectsEnabled]);

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

  const superAnim = {
    ...pose,
    boxShadow: "0 0 90px rgba(167,139,250,.17)",
    filter: "blur(2.25px)",
  };

  return (
    <motion.div
      style={{ transformStyle: "preserve-3d" }}
      animate={collapsed || !effectsEnabled ? measuredStyle : superAnim}
      transition={
        collapsed || !effectsEnabled
          ? measuredStyle.transition
          : { duration: dur, ease: "easeInOut" }
      }
      whileHover={measuredStyle}
      className="will-change-transform"
      onClick={() => {
        setCollapsed(true);
        onMeasure && onMeasure(index);
      }}
      onMouseEnter={() => {
        setHovering(true);
        onHover && onHover();
      }}
      onMouseLeave={() => {
        setHovering(false);
        onLeave && onLeave();
      }}
    >
      <div className="relative">
        <ProjectCard p={p} />
        {!collapsed && hovering && effectsEnabled && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.12 }}
            className="absolute -top-2 left-2 z-20 pointer-events-none text-[11px] px-2 py-1 rounded-md bg-black/70 border border-white/10 shadow-lg backdrop-blur"
          >
            {isMobile ? "Tap to measure qubit" : "Click to measure qubit"}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

