export const DisplayJourney = ({
  postcodeInput,
  postcodes,
  handlePostcodeChange,
  handleAddPostcode,
  handleEditPostcode,
  handleRemovePostcode,
  handleMoveUp,
  handleMoveDown,
}) => {
  return (
    <div>
      <h2>Journey Entry</h2>
      <input
        type="text"
        value={postcodeInput}
        onChange={handlePostcodeChange}
      />
      <button onClick={handleAddPostcode} disabled={postcodes.length >= 3}>
        Add Postcode
      </button>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Postcode</th>
            <th>Action</th>
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
    </div>
  );
};
