import React from "react";

export default function Start({ setView }) {
  const onStartClickHandler = () => {
    setView("journey");
  };

  return (
    <div>
      <h1>Welcome to the Journey Planning Form</h1>
      <button onClick={() => onStartClickHandler()}>Start Journey</button>
    </div>
  );
}
