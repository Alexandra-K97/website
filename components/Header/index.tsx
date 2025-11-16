"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const LINKS = [
  { name: "Обо мне", href: "#top" },
  { name: "Навыки", href: "#skills" },
  { name: "Проекты", href: "#portfolio" },
  { name: "Контакты", href: "#contacts" },
];
const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState(-1);
  const [MenuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sky-400 backdrop-blur-sm shadow-lg">
      <div className="container pt-3 pb-3 flex justify-end gap-16 text-[#ffffff] text-base font-medium max-sm:hidden">
        {LINKS.map(({ name, href }, i) => (
          <a
            key={i}
            href={href}
            className={twMerge(
              " text-slate-950 transition-all duration-500",
              activeLink === i
                ? "no-underline text-slate-950"
                : "hover:text-white hover:no-underline hover:underline-offset-4"
            )}
            onClick={() => setActiveLink(i)}
          >
            {name}
          </a>
        ))}
      </div>

      <div
        className={twMerge(
          "absolute top-full left-0 right-0 bg-sky-400 shadow-lg transition-all duration-300 sm:hidden",
          MenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="container py-4 flex flex-col gap-4">
          {LINKS.map(({ name, href }, i) => (
            <a
              key={i}
              href={href}
              className={twMerge(
                "text-white py-2 px-4 transition-all duration-500 text-lg ",
                activeLink === i
                  ? "no-underline text-slate-950 bg-white rounded-lg"
                  : "hover:text-slate-950 hover:no-underline"
              )}
              onClick={() => {
                setActiveLink(i);
                setMenuOpen(false);
              }}
            >
              {name}
            </a>
          ))}
        </div>
      </div>
      <button
        className="sm:hidden flex flex-col justify-center items-center w-8 h-8 text-white"
        onClick={() => setMenuOpen(!MenuOpen)}
      >
        <span
          className={twMerge(
            "block w-6 h-0.5 bg-white transition-all duration-300",
            MenuOpen ? "rotate-45 translate-y-2" : ""
          )}
        />
        <span
          className={twMerge(
            "block w-6 h-0.5 bg-white transition-all duration-300 mt-1.5",
            MenuOpen ? "opacity-0" : ""
          )}
        />
        <span
          className={twMerge(
            "block w-6 h-0.5 bg-white transition-all duration-300 mt-1.5",
            MenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          )}
        />
      </button>
    </header>
  );
};
export default Header;
