import { Route, Routes } from "react-router-dom";

const publicRoutes = [
  {
    path: "/",
    component: () => <h1 className="text-3xl font-bold">Hello world!</h1>,
  },
];

export const PublicRoutes = () => (
  <Routes>
    {publicRoutes.map(({ exact = false, path, component: Component }, i) => {
      return (
        <Route key={i} exact={exact} path={path} element={<Component />} />
      );
    })}
  </Routes>
);

export default PublicRoutes;
