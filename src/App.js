import { useState } from "react";
import "./App.css";
import Start from "./start";
import Journey from "./journey";
import Result from "./result";
import { JourneyContext } from "./context/JourneyContext.js";

function App() {
  const [journey, setJourney] = useState("");
  const [view, setView] = useState("start");

  return (
    <div className="App">
      <JourneyContext.Provider value={{ journey, setJourney }}>
        <header className="App-header">
          <div>
            {view === "start" && (
              <div>
                <Start setView={setView} />
              </div>
            )}
            {view === "journey" && (
              <div>
                <Journey setView={setView} />
              </div>
            )}
            {view === "result" && (
              <div>
                <Result setView={setView} />
              </div>
            )}
          </div>
        </header>
      </JourneyContext.Provider>
    </div>
  );
}

export default App;
