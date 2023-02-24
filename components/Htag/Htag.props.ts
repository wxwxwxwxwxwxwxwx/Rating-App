import { ReactNode } from "react";

type tagType = "h1" | "h2" | "h3";

export interface IHtagProps {
  tag: tagType;
  children: ReactNode;
}
