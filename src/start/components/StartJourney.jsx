export const StartJourney = ({ setView }) => {
  return (
    <div className="start-journey-container">
      <h1>Welcome to the Postcode Journey Planner</h1>
      <button onClick={() => setView("journey")}>Start Journey</button>
    </div>
  );
};
