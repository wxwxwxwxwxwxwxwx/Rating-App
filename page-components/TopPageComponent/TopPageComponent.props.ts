import { ITopPageModel, TopLevelCategory } from "@/interfaces/page.interface";
import { IProductModel } from "@/interfaces/product.interafces";

export interface ITopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: ITopPageModel;
  products: IProductModel[];
}
