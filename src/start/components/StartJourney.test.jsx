import { render, screen } from "@testing-library/react"
import { StartJourney } from "./StartJourney";
import '@testing-library/jest-dom'


describe('tests the StartJourney component', () => {
    it('should render welcome text on screen', () => {
        render(<StartJourney/>)
        const welcomeText = screen.getByText("Welcome to the Journey Planning Form");
        expect(welcomeText).toBeInTheDocument();
    });
});