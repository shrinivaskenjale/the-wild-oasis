import { HiOutlineUser } from "react-icons/hi2";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import styles from "./HeaderMenu.module.css";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const HeaderMenu = () => {
  const navigate = useNavigate();
  return (
    <ul className={styles.headerMenu}>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
};

export default HeaderMenu;
