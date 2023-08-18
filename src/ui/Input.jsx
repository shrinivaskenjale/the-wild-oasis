/* eslint-disable react-refresh/only-export-components */
import { forwardRef } from "react";
import styles from "./Form.module.css";

// React Hook Form attaches ref to input. Since we are using custom input component, we need to forward that ref.
const Input = ({ ...rest }, ref) => {
  return <input className={styles.input} {...rest} ref={ref} />;
};

export default forwardRef(Input);
