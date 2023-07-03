import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

    fireEvent.change(postcodeInput, { target: { value: 'EX20 3BP' } });
    fireEvent.click(addButton);

    expect(setPostcodesMock).toHaveBeenCalledWith(['EX20 3BP']);
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
    const postcodes = ['EX20 3BP'];
    const setPostcodesMock = jest.fn();
    const { getByText, queryByText } = render(
      <CreateJourney setView={() => {}} postcodes={postcodes} setPostcodes={setPostcodesMock} />
    );

    const removeButton = getByText('❌');
    fireEvent.click(removeButton);

    expect(setPostcodesMock).toHaveBeenCalledWith([]);
    expect(queryByText('EX20 3BP')).not.toBeInTheDocument();
  });

  test('allows moving a postcode up', () => {
    const postcodes = ['EX20 3BP', 'SG8 6ED'];
    const setPostcodesMock = jest.fn();
    const { getByTestId } = render(
      <CreateJourney setView={() => {}} postcodes={postcodes} setPostcodes={setPostcodesMock} />
    );

    const moveUpButton = getByTestId("move-up-button-1");
    fireEvent.click(moveUpButton);

    expect(setPostcodesMock).toHaveBeenCalledWith(['SG8 6ED', 'EX20 3BP']);
  });

  test('allows moving a postcode down', () => {
    const postcodes = ['EX20 3BP', 'SG8 6ED'];
    const setPostcodesMock = jest.fn();
    const { getByTestId } = render(
      <CreateJourney setView={() => {}} postcodes={postcodes} setPostcodes={setPostcodesMock} />
    );

    const moveDownButton = getByTestId("move-down-button-0");
    fireEvent.click(moveDownButton);

    expect(setPostcodesMock).toHaveBeenCalledWith(['SG8 6ED', 'EX20 3BP']);
  });

  test('calls setView when "Calculate Journey" button is clicked', () => {
    const setViewMock = jest.fn();
    const postcodes = ['EX20 3BP', 'SG8 6ED'];
    const { getByText } = render(
      <CreateJourney setView={setViewMock} postcodes={postcodes} setPostcodes={() => {}} />
    );

    const calculateButton = getByText('Calculate Journey');
    fireEvent.click(calculateButton);

    expect(setViewMock).toHaveBeenCalledWith('result');
  });
});
