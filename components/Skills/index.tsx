"use client";
import Image from "next/image";
import ProgressBar from "../ProgressBar";

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
    alt: "REACT",
    width: 90,
    height: 90,
  },
  {
    src: "/icons/next.js.svg",
    alt: "NEXT.js",
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
    alt: "git",
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
    alt: "WORDPRESS",
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
    alt: "Versel",
    width: 100,
    height: 100,
  },
];
const Skills: React.FC<Props> = ({ id }) => {
  return (
    <div
      id={id}
      className=" bg-[#ffffff] py-8  min-h-screen flex items-center justify-center max-sm:min-h-[60vh]"
    >
      <div className="flex  items-center gap-24">
        <div className="container grid grid-cols-3 gap-14 justify-items-center align-items-center max-sm:grid-cols-1  max-sm:overflow-y-auto max-sm:h-96 ">
          {SKILLS_ICONS.map((icon, index) => (
            <Image
              key={index}
              src={icon.src}
              alt={icon.alt}
              width={icon.width}
              height={icon.height}
              className="mb-10"
            />
          ))}
        </div>

        <div>
          <ProgressBar />
        </div>
      </div>
    </div>
  );
};
export default Skills;
