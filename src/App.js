import { useState } from "react";
import "./App.css";
import Start from "./pages/Start";
import Journey from "./pages/Journey"
import { JourneyContext } from "./context/JourneyContext";
import { Route, Routes } from "react-router-dom";

function App() {
  const [journey, setJourney] = useState({
    minutesBetweenP1AndP2: 0.0,
    milesBetweenP1AndP2: 0.0,
    minutesBetweenP2AndP3: 0.0,
    milesBetweenP2AndP3: 0.0,
  });

  return (
    <div className="App">
      <JourneyContext.Provider value={{ journey, setJourney }}>
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Start />}></Route>
            <Route path="/journey" element={<Journey />}></Route>
          </Routes>
        </header>
      </JourneyContext.Provider>
    </div>
  );
}

export default App;
