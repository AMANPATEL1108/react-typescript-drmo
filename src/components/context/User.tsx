import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    if (userContext && "setUser" in userContext) {
      userContext.setUser({
        name: "Dmitry",
        email: "dmitry@example.com",
      });
    }
  };
  const handleLogout = () => {
    if (userContext && "setUser" in userContext) {
      userContext.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext?.user.name} </div>
      <div>User email is {userContext?.User?.email} </div>
    </div>
  );
};
