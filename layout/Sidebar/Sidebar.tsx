import classNames from "classnames";
import { ISidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import { Menu } from "../Menu/Menu";
import Logo from "../logo.svg";
import { Search } from "@/components";

export const Sidebar = ({ className, ...props }: ISidebarProps) => {
  return (
    <div className={classNames(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <Search />
      <Menu />
    </div>
  );
};
