import AboutMe from "@/components/AboutMe";
import "./globals.css";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Contacts from "@/components/Contacts";
import Top from "@/components/Top";

export default function Home() {
  return (
    <>
      <main>
        <div className="bg-cover bg-center bg-no-repeat bg-[url('/img/code.jpg')] min-h-screen relative">
          <Header />
          <Top id="#top" />
        </div>
        <AboutMe id="about" />
        <Skills id="skills" />
        <Contacts id="contacts" />
      </main>
    </>
  );
}
