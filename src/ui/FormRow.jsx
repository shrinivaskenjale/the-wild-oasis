import styles from "./Form.module.css";
import FormFieldError from "./FormFieldError";
import Label from "./Label";

const FormRow = ({ label, error, children }) => {
  return (
    <div className={styles.formRow}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <FormFieldError>{error}</FormFieldError>}
    </div>
  );
};

export default FormRow;

// htmlFor should be equal to id prop of input which is children
