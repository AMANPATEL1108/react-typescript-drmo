import React, { ProfilerProps } from "react";
import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType<ProfilerProps>;
};

export const Private = ({ isLoggedIn, Component }) => {
  if (isLoggedIn) {
    return <Component name="Vishwas" />;
  } else {
    return <Login />;
  }
  return <div>Private</div>;
};
