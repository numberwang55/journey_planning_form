import { render, waitFor, fireEvent } from '@testing-library/react';
import JourneyResult from './JourneyResult';
import { JourneyContext } from '../../../context/JourneyContext';
import '@testing-library/jest-dom'

describe('JourneyResult', () => {
  test('displays journey results for the postcodes distances and times', async () => {
    const mockPostcodes = ['AB1 2CD', 'EF3 4GH', 'IJ5 6KL'];
    const mockJourney = {
      postcodeOneTravelTime: '1 hour',
      postcodeOneDistance: '10 miles',
      postcodeTwoTravelTime: '2 hours',
      postcodeTwoDistance: '20 miles',
    };

    const mockJourneyContextValue = {
      journey: mockJourney,
      setJourney: jest.fn(),
    };

    const { getByText } = render(
      <JourneyContext.Provider value={mockJourneyContextValue}>
        <JourneyResult
          setView={jest.fn()}
          postcodes={mockPostcodes}
          setPostcodes={jest.fn()}
        />
      </JourneyContext.Provider>
    );

    await waitFor(() => {
      expect(getByText(/1 hour AB1 2CD and EF3 4GH/)).toBeInTheDocument();
      expect(getByText(/10 miles AB1 2CD and EF3 4GH/)).toBeInTheDocument();
      expect(getByText(/2 hours EF3 4GH and IJ5 6KL/)).toBeInTheDocument();
      expect(getByText(/20 miles EF3 4GH and IJ5 6KL/)).toBeInTheDocument();
    });
  });
});
