import classNames from "classnames";
import { IParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";

export const Paragraph = ({
  size = "medium",
  children,
  className,
  ...props
}: IParagraphProps): JSX.Element => {
  return (
    <p
      className={classNames(styles.p, className, {
        [styles.medium]: size === "medium",
        [styles.small]: size === "small",
        [styles.large]: size === "large",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
