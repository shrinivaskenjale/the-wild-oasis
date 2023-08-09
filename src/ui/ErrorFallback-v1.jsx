import Button from "./Button";
import styles from "./ErrorFallback.module.css";
import Heading from "./Heading";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  console.log("🥹🙂➡️#️⃣😅🤣");
  return (
    <main className={styles.errorFallback}>
      <div className={styles.box}>
        <Heading>Something went wrong 🥹</Heading>
        <p>{error.message}</p>
        <Button size="large" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    </main>
  );
};

export default ErrorFallback;
