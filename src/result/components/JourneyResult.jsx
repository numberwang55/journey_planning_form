import { JourneyContext } from "../../context/JourneyContext"
import { useContext} from "react";

export default function JourneyResult({setView}) {

    const { journey } = useContext(JourneyContext);

    return (
        <div className="result-container">
            <p>{journey}</p>
            <button onClick={() => setView("start")} >Start Over</button>
        </div>
    )
}