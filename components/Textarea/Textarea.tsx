import classNames from "classnames";
import { ITextareaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";

export const Textarea = ({
  className,
  ...props
}: ITextareaProps): JSX.Element => {
  return (
    <textarea className={classNames(className, styles.input)} {...props} />
  );
};
