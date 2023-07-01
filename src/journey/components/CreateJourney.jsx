import { useState } from "react";

export const CreateJourney = () => {
  const [postcode, setPostcode] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input
      type="text"
      value={postcode}
      onChange={(event) => {
        event.preventDefault() 
        setPostcode(event.target.value);
      }}
    />
    <button>
        Add
    </button>
    </form>
  );
};
