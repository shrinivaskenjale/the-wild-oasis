// import Uploader from "../data/Uploader";
import Logo from "./Logo";
import MainNav from "./MainNav";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <MainNav />
      {/* <Uploader /> */}
    </aside>
  );
};

export default Sidebar;
