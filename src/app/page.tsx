import AboutSection from "./AboutSection";

import Sidebar from "./components/sidebar";
import ContactMe from "./contactMe";
import Hero from "./hero";
import MyProjects from "./myProjects";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden">
      {/* Sidebar fija */}
  

      {/* Contenedor principal con scroll snap */}
      <div className="flex-grow overflow-y-auto snap-y snap-mandatory scroll-smooth">
        {/* Hero section */}
        <section id="hero" className=" snap-start">
          <Hero />
        </section>

        {/* About section */}
        <section id="about" className="h-screen snap-start">
          <AboutSection />
        </section>

        {/* Projects section */}
        <section id="projects" className="h-screen snap-start">
          <MyProjects />
        </section>

        {/* Contact section */}
        <section id="contact" className="h-screen snap-start">
          <ContactMe />
        </section>
      </div>
    </main>
  );
}