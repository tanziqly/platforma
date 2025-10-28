import type { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Constants
import { ROUTE_CONSTANTS } from "@shared/config/routes";

// Pages
import { Home } from "./Home";
import { About } from "./About";
import { Profile } from "./Profile";
import { Product } from "./Product";
import { Services } from "./Services";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Chat } from "./Chat";

// Header and Footer
import { Layout } from "@widgets/Layout";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTE_CONSTANTS.HOME} element={<Home />} />
          <Route path={ROUTE_CONSTANTS.ABOUT} element={<About />} />
          <Route path={ROUTE_CONSTANTS.PROFILE} element={<Profile />} />
          <Route path={ROUTE_CONSTANTS.PRODUCT} element={<Product />} />
          <Route path={ROUTE_CONSTANTS.SERVICES} element={<Services />} />
          <Route path={ROUTE_CONSTANTS.SIGN_IN} element={<SignIn />} />
          <Route path={ROUTE_CONSTANTS.SIGN_UP} element={<SignUp />} />
          <Route path={ROUTE_CONSTANTS.CHAT} element={<Chat />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
