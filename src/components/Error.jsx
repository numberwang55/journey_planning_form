export default function NoUrlError({setView}) {

    const handleTryAgainClick = () => {
        setView("start")
    }

    return (
        <section>
            <br />
            <h2>Network error!</h2>
            <button
            onClick={() => handleTryAgainClick()}
            >Try again</button>
        </section>
    )
}