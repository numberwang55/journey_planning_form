import { CreateJourney } from "./components/CreateJourney";

export default function Journey({ setView, postcodes, setPostcodes }) {
  return (
    <CreateJourney
      setView={setView}
      postcodes={postcodes}
      setPostcodes={setPostcodes}
    />
  );
}
