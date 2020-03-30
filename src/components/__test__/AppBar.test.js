import '@testing-library/jest-dom';
import { create } from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import AppBar from '../AppBar';

describe('AppBar component', () => {
  it('should matches the snapshot', () => {
    const appBar = create(<AppBar />);
    expect(appBar.toJSON()).toMatchSnapshot();
  });

  it('should display children', () => {
    const children = 'test';
    const { getByText } = render(<AppBar>{children}</AppBar>);
    expect(getByText(children)).toBeInTheDocument();
  });
});
