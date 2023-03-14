import classNames from "classnames";
import { IProductProps } from "./Product.props";
import styles from "./Product.module.css";
import { Card } from "../Card/Card";
import { PHASE_PRODUCTION_SERVER } from "next/dist/shared/lib/constants";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";

export const Product = ({
  product,
  className,
  ...props
}: IProductProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <img
          src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
          alt={product.title}
        />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>{product.price}</div>
      <div className={styles.credit}>{product.credit}</div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map((item) => (
          <Tag key={item} color="ghost">
            {item}
          </Tag>
        ))}
      </div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.ratingTitle}>{product.reviewCount} отзывов</div>
      <hr className={styles.hr} />
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>фичи</div>
      <div className={styles.advBlock}>
        <div>
          <div className={styles.advantages}>Преимущества</div>
          <div>{product.advantages}</div>
        </div>
        <div>
          <div className={styles.disadvantages}>Недостатки</div>
          <div>{product.disadvantages}</div>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button appearance="ghost" arrow={"right"}>
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};
