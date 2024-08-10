import React from "react";

type StatusProps = {
  message: "loading" | "success" | "error";
};

export const Status = () => {
  let message;
  if (message === "loading") {
    message = "Loading";
  } else if (message === "success") {
    message = "Data fetched successfully";
  } else if (message === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>Status - {message}</h2>
      {/* <h2>Loading....</h2>
      <h2>Data fetched successfully</h2>
      <h2>Error fetching data</h2> */}
    </div>
  );
};
