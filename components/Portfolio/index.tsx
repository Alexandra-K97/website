"use client";
import Image from "next/image";
import { motion } from "framer-motion";
interface Props {
  id: string;
}
const PROJECT = [
  {
    src: "/img/winesite.png",
    alt: "wine Site",
    width: 500,
    height: 300,
    technologies: "HTML5, CSS3",
  },
  {
    src: "/img/projectone.png",
    alt: "easy solutions",
    width: 500,
    height: 300,
    technologies: "HTML5, CSS3",
  },
  {
    src: "/img/shop.png",
    alt: "shop",
    width: 500,
    height: 300,
    technologies: "HTML5, CSS3",
  },
  {
    src: "/img/programmingschool.png",
    alt: "programming school",
    width: 500,
    height: 300,
    technologies: "HTML5, CSS3, JavaScript",
  },
  {
    src: "/img/simple.png",
    alt: "simple",
    width: 500,
    height: 300,
    technologies: "HTML5, CSS3, React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    src: "/img/projecttwo.png",
    alt: "shifTon",
    width: 500,
    height: 300,
    technologies: "HTML5, CSS3, React, Next.js, TypeScript, Tailwind CSS",
  },
];
const Portfolio: React.FC<Props> = ({ id }) => {
  return (
    <div
      id={id}
      className="min-h-screen bg-gradient-to-br from-blue-500 via-cyan-300 to-cyan-100  py-16"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-4xl font-bold text-slate-800 mb-4">
            Мои проекты
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Вот некоторые из моих работ, созданных с использованием современных
            технологий
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECT.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300" />
              </div>
              <div className="p-6">
                <p className="text-xl font-semibold text-slate-800 mb-3 capitalize">
                  {project.alt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.split(", ").map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + techIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl -z-10"></div>
      </div>
    </div>
  );
};
export default Portfolio;
