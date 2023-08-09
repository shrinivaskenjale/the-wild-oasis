import styles from "./Form.module.css";

function Form({ children, type = "regular", ...rest }) {
  return (
    <form className={`${styles.form} ${styles[type]}`} {...rest}>
      {children}
    </form>
  );
}

export default Form;
