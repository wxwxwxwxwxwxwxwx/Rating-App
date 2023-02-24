import { ReactNode, ComponentProps } from "react";

type appearanceType = "primary" | "ghost";
type arrowType = "right" | "down" | "none";

export interface IButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  appearance: appearanceType;
  arrow?: arrowType;
}
