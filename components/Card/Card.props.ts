import { ReactNode, ComponentProps } from "react";

export interface ICardProps extends ComponentProps<"div"> {
  color?: "white" | "blue";
  children: ReactNode;
}
