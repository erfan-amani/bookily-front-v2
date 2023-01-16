import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const PrivateRoute = ({ children, ...rest }) => {
  const isAuthorized = useSelector((state) => !!state.auth.user);

  return isAuthorized ? (
    children
  ) : (
    <Navigate to={{ pathname: "/auth/login" }} />
  );
};

export const AuthRoute = ({ children, ...rest }) => {
  const isAuthorized = useSelector((state) => !!state.auth.user);

  return isAuthorized ? (
    <Navigate to={{ pathname: "/profile/overview" }} />
  ) : (
    children
  );
};
