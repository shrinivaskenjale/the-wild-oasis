import styles from "./Stat.module.css";

const Stat = ({ icon, title, value, color }) => {
  return (
    <div className={styles.stat}>
      <div
        className={styles.icon}
        style={{
          backgroundColor: `var(--color-${color}-100)`,
          color: `var(--color-${color}-700)`,
        }}
      >
        {icon}
      </div>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default Stat;
