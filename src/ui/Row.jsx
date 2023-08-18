import styles from "./Row.module.css";

const Row = ({ direction = "x", children }) => {
  return <div className={`${styles.row} ${styles[direction]}`}>{children}</div>;
};

export default Row;
