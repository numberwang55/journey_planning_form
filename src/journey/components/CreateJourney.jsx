import React, { useState } from 'react';
import { DisplayJourney } from './DisplayJourney';

export const CreateJourney = () => {
    const [postcodeInput, setPostcodeInput] = useState('');
    const [postcodes, setPostcodes] = useState([]);
  
    const handlePostcodeChange = (event) => {
      setPostcodeInput(event.target.value);
    };

    const isValidUKPostcode = (postcode) => {
        if (postcode.match(/^[a-zA-Z]{1,2}([0-9]{1,2}|[0-9][a-zA-Z])\s*[0-9][a-zA-Z]{2}$/)) {
            return true;
        } else {
            <p>Invalid Postcode</p>;
        }
      };
  
    const handleAddPostcode = () => {
      if (isValidUKPostcode(postcodeInput) && postcodes.length < 3) {
        setPostcodes([...postcodes, postcodeInput]);
        setPostcodeInput('');
      }
    };
  
    const handleEditPostcode = (index, newPostcode) => {
      if (isValidUKPostcode(newPostcode)) {
        const updatedPostcodes = [...postcodes];
        updatedPostcodes[index] = newPostcode;
        setPostcodes(updatedPostcodes);
      }
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
        />
    )
}