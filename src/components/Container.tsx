import React from "react";

type ContainerProps = {
  styles: React.CSSProperties;
  children: React.ReactNode;
};

export const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles}>
      Text Content Goes Here
    </div>
  );
};

export default Container;
