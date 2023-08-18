import styles from "./Form.module.css";
const FormFieldError = ({ children }) => {
  return <span className={styles.error}>{children}</span>;
};

export default FormFieldError;
