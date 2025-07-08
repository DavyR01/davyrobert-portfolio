import { ReactNode } from "react";

export type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  sourceWeb?: string;
  sourceGithub?: string;
  projectSlug: string;
};

export type Experience = {
  title: string;
  tasks: string[];
};

export type DataExperience = {
  year: string;
  experiences: Experience[];
  icons: string[];
};

export type CategoryItem = {
  icon: ReactNode;
  label: string;
};

export type Category = {
  title: string;
  items: CategoryItem[];
};

export type QualityIcon = {
  label: string;
  icon: ReactNode;
};

export type Qualities = {
  title: string;
  items: QualityIcon[];
};
