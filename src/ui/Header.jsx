import UserAvatar from "../features/authentication/UserAvatar";
import styles from "./Header.module.css";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <header className={styles.header}>
      <UserAvatar />
      <HeaderMenu />
    </header>
  );
};

export default Header;
