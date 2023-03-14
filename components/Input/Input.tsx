import classNames from "classnames";
import { IInputProps } from "./Input.props";
import styles from "./Input.module.css";

export const Input = ({ className, ...props }: IInputProps) => {
  return <input className={classNames(className, styles.input)} {...props} />;
};
