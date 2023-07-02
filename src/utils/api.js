import axios from "axios";

const apiUrl = axios.create({
    baseURL: "https://media.carecontrolsystems.co.uk"
})

const fetchJourney = (route, format = "miles", travelMode = "driving", trafficmodal= "best_guess") => {
    return apiUrl.get("/Travel/JourneyPlan.aspx", {
        params: {
            route: route.toString(),
            format: format,
            travelMode: travelMode,
            trafficmodal: trafficmodal
        }
    }).then(({data} )=> data)
}

export default fetchJourney

// fetchJourney(["ex203rx, sg86ed"]).then(res => console.log(res))
