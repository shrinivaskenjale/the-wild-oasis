import styles from "./FullPage.module.css";

const FullPage = ({ children }) => {
  return <div className={styles.fullPage}>{children}</div>;
};

export default FullPage;
