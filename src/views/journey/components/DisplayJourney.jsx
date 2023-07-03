export const DisplayJourney = ({
  postcodeInput,
  postcodes,
  handlePostcodeChange,
  handleAddPostcode,
  handleEditPostcode,
  handleRemovePostcode,
  handleMoveUp,
  handleMoveDown,
  handleCalculateClick,
  isInvalidPostcode,
  handleClearInput,
  checkValidUKPostcode,
}) => {
  return (
    <div className="display-journey-container">
      <h2>Journey Postcode Entry</h2>
      <input
        type="text"
        placeholder="Enter a postcode"
        value={postcodeInput}
        onChange={handlePostcodeChange}
        aria-label="Postcode entry box"
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
                    aria-label={`${postcode}`}
                  />
                  {!checkValidUKPostcode(postcode) ? (
                    <p>Invalid Postcode</p>
                  ) : null}
                </td>
                <td>
                  <button onClick={() => handleRemovePostcode(index)}>
                    ❌
                  </button>
                  <button
                    onClick={() => handleMoveUp(index)}
                    disabled={index === 0}
                    data-testid={`move-up-button-${index}`}
                  >
                    🔼
                  </button>
                  <button
                    onClick={() => handleMoveDown(index)}
                    disabled={index === postcodes.length - 1}
                    data-testid={`move-down-button-${index}`}
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
          handleCalculateClick();
        }}
        disabled={postcodes.length < 2 || isInvalidPostcode}
      >
        Calculate Journey
      </button>
    </div>
  );
};
