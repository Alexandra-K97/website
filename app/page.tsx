import "./globals.css";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Contacts from "@/components/Contacts";
import Portfolio from "@/components/Portfolio";
import AboutMe from "@/components/AboutMe";
export default function Home() {
  return (
    <>
      <main>
        <Header />
        <AboutMe id="top" />
        <Skills id="skills" />
        <Portfolio id="portfolio" />
        <Contacts id="contacts" />
      </main>
    </>
  );
}
