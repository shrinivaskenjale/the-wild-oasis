import styles from "./ButtonIcon.module.css";

const ButtonIcon = ({ children, ...rest }) => {
  return (
    <button className={styles.buttonIcon} {...rest}>
      {children}
    </button>
  );
};

export default ButtonIcon;
