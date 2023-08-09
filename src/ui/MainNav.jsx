import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";

function MainNav() {
  return (
    <nav className={styles.mainNav}>
      <ul>
        <li>
          <NavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookings">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cabins">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">
            <HiOutlineUsers />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
