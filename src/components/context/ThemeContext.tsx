import React, { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext({
  theme: {
    primary: {
      main: "#3f51b5",
      text: "#fff",
    },
    secondary: {
      main: "#f50057",
      text: "#fff",
    },
  },
});

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
