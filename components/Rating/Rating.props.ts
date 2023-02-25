import { ReactNode, ComponentProps } from "react";

export interface IRatingProps extends ComponentProps<"div"> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}
