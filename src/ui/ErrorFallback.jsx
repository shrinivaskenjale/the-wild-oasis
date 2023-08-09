import { useRouteError } from "react-router-dom";
import Button from "./Button";
import styles from "./ErrorFallback.module.css";
import Heading from "./Heading";

const ErrorFallback = ({ onReset }) => {
  const error = useRouteError();
  return (
    <main className={styles.errorFallback}>
      <div className={styles.box}>
        <Heading>Something went wrong 🥹</Heading>
        <p>{error.message}</p>
        <Button size="large" onClick={onReset}>
          Try again
        </Button>
      </div>
    </main>
  );
};

export default ErrorFallback;
