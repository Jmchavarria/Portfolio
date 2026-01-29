import { SectionHeader } from "@/shared/ui/sectionHeader";
import { Content } from "./components/content";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full min-h-screen flex flex-col items-center justify-center "
    >
      <SectionHeader 
        title="Experience"
      />

      <Content />
    </section>
  );
};

export default Experience;