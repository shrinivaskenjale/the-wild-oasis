import styles from "./Form.module.css";
function FormFieldError({ children }) {
  return <span className={styles.error}>{children}</span>;
}

export default FormFieldError;
