import classNames from "classnames";
import { IAdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";

import CheckIcon from "./check.svg";

export const Advantages = ({ advantages }: IAdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((item) => {
        <div key={item._id} className={styles.advanatge}>
          <CheckIcon />
          <div className={styles.title}>{item.title}</div>
          <hr className={styles.vline} />
          <div>{item.description}</div>
        </div>;
      })}
    </>
  );
};
