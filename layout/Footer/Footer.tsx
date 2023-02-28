import classNames from "classnames";
import { IFooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: IFooterProps) => {
  return (
    <footer className={classNames(className, styles.footer)} {...props}>
      <div className={styles.link}>
        OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены
      </div>
      <a href="#" target="_blank" className={styles.link}>
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank" className={styles.link}>
        Политика конфиденциальности
      </a>
    </footer>
  );
};
