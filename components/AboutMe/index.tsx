"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
interface Props {
  id: string;
}

const WORK = [
  {
    id: 1,
    company: "Стартап в сфере e-commerce разработки",
    position: "HTML - верстальщик",
    period: "Август 2025 - Сентябрь 2025",
    project: "Визитная карточка компании",
    responsibilities: [
      "Адаптивная и кроссбраузерная верстка по Figma",
      "Оптимизация графики для ускорения загрузки",
      "Базовая интеграция в WordPress",
      "Деплой проекта (хостинг, FTP)",
      "Сдача работы в срок",
    ],
  },
  {
    id: 2,
    company: "Наставничество и самостоятельное освоение технологий",
    position: "Frontend-разработчик",
    period: "Январь 2024 - Июль 2025",
    project: "Кейсы освоения технологий",
    responsibilities: [
      "Разработка адаптивных интерфейсов по макетам Figma",
      "Создание компонентов на React/TypeScript и Next.js",
      "Освоение полного стека фронтенд-разработки",
      "Работа с современными инструментами и документацией",
    ],
  },
  {
    id: 3,
    company: "Яндекс Практикум",
    position: "Веб-Разработчик (junior) Вводный модуль",
    period: "Ноябрь 2023 - Декабрь 2023",
    project: "Демо-проект",
    responsibilities: [
      "Создание семантической HTML-разметки в соответствии со стандартами",
      "Разработка и применение CSS-стилей",
      "Использование основных HTML-тегов и CSS-правил для построения веб-страниц",
    ],
  },
];
const AboutMe: React.FC<Props> = ({ id }) => {
const ref = useRef(null);
const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <div id={id} className="bg-[#ffffff] py-8 max-sm:min-h-[50vh]" ref={ref}>
      <div className="container">
        {/* Заголовок */}
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-black text-5xl font-bold text-center mt-24 max-[650px]:text-2xl">
            Профессиональный опыт
          </h1>
        </motion.div>

        {/* Список опыта работы */}
        <div className="mt-6 space-y-12 flex items-center flex-col max-[650px]:space-y-8">
          {WORK.map(
            (
              { company, position, period, project, responsibilities },
              index
            ) => (
              <motion.div
                key={index}
                className="w-[650px] max-[650px]:w-full"
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 1.2,
                }}
              >
                {/* Блок всей информации */}
                <div className="space-y-6 max-[650px]:space-y-4">
                  {/* Название компании */}
                  <h3 className="text-slate-950 text-2xl font-semibold text-center max-[650px]:text-xl">
                    {company}
                  </h3>

                  {/* Должность и период */}
                  <p className="text-blue-600 text-lg font-semibold text-center max-[650px]:text-base">
                    {position} | {period}
                  </p>

                  {/* Проект */}
                  <p className="text-blue-600 text-base font-semibold text-center">
                    Проект: {project}
                  </p>

                  {/* Список обязанностей */}
                  <ul className="list-disc list-inside space-y-3 max-[650px]:text-base">
                    {responsibilities.map(
                      (responsibility, responsibilityIndex) => (
                        <li key={responsibilityIndex}>{responsibility}</li>
                      )
                    )}
                  </ul>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
