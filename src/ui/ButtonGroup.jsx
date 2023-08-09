import styles from "./ButtonGroup.module.css";

const ButtonGroup = ({ children, ...rest }) => {
  return (
    <div className={styles.buttonGroup} {...rest}>
      {children}
    </div>
  );
};

export default ButtonGroup;
