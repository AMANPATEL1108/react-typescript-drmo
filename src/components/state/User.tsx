import React from "react";
import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
export const User = () => {
  const [user, setUser] = useState<AuthUser>({
    name: "Vishwas",
    email: "Vishwas@example.com",
  });
  const handleLogin = () => {
    setUser({
      name: "Drmo",
      email: "drmo@example.com",
    });
  };
  // const handleLogout = () => {
  //   setUser(null);
  // };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};
