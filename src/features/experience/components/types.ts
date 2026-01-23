export type Experience = {
    title: string;
    company: string;
    period: string;
    location: string;
    description: string;
};

export type PropsExperienceList = { items: Experience[] };

export type Props = { item: Experience };
