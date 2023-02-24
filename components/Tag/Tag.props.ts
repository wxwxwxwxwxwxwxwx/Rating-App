import { ReactNode, ComponentProps } from "react";

type colorType = "ghost" | "red" | "gray" | "green" | "primary";

export interface ITagProps extends ComponentProps<"div"> {
  size?: "medium" | "small";
  children: ReactNode;
  color?: colorType;
  href?: string;
}
