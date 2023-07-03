export function journeyFormatter(str) {
  const journeyData = {
    travelTimes: [],
    distances: [],
  };

  const parts = str.split(";");

  for (let i = 0; i < parts.length; i++) {
    const section = parts[i];
    const [time, distance] = section.split(",");

    if (time && distance) {
      journeyData.travelTimes.push(parseFloat(time));
      journeyData.distances.push(parseFloat(distance));
    }
  }

  let journey = {
    postcodeOneTravelTime: "",
    postcodeOneDistance: "",
    postcodeTwoTravelTime: "",
    postcodeTwoDistance: ""
  };

  if (journeyData.travelTimes.length >= 1) {
    journey.postcodeOneTravelTime = `${journeyData.travelTimes[0]} minutes of travel between `;

    journey.postcodeOneDistance = `${journeyData.distances[0]} miles of travel between `;
  }

  if (journeyData.travelTimes.length >= 2) {
    journey.postcodeTwoTravelTime = `${journeyData.travelTimes[1]} minutes of travel between `;
    
    journey.postcodeTwoDistance = `${journeyData.distances[1]} miles of travel between `;
  }

  return journey;
}