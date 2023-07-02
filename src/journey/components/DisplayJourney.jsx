import { useContext, useEffect, useState } from "react";
import fetchJourney from "../../utils/api";
import { JourneyContext } from "../../context/JourneyContext.js";
import { journeyFormatter } from "../../utils/journeyFormatter";
import { useNavigate } from "react-router-dom";

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
}) => {

  const navigate = useNavigate();
  const { journey, setJourney } = useContext(JourneyContext);

  useEffect(() => {
    fetchJourney(postcodes).then((journey) => {
      setJourney(journeyFormatter(journey));
    });
  }, [postcodes]);

  return (
    <div className="journey-entry-container">
      <h2>Journey Entry</h2>
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
      {isInvalidPostcode ? <p>Invalid Postcode</p> : null}
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
                  <input
                    type="text"
                    value={postcode}
                    onChange={(e) => handleEditPostcode(index, e.target.value)}
                  />
                </td>
                <td>
                  <button onClick={() => handleRemovePostcode(index)}>
                    Remove
                  </button>
                  <button
                    onClick={() => handleMoveUp(index)}
                    disabled={index === 0}
                  >
                    Move Up
                  </button>
                  <button
                    onClick={() => handleMoveDown(index)}
                    disabled={index === postcodes.length - 1}
                  >
                    Move Down
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
          navigate("/result")
        }}
        disabled={postcodes.length < 2}
      >
        Calculate Journey
      </button>
    </div>
  );
};
