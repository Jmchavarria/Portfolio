import { SectionHeader } from "@/shared/ui/sectionHeader";
import { ExperienceList } from "./components/experienceList";
import { Experiences } from "./data/Experiencie.data";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-[#050505] px-6 py-24 text-[#F5F5F5] md:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute right-[-10%] top-1/4 h-[450px] w-[450px] rounded-full bg-[#7C3AED]/[0.04] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-[-10%] h-[350px] w-[350px] rounded-full bg-[#38BDF8]/[0.03] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#7C3AED]">
            Trayectoria
          </p>

          <SectionHeader title="Experiencia" />

          <div className="mt-5 h-px w-16 bg-gradient-to-r from-[#7C3AED] to-[#38BDF8]" />
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute bottom-0 left-3 top-0 hidden w-px bg-gradient-to-b from-[#7C3AED]/50 via-[#1F1F23] to-transparent md:block" />

          <div className="md:pl-10">
            <ExperienceList items={Experiences} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
