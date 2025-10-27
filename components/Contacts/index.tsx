import Image from "next/image";

interface Props {
  id: string;
}
const TOUCH = [
  {
    src: "/icons/tg.svg",
    alt: "Telegram",
    width: 30,
    height: 30,
    url: "https://t.me/First_161",
  },
  {
    src: "/icons/github.svg",
    alt: "GitHub",
    width: 30,
    height: 30,
    url: "https://github.com/Alexandra-K97",
  },
];
const Contacts: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className="my-20 max-sm:my-5">
      <div className="container flex justify-center gap-5 ">
        <div className="flex flex-col text-xl space-y-5 max-sm:hidden">
          <p>Telegram</p>
          <p>GitHub</p>
        </div>
        <div className="flex flex-col space-y-5  max-[510px]:pt-[80px]">
          {TOUCH.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Contacts;
