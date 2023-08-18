import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Main from "./Main";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  return (
    <div className={styles.appLayout}>
      <Header />
      <Sidebar />
      <Main>
        <div className={styles.container}>
          <Outlet />
        </div>
      </Main>
    </div>
  );
};

export default AppLayout;
