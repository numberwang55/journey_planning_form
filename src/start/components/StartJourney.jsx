export const StartJourney = ({ navigateToJourney }) => {
  return (
    <div className="start-journey-container">
      <h1>Welcome to the Journey Planning Form</h1>
      <button onClick={() => navigateToJourney()}>Start Journey</button>
    </div>
  );
};
