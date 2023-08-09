import styles from "./Row.module.css";

function Row({ direction = "x", children }) {
  return <div className={`${styles.row} ${styles[direction]}`}>{children}</div>;
}

export default Row;
