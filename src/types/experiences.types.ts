import { ReactNode } from "react";

export type Experience = {
  // title: any;
  titleKey: string;
  tasksKey: string[];
};

export type DataExperience = {
  yearKey: string;
  experiencesKey: Experience[];
  icons: ExperienceIcon[];
};

export type ExperienceIcon = {
    icon: ReactNode;
    label: string;
  };
  