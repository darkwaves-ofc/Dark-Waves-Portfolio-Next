import React from "react";
import "./Home.css";
import MainContent from "../../components/Home/MainContent/MainContent";
import AboutCard from "../../components/Home/AboutCard/AboutCard";
import Projects from "../../components/Home/Projects/Projects";
import Skills from "../../components/Home/Skills/Skills";
import Contact from "../../components/Home/Contact/Contact";

export default function Home() {
  return (
    <div className="home flex-col m-auto">
      <MainContent />
      <AboutCard />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
