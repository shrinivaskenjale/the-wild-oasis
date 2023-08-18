import styles from "./Checkbox.module.css";

const Checkbox = ({ checked, onChange, disabled = false, id, children }) => {
  return (
    <div className={styles.checkBox}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </div>
  );
};

export default Checkbox;
