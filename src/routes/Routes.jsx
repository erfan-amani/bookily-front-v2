import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import AuthRoutes from "./AuthRoutes";

const AppRoutes = ({ children }) => (
  <BrowserRouter>
    {children}

    {/* <Routes>
      <Route path="*" element={<Navbar />} />
    </Routes> */}

    <PublicRoutes />
    <AuthRoutes />
    <PrivateRoutes />

    {/* <Routes>
      <Route path="*" element={<Footer />} />
    </Routes> */}
  </BrowserRouter>
);

export default AppRoutes;
