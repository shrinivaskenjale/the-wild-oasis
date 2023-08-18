import styles from "./DataItem.module.css";

const DataItem = ({ icon, label, children }) => {
  return (
    <div className={styles.dataItem}>
      <span className={styles.label}>
        {icon}
        <span>{label}</span>
      </span>
      {children}
    </div>
  );
};

export default DataItem;
