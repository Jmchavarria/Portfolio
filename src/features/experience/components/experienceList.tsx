import { ExperienceItem } from "./experienceItem";
import { Experience } from "./Experience.types";

export type PropsExperienceList = {
  items: Experience[];
};

export function ExperienceList({ items }: PropsExperienceList) {
  return (
    <div className="w-full space-y-6">
      {items.map((item, index) => (
        <ExperienceItem key={item.id} item={item} />
      ))}
    </div>
  );
}
