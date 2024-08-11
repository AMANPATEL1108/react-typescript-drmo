import React from "react";
import { useState, useEffect, useRef } from "react";

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (inputRef.current) {
      (inputRef.current as HTMLInputElement).focus();
    }
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
