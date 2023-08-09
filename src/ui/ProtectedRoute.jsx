import { Navigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import FullPage from "./FullPage";
import Spinner from "./Spinner";

const ProtectedRoute = ({ children }) => {
  // 1. Get authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. While loading, show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 3. If there is no authenticated user, redirect to /login
  if (!isAuthenticated && !isLoading) {
    return <Navigate to="/login" />;
  }

  // 4. If there is a user, render the children
  if (isAuthenticated) return children;
};

export default ProtectedRoute;
