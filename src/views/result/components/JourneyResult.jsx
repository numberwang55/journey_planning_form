import { JourneyContext } from "../../../context/JourneyContext";
import { useContext, useState, useEffect } from "react";
import Loading from "../../../components/Loading";
import fetchJourney from "../../../utils/api";
import { journeyFormatter } from "../../../utils/journeyFormatter";

export default function JourneyResult({ setView, postcodes }) {

  const { journey, setJourney } = useContext(JourneyContext);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnStartClick = () => {
    setView("start")
  }

  useEffect(() => {
    setIsLoading(true);
    fetchJourney(postcodes)
      .then((journey) => {
        setJourney(journeyFormatter(journey));
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
        setIsLoading(false);
      });
  }, [postcodes]);

  if (isLoading) {
    return <Loading />;
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