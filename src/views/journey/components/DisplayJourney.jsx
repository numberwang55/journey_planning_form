import { useContext, useEffect, useState } from "react";
import fetchJourney from "../../../utils/api";
import { JourneyContext } from "../../../context/JourneyContext";
import { journeyFormatter } from "../../../utils/journeyFormatter";

export const DisplayJourney = ({
  postcodeInput,
  postcodes,
  handlePostcodeChange,
  handleAddPostcode,
  handleEditPostcode,
  handleRemovePostcode,
  handleMoveUp,
  handleMoveDown,
  isInvalidPostcode,
  handleClearInput,
  setView
}) => {
  const { setJourney } = useContext(JourneyContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJourney(postcodes)
      .then((journey) => {
        setJourney(journeyFormatter(journey));
      })
      .catch((err) => {
        setError(err);
        console.log(err);
        setIsLoading(false);
      });
  }, [postcodes]);

  return (
    <div className="journey-entry-container">
      <h2>Journey Postcode Entry</h2>
      <input
        type="text"
        placeholder="Enter a postcode"
        value={postcodeInput}
        onChange={handlePostcodeChange}
      />
      <button
        onClick={handleAddPostcode}
        disabled={postcodes.length >= 3 || postcodeInput === ""}
      >
        Add Postcode
      </button>
      <button onClick={handleClearInput} disabled={postcodeInput === ""}>
        Clear
      </button>
      {isInvalidPostcode && postcodeInput !== "" ? (
        <p>Invalid Postcode</p>
      ) : null}
      {postcodes.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Step</th>
              <th>Postcode</th>
            </tr>
          </thead>
          <tbody>
            {postcodes.map((postcode, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {/* <input
                    type="text"
                    value={postcode}
                    onChange={(e) => handleEditPostcode(index, e.target.value)}
                  />
                  {isInvalidPostcode ? (
                    <p>Invalid Postcode</p>
                  ) : null} */}
                  {postcode}
                </td>
                <td>
                  <button onClick={() => handleRemovePostcode(index)}>
                    ❌
                  </button>
                  <button
                    onClick={() => handleMoveUp(index)}
                    disabled={index === 0}
                  >
                    🔼
                  </button>
                  <button
                    onClick={() => handleMoveDown(index)}
                    disabled={index === postcodes.length - 1}
                  >
                    🔽
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      <br />
      <button
        onClick={() => {
          setView("loading")
          setTimeout(() => {
            setView("result")
          }, 3000)
        }}
        disabled={postcodes.length < 2}
      >
        Calculate Journey
      </button>
    </div>
  );
};

