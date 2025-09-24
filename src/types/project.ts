export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  codeLink?: string;
  link: string;
  imageUrl: string;
  additionalImages?: string[];
  technologies?: string[];
  features?: string[];
}