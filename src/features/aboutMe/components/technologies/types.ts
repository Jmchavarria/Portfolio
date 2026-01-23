
export type Skill = {
  name: string;
  icon: React.ReactNode;
};



export type Props = {
  title?: string;
  skills: Skill[];
};