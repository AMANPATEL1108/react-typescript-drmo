import React from "react";

type TextProps = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: string;
};
export const Text = ({
  size = "md",
  color = "primary",
  children,
  as,
}: TextProps) => {
  const Component = as || "div";
  return <div className={`class-with-${size}-${color}`}>{children}</div>;
};
