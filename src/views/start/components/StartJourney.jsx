export const StartJourney = ({ setView }) => {

  const onStartClickHandler = () => {
    setView("journey");
  };

  return (
    <div className="start-journey-container">
      <h1>Welcome to the Postcode Journey Planner</h1>
      <button onClick={() => onStartClickHandler()}>Start Journey</button>
    </div>
  );
};
