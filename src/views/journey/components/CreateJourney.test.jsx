import React from 'react';
import { render, fireEvent, screen,  } from '@testing-library/react';
import { CreateJourney } from './CreateJourney';
import '@testing-library/jest-dom'

describe('CreateJourney', () => {
  test('renders without errors', () => {
    render(<CreateJourney setView={() => {}} postcodes={[]} setPostcodes={() => {}} />);
  });

  test('allows adding a valid postcode', () => {
    const setPostcodesMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <CreateJourney setView={() => {}} postcodes={[]} setPostcodes={setPostcodesMock} />
    );

    const postcodeInput = getByPlaceholderText('Enter a postcode');
    const addButton = getByText('Add Postcode');

    fireEvent.change(postcodeInput, { target: { value: 'SW1A 1AA' } });
    fireEvent.click(addButton);

    expect(setPostcodesMock).toHaveBeenCalledWith(['SW1A 1AA']);
  });

  test('prevents adding an invalid postcode', () => {
    const setPostcodesMock = jest.fn();
    const { getByPlaceholderText, getByText, queryByText } = render(
      <CreateJourney setView={() => {}} postcodes={[]} setPostcodes={setPostcodesMock} />
    );

    const postcodeInput = getByPlaceholderText('Enter a postcode');
    const addButton = getByText('Add Postcode');

    fireEvent.change(postcodeInput, { target: { value: 'invalid postcode' } });
    fireEvent.click(addButton);

    expect(setPostcodesMock).not.toHaveBeenCalled();
    expect(queryByText(/Invalid Postcode/)).toBeInTheDocument();
  });

  test('allows removing a postcode', () => {
    const postcodes = ['SW1A 1AA'];
    const setPostcodesMock = jest.fn();
    const { getByText, queryByText } = render(
      <CreateJourney setView={() => {}} postcodes={postcodes} setPostcodes={setPostcodesMock} />
    );

    const removeButton = getByText('❌');
    fireEvent.click(removeButton);

    expect(setPostcodesMock).toHaveBeenCalledWith([]);
    expect(queryByText('SW1A 1AA')).not.toBeInTheDocument();
  });

  test('allows moving a postcode up', () => {
    const postcodes = ['SW1A 1AA', 'W1G 0AE'];
    const setPostcodesMock = jest.fn();
    const { getByTestId } = render(
      <CreateJourney setView={() => {}} postcodes={postcodes} setPostcodes={setPostcodesMock} />
    );

    const moveUpButton = getByTestId("move-up-button-1");
    fireEvent.click(moveUpButton);

    expect(setPostcodesMock).toHaveBeenCalledWith(['W1G 0AE', 'SW1A 1AA']);
  });

  test('allows moving a postcode down', () => {
    const postcodes = ['SW1A 1AA', 'W1G 0AE'];
    const setPostcodesMock = jest.fn();
    const { getByTestId } = render(
      <CreateJourney setView={() => {}} postcodes={postcodes} setPostcodes={setPostcodesMock} />
    );

    const moveDownButton = getByTestId("move-down-button-0");
    fireEvent.click(moveDownButton);

    expect(setPostcodesMock).toHaveBeenCalledWith(['W1G 0AE', 'SW1A 1AA']);
  });

  test('calls setView when "Calculate Journey" button is clicked', () => {
    const setViewMock = jest.fn();
    const postcodes = ['SW1A 1AA', 'W1G 0AE'];
    const { getByText } = render(
      <CreateJourney setView={setViewMock} postcodes={postcodes} setPostcodes={() => {}} />
    );

    const calculateButton = getByText('Calculate Journey');
    fireEvent.click(calculateButton);

    expect(setViewMock).toHaveBeenCalledWith('result');
  });
});
