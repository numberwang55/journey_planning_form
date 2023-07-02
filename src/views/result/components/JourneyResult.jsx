import { JourneyContext } from "../../../context/JourneyContext";
// import { JourneyContext } from "../../context/JourneyContext";
import { useContext } from "react";

export default function JourneyResult({ setView }) {

  const { journey } = useContext(JourneyContext);

  const handleOnStartClick = () => {
    setView("start")
  }

  return (
    <div className="result-container">
      <ul>
        <li>{journey.postcodeOneTravelTime}</li>
        <li>{journey.postcodeOneDistance}</li>
        {journey.postcodeTwoDistance !== "" ? 
        <li>{journey.postcodeTwoTravelTime}</li>
        : null}
        {journey.postcodeTwoDistance !== "" ?
         <li>{journey.postcodeTwoDistance}</li>
         : null
        }
      </ul>
      <button onClick={() => handleOnStartClick()}>Start Over</button>
    </div>
  );
}