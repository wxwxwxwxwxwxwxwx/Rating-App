import classNames from "classnames";
import { ISidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import { Menu } from "../Menu/Menu";

export const Sidebar = ({ ...props }: ISidebarProps) => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};
