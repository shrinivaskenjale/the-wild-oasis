import styles from "./Button.module.css";

const Button = ({
  children,
  variation = "primary",
  size = "medium",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${rest.className} ${styles.button} ${styles[variation]} ${styles[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;
