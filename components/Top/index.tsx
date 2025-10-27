interface Props {
  id: string;
}
const Top: React.FC<Props> = ({ id }) => {
  return (
    <div
      id={id}
      className="bg-cover bg-center bg-no-repeat bg-[url('/img/code.jpg')] min-h-screen relative"
    >
      <div className="container tracking-[5px] font-['Inter'] text-7xl text-[#ffffff] mx-auto text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full animate-[slideUp_0.8s_ease-out_0.4s_both] max-[510px]:text-xl  max-[510px]:animate-[slideUp_0.8s_ease-out_0.4s_both]">
        <p>Привет, я Александра</p>
        <p>Frontend-Разработчик</p>
      </div>
      <div className=" absolute bottom-10 right-4">
        <a
          href="/documents/резюме frontend-разработчик.pdf"
          download="Резюме.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full  py-4 px-4   block bg-blue-600 text-white text-base transition-all duration-500 hover:bg-white hover:text-slate-950"
        >
          Подробнее обо мне
        </a>
      </div>
    </div>
  );
};
export default Top;
