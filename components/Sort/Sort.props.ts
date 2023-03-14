import { ComponentProps } from "react";

export enum SortEnum {
  Rating,
  Price,
}

export interface ISortProps extends ComponentProps<"div"> {
  sort: SortEnum;
  setSort: (sort: SortEnum) => void;
}
