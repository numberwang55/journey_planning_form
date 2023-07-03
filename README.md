# Journey Planner App

The Journey Planner App is a single-page web application built with React that allows users to plan journeys by entering UK postcodes and calculating travel distances and times between them.

## Features

- Simple and user-friendly interface
- Add, edit, remove, and reorder postcodes in the journey list
- Calculate travel distances and times between postcodes using an API call
- Display total travel distance and total travel time for the entire journey
- Support for multiple browsers and screen sizes

## Installation

1. Clone the repository:
   git clone https://github.com/numberwang55/journey_planning_form

2. Navigate to the project directory:
   cd journey_planning_form

3. Install the dependencies:
   npm i

4. Start the development server:
   npm start

5. Open the app in your browser at `http://localhost:3000`.

## Usage

1. Start the journey planning by clicking the "Start Journey" button on the initial screen.

2. On the journey entry screen, enter a valid UK postcode in the input box and click the "Add" button to add it to the journey list. The table allows you to edit, remove, or reorder the postcodes.

3. Once you have added all the desired postcodes, click the "Calculate Journey" button to fetch the travel distances and times from the api.

4. During the calculation, a loading image will be displayed. Upon completion, the result screen will show the total travel distance and total travel time between the first and second postcode and the second and third, if applicable.

5. To start a new journey, click the "Start Over" button on the result screen.

## Testing

To run the unit tests please use the below command:

```
$ npm t
```
## Technologies Used

- React
- JavaScript
- CSS
