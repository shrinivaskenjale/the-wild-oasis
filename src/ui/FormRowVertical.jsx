import styles from "./FormRowVertical.module.css";

const FormRowVertical = ({ label, error, children }) => {
  return (
    <div className={styles.formRow}>
      {label && (
        <label className={styles.label} htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default FormRowVertical;
