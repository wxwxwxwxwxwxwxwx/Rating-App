import classNames from "classnames";
import { ITagProps } from "./Tag.props";
import styles from "./Tag.module.css";

export const Tag = ({
  size = "medium",
  children,
  color = "ghost",
  href,
  className,
  ...props
}: ITagProps) => {
  return (
    <div
      className={classNames(styles.tag, className, {
        [styles.medium]: size === "medium",
        [styles.small]: size === "small",
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.gray]: color === "gray",
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
