
export type ProjectCardProps = {
   index: number;
   name: string;
   descriptionKey: string;
   tags: { name: string; color?: string }[];
   image: string;
   sourceWeb?: string;
   sourceGithub?: string;
   projectSlug: string;
   video?: string;
   learnMore?: string;
};
