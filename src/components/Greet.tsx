import React from "react";
type GreetProps = {
  name: string;
  messageCounts: number;
  isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name} you have ${props.messageCounts} msg`
          : "Welcome Guest"}
        Welcome {props.name} you have {props.messageCounts} msg
      </h2>
    </div>
  );
};
