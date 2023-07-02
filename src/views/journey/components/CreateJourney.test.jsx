import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react"
import { CreateJourney } from "./CreateJourney"

describe('tests the CreateJourney component', () => {
    it('should trigger addToTable function with valid input', () => {
        render(<CreateJourney/>)
    });
    it('should not trigger addToTable function when input is invalid', () => {
        
    });
    it('should clear the postcode string upon submission with valid input', () => {
        
    });
    it('should not clear postcode string if postcode is invalid', () => {
        
    });
});