import classNames from "classnames";
import { FC } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { ILayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import { Sidebar } from "./Sidebar/Sidebar";

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
