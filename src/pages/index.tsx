import type { FC } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Constants
import { ROUTE_CONSTANTS } from "@shared/config/routes";

// Pages
import { Home } from "./Home";
import { About } from "./About";
import { Profile } from "./Profile";
import { Products } from "./Products";
import { Services } from "./Services";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Chat } from "./Chat";
import { Team } from "./Team";
import { Study } from "./Study";
import { AdminService } from "./AdminService";
import { Admin } from "./Admin";

// Layout
import { Layout } from "@widgets/Layout";

const AppRoutes: FC = () => {
  const location = useLocation();
  const isChatPage = location.pathname === ROUTE_CONSTANTS.CHAT;

  const routes = (
    <Routes>
      <Route path={ROUTE_CONSTANTS.HOME} element={<Home />} />
      <Route path={ROUTE_CONSTANTS.ABOUT} element={<About />} />
      <Route path={ROUTE_CONSTANTS.PROFILE} element={<Profile />} />
      <Route path={ROUTE_CONSTANTS.PRODUCTS} element={<Products />} />
      <Route path={ROUTE_CONSTANTS.SERVICES} element={<Services />} />
      <Route path={ROUTE_CONSTANTS.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTE_CONSTANTS.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTE_CONSTANTS.TEAM} element={<Team />} />
      <Route path={ROUTE_CONSTANTS.STUDY} element={<Study />} />
      <Route path={ROUTE_CONSTANTS.ADMIN_SERVICE} element={<AdminService />} />
      <Route path={ROUTE_CONSTANTS.ADMIN} element={<Admin />} />
      <Route path={ROUTE_CONSTANTS.CHAT} element={<Chat />} />
    </Routes>
  );

  // Если чат — без Layout
  if (isChatPage) return routes;

  // Все остальные страницы — в Layout
  return <Layout>{routes}</Layout>;
};

export const Router: FC = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
