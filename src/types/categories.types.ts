import { ReactNode } from "react";

export type CategoryItem = {
  icon: ReactNode;
  label: string;
};

export type Category = {
  titleKey: string;
  items: CategoryItem[];
};
