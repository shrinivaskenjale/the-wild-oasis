import { HiXMark } from "react-icons/hi2";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import { cloneElement, createContext, useContext, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");

  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, opens }) => {
  const { open } = useContext(ModalContext);
  // We want to add onClick prop to button which is the children prop of <Open>
  return cloneElement(children, { onClick: () => open(opens) });
};

const Window = ({ children, name }) => {
  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className={styles.backdrop}>
      <div className={styles.modal} ref={ref}>
        <button className={styles.closeBtn} onClick={close}>
          <HiXMark />
        </button>
        <div>{cloneElement(children, { onClose: close })}</div>
      </div>
    </div>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
