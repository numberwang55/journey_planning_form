import React from "react";
import { useNavigate } from "react-router-dom";

export default function Start() {
  const navigate = useNavigate();

  const onStartClickHandler = () => {
    navigate("/journey");
  };

  return (
    <div>
      <h1>Welcome to the Journey Planning Form</h1>
      <button onClick={() => onStartClickHandler()}>Start Journey</button>
    </div>
  );
}
