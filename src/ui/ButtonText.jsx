import styles from "./ButtonText.module.css";

const ButtonText = ({ children, ...rest }) => {
  return (
    <button className={styles.buttonText} {...rest}>
      {children}
    </button>
  );
};

export default ButtonText;
