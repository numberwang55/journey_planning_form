import { useState } from "react";
import "./App.css";
import Start from "./views/start";
import Journey from "./views/journey";
import Result from "./views/result";
import { JourneyContext } from "./context/JourneyContext.js";
import Loading from "./components/Loading";

function App() {
  const [journey, setJourney] = useState({});
  const [postcodes, setPostcodes] = useState([]);
  const [view, setView] = useState("start");

  return (
    <div className="app-container">
      <JourneyContext.Provider value={{ journey, setJourney }}>
        {/* <Loading/> */}
        <div>
          {view === "start" && (
            <div>
              <Start setView={setView} />
            </div>
          )}
          {view === "journey" && (
            <div>
              <Journey
                setView={setView}
                postcodes={postcodes}
                setPostcodes={setPostcodes}
              />
            </div>
          )}
          {view === "loading" && (
            <div>
              <Loading />
            </div>
          )}
          {view === "result" && (
            <div>
              <Result
                setView={setView}
                postcodes={postcodes}
                setPostcodes={setPostcodes}
              />
            </div>
          )}
        </div>
      </JourneyContext.Provider>
    </div>
  );
}

export default App;
