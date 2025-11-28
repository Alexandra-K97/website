"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  id: string;
}
const TOUCH = [
  {
    title: "Telegram",
    description: "@First_161",
    icon: "/icons/tg.svg",
    color: "from-sky-500/20 to-sky-500/5",
    url: "https://t.me/First_161",
  },
  {
    title: "GitHub",
    description: "Alexandra-K97",
    icon: "/icons/github.svg",
    color: "from-slate-800/40 to-slate-900/10",
    url: "https://github.com/Alexandra-K97",
  },
];

const Contacts: React.FC<Props> = ({ id }) => {
  return (
    <div
      id={id}
      className="py-16 bg-gradient-to-br from-blue-500 via-cyan-400 to-cyan-400"
    >
      <div className="container grid gap-8 md:grid-cols-2">
        {TOUCH.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br p-6 shadow-2xl"
            whileHover={{ y: -6 }}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/10" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={42}
                  height={42}
                />
              </div>
              <div>
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-slate-200">{item.description}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      <p className="text-xs pt-8 text-center">
        *Сайт-Портфолио был реализован самостоятельно.Дополнительно
        использовался Cursor в качестве помощника для генерации фрагментов кода
        и решения конкретных задач.
      </p>
    </div>
  );
};
export default Contacts;
