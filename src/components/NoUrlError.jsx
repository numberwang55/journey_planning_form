import { Link } from "react-router-dom"

export default function NoUrlError() {
    return (
        <section className="error">
            <Link to="/"><h2>Home</h2></Link>
            <br />
            <h2>404 - Url not found</h2>
        </section>
    )
}