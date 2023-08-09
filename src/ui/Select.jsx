import styles from "./Form.module.css";

const Select = ({ options, value, type, onChange }) => {
  return (
    <select
      className={`${styles.select} ${styles[type]}`}
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
