import styles from "./Flag.module.css";

const Flag = (props) => {
  return <img {...props} className={styles.flag} />;
};

export default Flag;
