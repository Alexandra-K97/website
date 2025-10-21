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
  return (
    <div id={id} className="bg-[#ffffff] py-8 min-h-screen max-sm:min-h-[50vh]">
      <div className="container">
        <div>
          <p className="text-[#000000] text-5xl font-bold tracking-[0.4px] text-center mt-24 max-[650px]:text-2xl ">
            Профессиональный опыт
          </p>
        </div>
        <div className="mt-6 space-y-20 flex items-center flex-col max-[650px]:mt-4  max-[650px]:space-y-10">
          {WORK.map(
            ({ company, position, period, project, responsibilities }, id) => (
              <div
                key={id}
                className="space-y-10 w-[650px] max-[650px]:space-y-5 max-[650px]:w-full"
              >
                <p className="text-slate-950 text-3xl font-semibold text-center max-[650px]:text-xl  max-[440px]:text-base">
                  {company}
                </p>
                <p className="text-lg font-semibold text-center text-blue-600 max-[650px]:text-base max-[440px]:text-xs">
                  {position} | {period}
                </p>
                <p className="text-blue-600 text-base font-semibold text-center max-[440px]:text-sm">
                  Проект: {project}
                </p>
                <ul className="list-disc list-inside space-y-5 max-[650px]:text-base max-[650px]:w-full max-[440px]:text-sm">
                  {responsibilities.map((responsibilities, id) => (
                    <li key={id}>{responsibilities}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
