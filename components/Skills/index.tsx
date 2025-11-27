"use client";
import Image from "next/image";
import ProgressBar from "../ProgressBar";
import { motion } from "framer-motion";
interface Props {
  id: string;
}
const SKILLS_ICONS = [
  {
    src: "/icons/html.svg",
    alt: "HTML5",
    width: 80,
    height: 80,
  },
  {
    src: "/icons/css.svg",
    alt: "CSS",
    width: 80,
    height: 80,
  },
  {
    src: "/icons/js.svg",
    alt: "JS",
    width: 90,
    height: 90,
  },
  {
    src: "/icons/react.svg",
    alt: "React",
    width: 90,
    height: 90,
  },
  {
    src: "/icons/next.js.svg",
    alt: "Next.js",
    width: 100,
    height: 100,
  },
  {
    src: "/icons/nodejs.svg",
    alt: "Node.js",
    width: 80,
    height: 80,
  },
  {
    src: "/icons/ts.svg",
    alt: "TS",
    width: 80,
    height: 80,
  },
  {
    src: "/icons/git.svg",
    alt: "Git",
    width: 90,
    height: 90,
  },
  {
    src: "/icons/php.svg",
    alt: "PHP",
    width: 100,
    height: 180,
  },
  {
    src: "/icons/wordpress.svg",
    alt: "Wordpress",
    width: 90,
    height: 90,
  },
  {
    src: "/icons/tailwind.svg",
    alt: "Tailwind",
    width: 100,
    height: 100,
  },
  {
    src: "/icons/versel.svg",
    alt: "Vercel",
    width: 100,
    height: 100,
  },
  {
    src: "/icons/cursor.svg",
    alt: "Cursor",
    width: 100,
    height: 100,
  },
];
const Skills: React.FC<Props> = ({ id }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };
  return (
    <div
      id={id}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-cyan-400 to-cyan-400 py-16"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-5xl font-bold text-[#ffffff]  mb-4">
            Навыки & Технологии
          </p>
          <p className="text-lg text-[#ffffff] max-w-2xl mx-auto">
            Технологии и инструменты, которые я использую для создания
            современных веб-приложений
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-8 lg:gap-10 flex-1"
          >
            {SKILLS_ICONS.map((icon, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.15,
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="flex flex-col items-center group"
              >
                <div className="relative p-6 bg-white rounded-2xl shadow-lg border border-slate-200/60 hover:shadow-2xl transition-all duration-300 group-hover:bg-slate-50">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                    className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="mt-4 text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                  {icon.alt}
                </span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-1 max-w-lg w-full"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <ProgressBar />
            </div>
          </motion.div>
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      </div>
    </div>
  );
};
export default Skills;
