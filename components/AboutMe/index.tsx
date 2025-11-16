interface Props {
  id: string;
}
const AboutMe: React.FC<Props> = ({ id }) => {
  return (
    <div
      id={id}
      className="bg-cover bg-center bg-gradient-to-br from-blue-500 via-cyan-400 to-cyan-400  min-h-screen relative"
    >
      <div className="container tracking-[5px] font-['Inter'] text-7xl text-[#ffffff] mx-auto text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full animate-[slideUp_0.8s_ease-out_0.4s_both] max-[510px]:text-2xl  max-[510px]:animate-[slideUp_0.8s_ease-out_0.4s_both]">
        <p>Привет, я Александра</p>
        <p>Frontend-Разработчик</p>
        <p className="text-slate-200 text-2xl pt-5 max-[510px]:text-lg max-[510px]:-tracking-[-3px]">
          Превращаю картинки в рабочие интерфейсы : верстаю макеты, продумываю
          компоненты. Стараюсь создать код, <br /> который удобен и функционален
        </p>
        <a
          href="/documents/frontend-разработчик.pdf"
          download="Резюме.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full inline-block py-4 px-4 mt-5  bg-black text-white text-base  font-['Arial'] transition-all duration-500 hover:bg-white hover:text-slate-950 max-[510px]:text-xs"
        >
          Скачать резюме
        </a>
      </div>
    </div>
  );
};
export default AboutMe;
