import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./CustomRouter";

const privateRoutes = [];

const PrivateRoutes = () => (
  <Routes>
    {privateRoutes.map(({ exact = false, path, component: Component }, i) => {
      return (
        <Route
          key={i}
          exact={exact}
          path={path}
          element={
            <PrivateRoute>
              <Component />
            </PrivateRoute>
          }
        />
      );
    })}
  </Routes>
);

export default PrivateRoutes;
