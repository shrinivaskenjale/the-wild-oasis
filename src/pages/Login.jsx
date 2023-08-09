import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import styles from "./Login.module.css";

const LoginLayout = ({ children }) => {
  return <main className={styles.loginLayout}>{children}</main>;
};

const Login = () => {
  return (
    <LoginLayout>
      <Logo />
      <Heading type="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
};

export default Login;
