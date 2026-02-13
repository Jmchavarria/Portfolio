import { SectionHeader } from "@/shared/ui/sectionHeader";
import { ExperienceList } from "./components/experienceList";

import { Experiences } from "./data/Experiencie.data";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full min-h-screen flex flex-col items-center justify-center "
    >
      <SectionHeader
        title="Experience"
      />



      <div className="w-full px-4 py-16 ">
        <div className="w-full space-y-12 flex flex-col items-center justify-center ">


          <ExperienceList items={Experiences} />
        </div>
      </div>

    </section>
  );
};

export default Experience;