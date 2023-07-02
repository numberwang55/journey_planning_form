export function journeyFormatter(str) {
  const journeyData = {
    postcodes: [],
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

  const postcodesCount = journeyData.travelTimes.length + 1;

  for (let i = 0; i < postcodesCount; i++) {
    journeyData.postcodes.push(`Postcode ${i + 1}`);
  }
  let journey = {
    postcodeOneTravelTime: "",
    postcodeOneDistance: "",
    postcodeTwoTravelTime: "",
    postcodeTwoDistance: ""
  };
  // for (let index = 0; index < journeyData.travelTimes.length; index++) {
  //   const travelTime = journeyData.travelTimes[index];
  //   const distance = journeyData.distances[index];
  //   // journey += `${travelTime} minutes of travel between ${
  //   //   journeyData.postcodes[index]
  //   // } and ${
  //   //   journeyData.postcodes[index + 1]
  //   // }.\n${distance} miles of travel between ${
  //   //   journeyData.postcodes[index]
  //   // } and ${journeyData.postcodes[index + 1]}.\n`;
  // }
  if (journeyData.travelTimes.length >= 1) {
    journey.postcodeOneTravelTime = `${journeyData.travelTimes[0]} minutes of travel between ${journeyData.postcodes[0]} and ${journeyData.postcodes[1]}`;

    journey.postcodeOneDistance = `${journeyData.distances[0]} miles of travel between ${journeyData.postcodes[0]} and ${journeyData.postcodes[1]}`;
  }

  if (journeyData.travelTimes.length >= 2) {
    journey.postcodeTwoTravelTime = `${journeyData.travelTimes[1]} minutes of travel between ${journeyData.postcodes[1]} and ${journeyData.postcodes[2]}`;
    
    journey.postcodeTwoDistance = `${journeyData.distances[1]} miles of travel between ${journeyData.postcodes[1]} and ${journeyData.postcodes[2]}`;
  }

  return journey;
}