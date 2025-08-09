import { ReactNode } from "react";

export type ProjectCardProps = {
  index: number;
  name: string;
  descriptionKey: string;
  tags: { name: string; color: string }[];
  image: string;
  sourceWeb?: string;
  sourceGithub?: string;
  projectSlug: string;
  maxTagsCount?: number;
};

export type Experience = {
  // title: any;
  titleKey: string;
  tasksKey: string[];
};

export type DataExperience = {
  yearKey: string;
  experiencesKey: Experience[];
  icons: string[];
};

export type CategoryItem = {
  icon: ReactNode;
  label: string;
};

export type Category = {
  titleKey: string;
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
