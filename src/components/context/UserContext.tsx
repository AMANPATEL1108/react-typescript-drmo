import { createContext, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextType);
const [user, setUser] = useState<AuthUser | null>(null);
import React from "react";

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
