import { useState } from "react";
import "./App.css";
import Start from "./start";
import Journey from "./journey";
import Result from "./result"
import { JourneyContext } from "./context/JourneyContext.js";
import { Route, Routes } from "react-router-dom";

function App() {
  const [journey, setJourney] = useState("");

  return (
    <div className="App">
      <JourneyContext.Provider value={{ journey, setJourney }}>
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Start />}></Route>
            <Route path="/journey" element={<Journey />}></Route>
            <Route path="/result" element={<Result />}></Route>
          </Routes>
        </header>
      </JourneyContext.Provider>
    </div>
  );
}

export default App;
