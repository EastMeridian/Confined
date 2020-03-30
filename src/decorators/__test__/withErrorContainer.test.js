import '@testing-library/jest-dom';
import { create } from 'react-test-renderer';
import { render } from '@testing-library/react';
import React from 'react';
import withErrorContainer from '../withErrorContainer';
import '@testing-library/jest-dom/extend-expect';

describe('ErrorContainer component', () => {
  const testMessage = 'Test children';
  const TestChildren = () => <div>{testMessage}</div>;
  const testError = 'Error Message';
  const EhancedComponent = withErrorContainer(TestChildren);

  it('should matches the snapshot', () => {
    const container = create(<EhancedComponent error={testError} />);
    expect(container.toJSON()).toMatchSnapshot();
  });


  it('should display children with no error provided', () => {
    const { getByText } = render(<EhancedComponent />);
    expect(getByText(testMessage)).toBeInTheDocument();
  });

  it('should display error but not childen with error', () => {
    const { getByText, queryByText } = render(
      <EhancedComponent error={testError} />,
    );
    expect(getByText(testError)).toBeInTheDocument();
    expect(queryByText(testMessage)).not.toBeInTheDocument();
  });
});
