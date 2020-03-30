import '@testing-library/jest-dom';
import { create } from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import AddCard from '../AddCard';

describe('AddCArd component', () => {
  it('should matches the snapshot', () => {
    const addCard = create(<AddCard />);
    expect(addCard.toJSON()).toMatchSnapshot();
  });

  it('should be clickable', () => {
    let count = 0;
    const { getByRole } = render(<AddCard onClick={() => { count += 1; }} />);
    fireEvent.click(getByRole('button'));
    expect(count).toEqual(1);
  });
});
