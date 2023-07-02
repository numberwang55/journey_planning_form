import { JourneyContext } from "../../context/JourneyContext"
import { useContext} from "react";
import { useNavigate } from "react-router-dom";

export default function JourneyResult() {

    const navigate = useNavigate();
    const { journey } = useContext(JourneyContext);

    return (
        <div className="result-container">
            <p>{journey}</p>
            <button onClick={() => navigate("/")} >Start Over</button>
        </div>
    )
}