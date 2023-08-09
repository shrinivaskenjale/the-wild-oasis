import { useDarkMode } from "../hooks/useDarkMode";
import ButtonIcon from "./ButtonIcon";
// import styles from "./DarkModeToggle.module.css";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
};

export default DarkModeToggle;
