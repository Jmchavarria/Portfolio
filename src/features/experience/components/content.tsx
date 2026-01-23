import { Experiences } from "../data/experiences";
import { ExperienceSection } from "./experienceSection";
import { ExperienceList } from "./experienceList";

export function Content() {
  return (
    <ExperienceSection>
      <ExperienceList items={Experiences} />
    </ExperienceSection>
  );
}
