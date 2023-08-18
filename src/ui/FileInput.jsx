import { forwardRef } from "react";
import styles from "./Form.module.css";
const FileInput = ({ ...rest }, ref) => {
  return <input className={styles.fileInput} type="file" {...rest} ref={ref} />;
};

const FileInputForwardRef = forwardRef(FileInput);

export default FileInputForwardRef;
