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
<<<<<<< HEAD
import { Study } from "./Study";
=======
import { Admin } from "./Admin";
>>>>>>> platforma/main

// Header and Footer
import { Layout } from "@widgets/Layout";

const AppRoutes: FC = () => {
  const location = useLocation();

  // Если текущий путь — чат, не показываем Layout
  const isChatPage = location.pathname === ROUTE_CONSTANTS.CHAT;

  if (isChatPage) {
    return (
      <Routes>
        <Route path={ROUTE_CONSTANTS.CHAT} element={<Chat />} />
      </Routes>
    );
  }

  // Все остальные страницы оборачиваются в Layout
  return (
    <Layout>
      <Routes>
        <Route path={ROUTE_CONSTANTS.HOME} element={<Home />} />
        <Route path={ROUTE_CONSTANTS.ABOUT} element={<About />} />
        <Route path={ROUTE_CONSTANTS.PROFILE} element={<Profile />} />
        <Route path={ROUTE_CONSTANTS.PRODUCTS} element={<Products />} />
        <Route path={ROUTE_CONSTANTS.SERVICES} element={<Services />} />
        <Route path={ROUTE_CONSTANTS.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTE_CONSTANTS.TEAM} element={<Team />} />
        <Route path={ROUTE_CONSTANTS.STUDY} element={<Study />} />
        <Route path={ROUTE_CONSTANTS.SIGN_UP} element={<SignUp />} />
      </Routes>
    </Layout>
  );
};

export const Router: FC = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <AppRoutes />
=======
      <Layout>
        <Routes>
          <Route path={ROUTE_CONSTANTS.HOME} element={<Home />} />
          <Route path={ROUTE_CONSTANTS.ABOUT} element={<About />} />
          <Route path={ROUTE_CONSTANTS.PROFILE} element={<Profile />} />
          <Route path={ROUTE_CONSTANTS.PRODUCTS} element={<Products />} />
          <Route path={ROUTE_CONSTANTS.SERVICES} element={<Services />} />
          <Route path={ROUTE_CONSTANTS.SIGN_IN} element={<SignIn />} />
          <Route path={ROUTE_CONSTANTS.SIGN_UP} element={<SignUp />} />
          <Route path={ROUTE_CONSTANTS.CHAT} element={<Chat />} />
           <Route path={ROUTE_CONSTANTS.TEAM} element={<Team />} />
          <Route path={ROUTE_CONSTANTS.ADMIN} element={<Admin />} />
        </Routes>
      </Layout>
>>>>>>> platforma/main
    </BrowserRouter>
  );
};
