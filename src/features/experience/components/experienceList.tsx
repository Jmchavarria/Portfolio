import { ExperienceItem } from "./experienceItem";

import { Experience } from "./Experience.types";

export type PropsExperienceList = { items: Experience[] };

export function ExperienceList({ items }: PropsExperienceList) {
    return items.map((item) => (
        <ExperienceItem key={item.id} item={item} />
    ))
}
