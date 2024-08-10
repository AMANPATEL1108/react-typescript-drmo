import React from "react";

type PersonListProps = {
  name: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.name.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
      {/* <h2>Bruce Wayne</h2>
      <h2>Clark Kent</h2>
      <h2>Princess dian</h2> */}
    </div>
  );
};
