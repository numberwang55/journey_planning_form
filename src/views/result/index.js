import JourneyResult from "./components/JourneyResult";

export default function Result({ setView, postcodes, setPostcodes }) {
  return (
    <JourneyResult
      setView={setView}
      postcodes={postcodes}
    />
  );
}
