import React, { useState } from "react";

type CounterState = {
  count: number;
};

type CounterAction = {
  type: "increment" | "decrement" | "reset";
  payload?: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterActionType = UpdateAction | ResetAction;

const initialState = { count: 0 };

function reducder(state: CounterState, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = React.useReducer(reducder, initialState);
  return (
    <div>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        Reset
      </button>
    </div>
  );
};
