import { Description } from "./components/AboutMeDescription";
import { Formation } from "./components/formation/Formation";
import { Technologies } from "./components/technologies/Technologies";
import { formationItems } from "./data/Formation.data";
import { skills } from "./data/Skills.data";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#050505] px-6 py-24 text-[#F5F5F5] md:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#7C3AED]/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#38BDF8]">
            Sobre mí
          </span>

          <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#7C3AED] to-[#38BDF8]" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-10">
            <Description />

            <div className="h-px w-full bg-[#1F1F23]" />

            <Technologies skills={skills} />
          </div>

          <div className="lg:border-l lg:border-[#1F1F23] lg:pl-12">
            <Formation items={formationItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
