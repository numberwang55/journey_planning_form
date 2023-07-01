import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { StartJourney } from "./StartJourney";
import "@testing-library/jest-dom";
import { MemoryRouter, BrowserRouter } from "react-router-dom";

describe("tests the StartJourney component", () => {
  it("should render welcome text on screen", () => {
    render(<StartJourney />);
    const welcomeText = screen.getByText(
      "Welcome to the Journey Planning Form"
    );
    expect(welcomeText).toBeInTheDocument();
  });
  it("should render start journey button on screen", () => {
    render(<StartJourney />);
    const welcomeText = screen.getByText("Start Journey");
    expect(welcomeText).toBeInTheDocument();
  });
});