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
  let journey = "";
  for (let index = 0; index < journeyData.travelTimes.length; index++) {
    const travelTime = journeyData.travelTimes[index];
    const distance = journeyData.distances[index];
    journey += `${travelTime} minutes of travel between ${
      journeyData.postcodes[index]
    } and ${
      journeyData.postcodes[index + 1]
    }.\n${distance} miles of travel between ${
      journeyData.postcodes[index]
    } and ${journeyData.postcodes[index + 1]}.\n`;
  }
  return journey;
}

// const inputString = '59,42.1;44,26.7;';
// const journeyData = journeyFormatter(inputString);
// console.log(journeyData);