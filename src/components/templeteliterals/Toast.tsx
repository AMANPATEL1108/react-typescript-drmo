import React from "react";

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";
type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};
export const Toast: React.FC<ToastProps> = ({ position }) => {
  return <div>Toast Notification Position - {position}</div>;
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toasted Notification Position -{position}</div>;
};
