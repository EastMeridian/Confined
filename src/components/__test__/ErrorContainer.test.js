import '@testing-library/jest-dom';
import { create } from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import ErrorContainer from '../ErrorContainer';
import '@testing-library/jest-dom/extend-expect';

describe('ErrorContainer component', () => {
  const testMessage = 'Test children';
  const TestChildren = () => <div>{testMessage}</div>;
  const testError = 'Error Message';

  it('should matches the snapshot', () => {
    const container = create(<ErrorContainer error={testError} />);
    expect(container.toJSON()).toMatchSnapshot();
  });


  it('should display children with no error provided', () => {
    const { getByText } = render(<ErrorContainer><TestChildren /></ErrorContainer>);
    expect(getByText(testMessage)).toBeInTheDocument();
  });

  it('should display error but not childen with error', () => {
    const { getByText, queryByText } = render(
      <ErrorContainer error={testError}><TestChildren /></ErrorContainer>,
    );
    expect(getByText(testError)).toBeInTheDocument();
    expect(queryByText(testMessage)).not.toBeInTheDocument();
  });
});
