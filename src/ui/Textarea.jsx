import { forwardRef } from "react";
import styles from "./Form.module.css";

function Textarea({ ...rest }, ref) {
  return <textarea className={styles.textarea} {...rest} ref={ref} />;
}

const TextAreaForwardRef = forwardRef(Textarea);
export default TextAreaForwardRef;

// function Textarea({ name, register, options, ...rest }) {
//   return (
//     <textarea
//       className={styles.textarea}
//       {...register(name, {...options})}
//       {...rest}
//     />
//   );
// }

// export default Textarea;
