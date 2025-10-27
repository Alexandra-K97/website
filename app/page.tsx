import AboutMe from "@/components/AboutMe";
import "./globals.css";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Contacts from "@/components/Contacts";
import Top from "@/components/Top";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Top id="top" />
        <AboutMe id="about" />
        <Skills id="skills" />
        <Portfolio id="portfolio" />
        <Contacts id="contacts" />
      </main>
    </>
  );
}
