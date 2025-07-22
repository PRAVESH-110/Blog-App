import React from "react";
import { useSelector } from "react-redux";
import LandingPage from "./LandingPage";
import Home from "./Home";

const PublicHome = () => {
  const authStatus = useSelector((state) => state.auth.status);
  return authStatus ? <Home /> : <LandingPage />;
};

export default PublicHome; 