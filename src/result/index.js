import { useNavigate } from "react-router-dom";
import JourneyResult from "./components/JourneyResult";

export default function Result({ setView }) {
  return <JourneyResult setView={setView} />;
}
