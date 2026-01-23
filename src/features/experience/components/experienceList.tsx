import { ExperienceItemCard } from "./experienceItemCard";

import { PropsExperienceList } from "./types";

export function ExperienceList({ items }: PropsExperienceList) {
    return (
        <>
            {items.map((item) => (
                <ExperienceItemCard key={item.title} item={item} />
            ))}
        </>
    );
}
