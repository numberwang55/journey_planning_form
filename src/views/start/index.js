import React from "react";
import { StartJourney } from "./components/StartJourney";

export default function Start({ setView }) {
  return (
    <div>
      <StartJourney setView={setView}/>
    </div>
  );
}
