import LoginPageComponent from "./LoginPageComponent";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "S'identifier | Art Goes On",
  description:
    "S'identifier sur Art Goes On et accéder à l'espace artistes et réservation.",
};

const PageLogin = () => {
  return <LoginPageComponent />;
};

export default PageLogin;
