import { JourneyContext } from "../../../context/JourneyContext";
import { useContext, useState, useEffect } from "react";
import Loading from "../../../components/Loading";
import fetchJourney from "../../../utils/api";
import { journeyFormatter } from "../../../utils/journeyFormatter";

export default function JourneyResult({ setView, postcodes, setPostcodes }) {
  const { journey, setJourney } = useContext(JourneyContext);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnStartOverClick = () => {
    setPostcodes([]);
    setView("start");
  };

  useEffect(() => {
    setIsLoading(true);
    fetchJourney(postcodes)
      .then((journey) => {
        setJourney(journeyFormatter(journey));
        setIsLoading(false);
      })
      .catch((err) => {
        // isError(true);
        // setError(err);
        // setIsLoading(false);
      });
  }, [postcodes, isError, setJourney]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => handleOnStartOverClick()}>Start Over</button>
      </div>
    );
  }

  return (
    <div className="result-container">
      <ul>
        <li>{journey.postcodeOneTravelTime}</li>
        <li>{journey.postcodeOneDistance}</li>
        {journey.postcodeTwoDistance !== "" ? (
          <li>{journey.postcodeTwoTravelTime}</li>
        ) : null}
        {journey.postcodeTwoDistance !== "" ? (
          <li>{journey.postcodeTwoDistance}</li>
        ) : null}
      </ul>
      <button onClick={() => handleOnStartOverClick()}>Start Over</button>
    </div>
  );
}
