import React from "react";

type ListProps = {
  items: string[];
  onClick?: (item: string) => void;
};
export const List = ({ items, onClick }: ListProps) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} onClick={() => onClick?.(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};
