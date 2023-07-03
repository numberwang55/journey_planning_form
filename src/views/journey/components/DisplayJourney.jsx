import { useState } from "react";

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
  setView,
  isValidUKPostcode
}) => {
  console.log(postcodes);

  const handleCalculateClick = () => {
    const invalid = postcodes.every(isValidUKPostcode)
    if (invalid) {
      setView("result");
    }
  }

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
              <th>Actions</th>
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
                  {!isValidUKPostcode(postcode) ? (
                    <p>Invalid Postcode</p>
                  ) : null}
                  {/* {postcode} */}
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
          handleCalculateClick()
        }}
        disabled={postcodes.length < 2}
      >
        Calculate Journey
      </button>
    </div>
  );
};
