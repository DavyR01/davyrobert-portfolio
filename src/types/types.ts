export type ProjectCardProps = {
    index: number;
    name: string;
    description: string;
    tags: { name: string; color: string }[];
    image: string;
    sourceWeb?: string;
    sourceGithub?: string;
    readmore: string;
};