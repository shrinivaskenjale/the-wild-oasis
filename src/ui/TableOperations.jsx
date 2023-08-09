import styles from "./TableOperations.module.css";

const TableOperations = ({ children }) => {
  return <div className={styles.tableOperations}>{children}</div>;
};

export default TableOperations;
