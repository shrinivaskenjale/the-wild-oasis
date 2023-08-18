/* eslint-disable react-refresh/only-export-components */
import { forwardRef } from "react";
import styles from "./Form.module.css";

const Textarea = ({ ...rest }, ref) => {
  return <textarea className={styles.textarea} {...rest} ref={ref} />;
};

export default forwardRef(Textarea);
