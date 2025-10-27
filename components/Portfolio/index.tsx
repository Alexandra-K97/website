"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  id: string;
}
const PROJECT = [
  {
    src: "/img/winesite.png",
    alt: "winesite",
    width: 500,
    height: 300,
    technologies: "HTML5, CSS3",
  },
  {
    src: "/img/projectone.png",
    alt: "projectone",
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
    alt: "programmingschool",
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
    alt: "winesite",
    width: 500,
    height: 300,
    technologies: "HTML5, CSS3, React, Next.js, TypeScript, Tailwind CSS",
  },
];
const Portfolio: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className="min-h-screen  ">
      <div className=" container ">
        <div className="flex flex-col gap-10 items-center  max-sm:items-center">
          {PROJECT.map((icon, index) => (
            <motion.div
              key={index}
              className="origin-center max-w-2xl"
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 1.1 }}
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
                className="object-cover rounded-xl"
              />

              <a className=" p-3 flex gap-4 max-md:flex-wrap">
                {icon.technologies.split(", ").map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-1 text-xs text-white bg-slate-950 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
