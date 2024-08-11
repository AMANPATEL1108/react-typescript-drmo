import React from "react";
import { useState } from "react";
import { ThemeContext } from "./ThemeContext.tsx";
import { theme } from "./theme";
export const Box = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <div>
      <h2
        style={{
          backgroundColor: theme.primary.main,
          color: theme.primary.text,
        }}
      >
        Theme context
      </h2>
    </div>
  );
};
