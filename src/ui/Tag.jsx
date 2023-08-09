import styles from "./Tag.module.css";
const Tag = ({ children, type }) => {
  return (
    <span
      className={styles.tag}
      style={{
        color: `var(--color-${type}-700)`,
        backgroundColor: `var(--color-${type}-100)`,
      }}
    >
      {children}
    </span>
  );
};

export default Tag;
