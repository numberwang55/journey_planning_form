import React, { useState } from "react";
import { DisplayJourney } from "./DisplayJourney";

export const CreateJourney = ({ setView, postcodes, setPostcodes }) => {
  const [postcodeInput, setPostcodeInput] = useState("");
  const [isInvalidPostcode, setIsInvalidPostcode] = useState(false);

  const handlePostcodeChange = (event) => {
    setPostcodeInput(event.target.value);
    if (postcodeInput.length === 0) {
      setIsInvalidPostcode(false);
    }
  };

  const isValidUKPostcode = (postcode) => {
    if (
      postcode.match(
        /^[a-zA-Z]{1,2}([0-9]{1,2}|[0-9][a-zA-Z])\s*[0-9][a-zA-Z]{2}$/
      )
    ) {
      setIsInvalidPostcode(false);
      return true;
    } else {
      setIsInvalidPostcode(true);
    }
  };

  const handleAddPostcode = () => {
    if (isValidUKPostcode(postcodeInput) && postcodes.length < 3) {
      setPostcodes([...postcodes, postcodeInput]);
      setPostcodeInput("");
      // setIsInvalidPostcode(false)
    }
  };

  const handleEditPostcode = (index, newPostcode) => {
    const updatedPostcodes = [...postcodes];
    updatedPostcodes[index] = newPostcode;
    setPostcodes(updatedPostcodes);
  };

  const handleRemovePostcode = (index) => {
    const updatedPostcodes = [...postcodes];
    updatedPostcodes.splice(index, 1);
    setPostcodes(updatedPostcodes);
  };

  const handleMoveUp = (index) => {
    if (index > 0) {
      const updatedPostcodes = [...postcodes];
      [updatedPostcodes[index - 1], updatedPostcodes[index]] = [
        updatedPostcodes[index],
        updatedPostcodes[index - 1],
      ];
      setPostcodes(updatedPostcodes);
    }
  };

  const handleMoveDown = (index) => {
    if (index < postcodes.length - 1) {
      const updatedPostcodes = [...postcodes];
      [updatedPostcodes[index], updatedPostcodes[index + 1]] = [
        updatedPostcodes[index + 1],
        updatedPostcodes[index],
      ];
      setPostcodes(updatedPostcodes);
    }
  };

  const handleClearInput = () => {
    setPostcodeInput("");
    setIsInvalidPostcode(false);
  };

  return (
    <DisplayJourney
      postcodeInput={postcodeInput}
      postcodes={postcodes}
      handlePostcodeChange={handlePostcodeChange}
      handleAddPostcode={handleAddPostcode}
      handleEditPostcode={handleEditPostcode}
      handleMoveUp={handleMoveUp}
      handleMoveDown={handleMoveDown}
      handleRemovePostcode={handleRemovePostcode}
      isInvalidPostcode={isInvalidPostcode}
      handleClearInput={handleClearInput}
      setView={setView}
      isValidUKPostcode={isValidUKPostcode}
    />
  );
};
