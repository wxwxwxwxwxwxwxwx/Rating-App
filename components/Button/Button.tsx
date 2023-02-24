import { IButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import classNames from "classnames";
import ArrowIcon from "./arrow.svg";

export const Button = ({
  appearance,
  children,
  className,
  arrow = "none",
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={classNames(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
