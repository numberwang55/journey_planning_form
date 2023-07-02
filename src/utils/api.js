const fetchJourney = (route, format = "miles", travelMode = "driving", trafficModel = "best_guess") => {
    const queryParams = new URLSearchParams({
      Route: route.toString(),
      Format: format,
      TravelMode: travelMode,
      TrafficModel: trafficModel
    });
  
    return fetch(`https://edia.carecontrolsystems.co.uk/Travel/JourneyPlan.aspx?${queryParams}`)
      .then(response => response.text())
      .then(data => data);
  };
  
  export default fetchJourney;