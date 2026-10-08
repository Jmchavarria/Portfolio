import { SectionHeader } from "@/shared/ui/sectionHeader";
import { experiences } from "./data/Experiencie.data";
import { ExperienceItem } from "./components/experienceItem";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-[#050505] px-6 py-24 text-[#F5F5F5] md:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute right-[-10%] top-1/4 h-[450px] w-[450px] rounded-full bg-[#7C3AED]/4 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-[-10%] h-[350px] w-[350px] rounded-full bg-[#38BDF8]/3 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#7C3AED]">
            Trayectoria
          </p>

          <SectionHeader title="Experiencia" />

          <div className="mt-5 h-px w-16 bg-linear-to-r from-[#7C3AED] to-[#38BDF8]" />
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute bottom-0 left-3 top-0 hidden w-px bg-linear-to-b from-[#7C3AED]/50 via-[#1F1F23] to-transparent md:block" />

          <div className="md:pl-10">
            <div className="w-full space-y-6">
              {experiences.map((item, index) => (
                <ExperienceItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
