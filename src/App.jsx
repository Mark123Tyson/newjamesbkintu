import { useState, useEffect } from "react";
import "./styles/index.css"
import { useViewport } from "./hooks/useViewport";

import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import About        from "./components/About";
import Expertise    from "./components/Expertise";
import Career       from "./components/Career";
import Research     from "./components/Research";
import Publications from "./components/Publications";
import Community    from "./components/Community";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";

const SECTIONS = ["home", "about", "experience", "research", "publications", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  useViewport(); // global re-render on orientation change & resize

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.25 }
    );
    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Expertise />
      <Career />
      <Research />
      <Publications />
      <Community />
      <Contact />
      <Footer />
    </>
  );
}
