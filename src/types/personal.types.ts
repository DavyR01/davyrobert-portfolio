import { ReactNode } from "react";

export type QualityIcon = {
  label: string;
  icon: ReactNode;
};

export type Qualities = {
  title: string;
  items: QualityIcon[];
};


export type PersonalData = {
  available: boolean;
};

export type Methods = {
  items: {
    label: string;
    icon: ReactNode;
  }[];
};