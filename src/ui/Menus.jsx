import { createContext, useContext, useState } from "react";
import styles from "./Menus.module.css";
import { HiEllipsisVertical } from "react-icons/hi2";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState();

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      <div>{children}</div>
    </MenusContext.Provider>
  );
}

function Menu({ children }) {
  return children;
}

function Toggle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenusContext);

  function handleToggleMenu(e) {
    // Stop event bubbling to avoid closing of the menu.
    e.stopPropagation();

    const { right, bottom } = e.target
      .closest("button")
      .getBoundingClientRect();

    setPosition({
      x: window.innerWidth - right,
      y: bottom + 8,
    });

    if (openId !== id) {
      return open(id);
    }
    close();
  }
  return (
    <button className={styles.toggleBtn} onClick={handleToggleMenu}>
      <HiEllipsisVertical />
    </button>
  );
}
function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (id !== openId) return null;

  return createPortal(
    <ul
      ref={ref}
      className={styles.list}
      style={{ top: position.y, right: position.x }}
    >
      {children}
    </ul>,
    document.body
  );
}

function Button({ children, icon, onClick, ...rest }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    // Execute onClick handler if present
    onClick?.();
    // Close menu upon clicking the menu button
    close();
  }
  return (
    <li>
      <button className={styles.btn} onClick={handleClick} {...rest}>
        {icon} <span>{children}</span>
      </button>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
