import Image from "next/image";

interface Props {
  id: string;
}
const SKILLS_ICONS = [
  {
    src: "/icons/html.svg",
    alt: "HTML5",
    width: 150,
    height: 150,
  },
  {
    src: "/icons/css.svg",
    alt: "CSS",
    width: 150,
    height: 150,
  },
  {
    src: "/icons/js.svg",
    alt: "JS",
    width: 190,
    height: 190,
  },
  {
    src: "/icons/react.svg",
    alt: "REACT",
    width: 196,
    height: 190,
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
    width: 166,
    height: 169,
  },
  {
    src: "/icons/ts.svg",
    alt: "TS",
    width: 166,
    height: 169,
  },
  {
    src: "/icons/git.svg",
    alt: "git",
    width: 190,
    height: 190,
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
    height: 100,
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
    width: 110,
    height: 100,
  },
];
const Skills: React.FC<Props> = ({ id }) => {
  return (
    <div
      id={id}
      className=" bg-[#ffffff] py-8  min-h-screen relative max-sm:min-h-[60vh]"
    >
      <div className="container grid grid-cols-3 gap-5 justify-items-center align-items-center  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  max-sm:grid-cols-1  max-sm:overflow-y-auto max-sm:h-96 ">
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
      <div className="absolute bottom-4 right-4 max-sm:hidden">
        <a
          href="/documents/резюме frontend-разработчик.pdf"
          download="Резюме.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full h-40 w-40 pt-16 pl-2 block bg-red-500 text-white text-base transition-all duration-500 hover:bg-white hover:text-slate-950"
        >
          Подробнее обо мне
        </a>
      </div>
      <div className="absolute -bottom-7 right-4 sm:hidden">
        <a
          href="/documents/резюме frontend-разработчик.pdf"
          download="Резюме.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full py-5 px-5 bg-red-500 text-white transition-all duration-500 hover:bg-white hover:text-slate-950 text-center"
        >
          Подробнее обо мне
        </a>
      </div>
    </div>
  );
};
export default Skills;
