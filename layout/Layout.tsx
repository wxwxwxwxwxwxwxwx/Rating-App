import classNames from "classnames";
import { FC } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { ILayoutProps } from "./Layout.props";
import styles from "./Paragraph.module.css";
import { Sidebar } from "./Sidebar/Sidebar";

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
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
