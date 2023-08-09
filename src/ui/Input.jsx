import { forwardRef } from "react";
import styles from "./Form.module.css";
function Input({ ...rest }, ref) {
  return <input className={styles.input} {...rest} ref={ref} />;
}

const InputForwardRef = forwardRef(Input);

export default InputForwardRef;
