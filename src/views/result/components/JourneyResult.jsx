import { JourneyContext } from "../../../context/JourneyContext";
import { useContext, useState, useEffect } from "react";
import Loading from "../../../components/Loading";
import fetchJourney from "../../../utils/api";
import { journeyFormatter } from "../../../utils/journeyFormatter";

export default function JourneyResult({ setView, postcodes, setPostcodes }) {
  const { journey, setJourney } = useContext(JourneyContext);
  const [error, setError] = useState("");
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
        setIsError(true);
        setError(err);
        setIsLoading(false);
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

  const postcodeOneTravelTime = `${journey.postcodeOneTravelTime} ${postcodes[0].toUpperCase()} and ${postcodes[1].toUpperCase()}`
  const postcodeOneDistance = `${journey.postcodeOneDistance} ${postcodes[0].toUpperCase()} and ${postcodes[1].toUpperCase()}`
  let postcodeTwoTravelTime = ""
  let postcodeTwoDistance = ""
  if (postcodes[2] !== undefined) {
    postcodeTwoTravelTime = `${journey.postcodeTwoTravelTime} ${postcodes[1].toUpperCase()} and ${postcodes[2].toUpperCase()}`
    postcodeTwoDistance = `${journey.postcodeTwoDistance} ${postcodes[1].toUpperCase()} and ${postcodes[2].toUpperCase()}`
  }

  return (
    <div className="result-container">
      <h2>Your Journey Results:</h2>
      <ul>
        <li>{postcodeOneTravelTime}</li>
        <li>{postcodeOneDistance}</li>
        {journey.postcodeTwoDistance !== "" ? (
          <li>{postcodeTwoTravelTime}</li>
        ) : null}
        {journey.postcodeTwoDistance !== "" ? (
          <li>{postcodeTwoDistance}</li>
        ) : null}
      </ul>
      <button onClick={() => handleOnStartOverClick()}>Start Over</button>
    </div>
  );
}
