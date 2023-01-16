import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "./CustomRouter";

const authRoutes = [];

export const AuthRoutes = () => (
  <Routes>
    {authRoutes.map(({ exact = false, path, component: Component }, i) => {
      return (
        <Route
          key={i}
          exact={exact}
          path={path}
          element={
            <AuthRoute>
              <Component />
            </AuthRoute>
          }
        />
      );
    })}
  </Routes>
);

export default AuthRoutes;
