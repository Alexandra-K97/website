interface Props {
  id: string;
}
const Top: React.FC<Props> = ({ id }) => {
  return (
    <div
      id={id}
      className="container tracking-[5px] font-['Inter'] text-7xl text-[#ffffff] mx-auto text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full animate-[slideUp_0.8s_ease-out_0.4s_both] max-[510px]:text-xl  max-[510px]:animate-[slideUp_0.8s_ease-out_0.4s_both]"
    >
      <p>Привет, я Александра</p>
      <p>Frontend-Разработчик</p>
    </div>
  );
};
export default Top;
