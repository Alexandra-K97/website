import Image from "next/image";

interface Props {
  id: string;
}
const TOUCH = [
  {
    src: "/icons/github.svg",
    alt: "GitHub",
    width: 40,
    height: 40,
    url: "https://github.com/Alexandra-K97",
  },
  {
    src: "/icons/tg.svg",
    alt: "Telegram",
    width: 40,
    height: 40,
    url: "https://t.me/First_161",
  },
];
const Contacts: React.FC<Props> = ({ id }) => {
  return (
    <div
      id={id}
      className="container flex justify-center gap-3 max-[510px]:pt-[80px]"
    >
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
  );
};
export default Contacts;
