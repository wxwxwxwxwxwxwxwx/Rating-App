import { IProductModel } from "@/interfaces/product.interafces";
import { ComponentProps } from "react";

export interface IProductProps extends ComponentProps<"div"> {
  product: IProductModel;
}
