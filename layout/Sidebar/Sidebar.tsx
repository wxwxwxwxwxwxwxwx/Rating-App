import classNames from "classnames";
import { ISidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";

export const Sidebar = ({ ...props }: ISidebarProps) => {
  return <div {...props}>Sidebar</div>;
};
