const fetchJourney = (route, format = "miles", travelMode = "driving", trafficModel = "best_guess") => {
    const queryParams = new URLSearchParams({
      Route: route.toString(),
      Format: format,
      TravelMode: travelMode,
      TrafficModel: trafficModel
    });
  
    return fetch(`https://media.carecontrolsystems.co.uk/Travel/JourneyPlan.aspx?${queryParams}`)
      .then(response => {
        if (!response.staus === 200) {
          throw new Error("Failed to fetch journey data. Please try again.");
        }
        return response.text()
      })
      .then(data => data)
      .catch(e => {
        throw new Error(e.message);
      })
  };
  
  export default fetchJourney;