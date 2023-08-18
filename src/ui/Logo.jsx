import { useDarkMode } from "../hooks/useDarkMode";
import styles from "./Logo.module.css";

const Logo = () => {
  const { isDarkMode } = useDarkMode();
  const imgSrc = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
  return (
    <div className={styles.logo}>
      <img src={imgSrc} alt="Logo" />
    </div>
  );
};

export default Logo;
