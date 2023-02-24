import { ReactNode, ComponentProps } from "react";

type sizeType = "medium" | "small" | "large";

export interface IParagraphProps extends ComponentProps<"p"> {
  size?: sizeType;
  children: ReactNode;
}
