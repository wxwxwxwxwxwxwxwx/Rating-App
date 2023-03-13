import { Htag } from "@/components/Htag/Htag";
import { Tag } from "@/components/Tag/Tag";
import { ITopPageComponentProps } from "./TopPageComponent.props";

import styles from "./TopPageComponent.module.css";
import { Card } from "@/components/Card/Card";
import { Advantages, HhData, Paragraph } from "@/components";
import { TopLevelCategory } from "@/interfaces/page.interface";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: ITopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="gray" size="medium">
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>
      <div>
        {products &&
          products.map((item) => <div key={item._id}>{item.title}</div>)}
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
      {page.seoText ?? (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
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
