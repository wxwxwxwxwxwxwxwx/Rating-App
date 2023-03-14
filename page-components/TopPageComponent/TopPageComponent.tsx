import { Htag } from "@/components/Htag/Htag";
import { Tag } from "@/components/Tag/Tag";
import { ITopPageComponentProps } from "./TopPageComponent.props";

import styles from "./TopPageComponent.module.css";
import { Card } from "@/components/Card/Card";
import { Advantages, HhData, Paragraph, Sort } from "@/components";
import { TopLevelCategory } from "@/interfaces/page.interface";

import parse from "html-react-parser";
import { SortEnum } from "@/components/Sort/Sort.props";
import { useReducer } from "react";
import { sortReducer } from "./sort.reducer";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: ITopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="gray" size="medium">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts &&
          sortedProducts.map((item) => <div key={item._id}>{item.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category} </Htag>
        <Tag color="red" size="medium">
          hh.ru
        </Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      <div className={styles.seo}>{page.seoText && parse(page.seoText)}</div>
      <Htag tag="h2">Получаемые навыки</Htag>
      {page.tags.map((item) => (
        <Tag key={item} color="primary">
          {item}
        </Tag>
      ))}
    </div>
  );
};

export default TopPageComponent;
