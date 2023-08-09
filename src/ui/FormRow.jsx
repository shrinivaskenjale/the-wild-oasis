import styles from "./Form.module.css";
import FormFieldError from "./FormFieldError";
import Label from "./Label";

function FormRow({ label, error, children }) {
  return (
    <div className={styles.formRow}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <FormFieldError>{error}</FormFieldError>}
    </div>
  );
}

export default FormRow;
