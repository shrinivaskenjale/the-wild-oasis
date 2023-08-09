import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

export const useDarkMode = () => {
  const value = useContext(DarkModeContext);
  if (!value) {
    throw new Error("DarkModeContext is used outside the DarkModeProvider");
  }
  return value;
};
