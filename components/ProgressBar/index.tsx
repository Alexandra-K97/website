"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
const skillsData = [
  { name: "HTML/CSS", level: 60, color: "#f97316" },
  { name: "JavaScript", level: 30, color: "#3b82f6" },
  { name: "React", level: 30, color: "#06b6d4" },
  { name: "TypeScript", level: 30, color: "#2563eb" },
  { name: "Next.js", level: 10, color: "#000000" },
  { name: "WordPress", level: 40, color: "#21759b" },
  { name: "PHP", level: 30, color: "#777bb4" },
];
const ProgressBar: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });
  const [forceAnimate, setForceAnimate] = useState(false);
  const isActive = isInView || forceAnimate;
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#skills") {
        setForceAnimate(true);
        setTimeout(() => setForceAnimate(false), 2000);
      }
    };
    if (window.location.hash === "#skills") {
      setForceAnimate(true);
      setTimeout(() => setForceAnimate(false), 2000);
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
    <div ref={ref} className="w-full max-w-2xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        {skillsData.map((skill, index) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            index={index}
            isActive={isActive}
          />
        ))}
      </motion.div>
    </div>
  );
};
interface SkillBarProps {
  skill: (typeof skillsData)[0];
  index: number;
  isActive: boolean;
}
const SkillBar: React.FC<SkillBarProps> = ({ skill, index, isActive }) => {
  const spring = useSpring(0, { stiffness: 100, damping: 30 });
  const width = useTransform(spring, (value) => `${value}%`);
  useEffect(() => {
    if (isActive) {
      spring.set(skill.level);
    } else {
      spring.set(0);
    }
  }, [isActive, skill.level, spring]);
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-slate-800 min-w-24">
          {skill.name}
        </span>
        <motion.span
          className="text-sm font-bold text-slate-700"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
        <motion.div
          style={{
            width,
            backgroundColor: skill.color,
          }}
          className="h-full rounded-full relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={isActive ? { x: "100%" } : { x: "-100%" }}
            transition={{
              delay: index * 0.1 + 0.8,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
export default ProgressBar;
