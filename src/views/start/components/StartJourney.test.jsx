import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { StartJourney } from "./StartJourney";
import "@testing-library/jest-dom";

describe("tests the StartJourney component", () => {
  it("displays welcome text on screen", () => {
    render(<StartJourney />);
    const welcomeText = screen.getByText(
      "Welcome to the Postcode Journey Planner"
    );
    expect(welcomeText).toBeInTheDocument();
  });
  it("displays start journey button on screen", () => {
    render(<StartJourney />);
    const welcomeText = screen.getByText("Start Journey");
    expect(welcomeText).toBeInTheDocument();
  });
});