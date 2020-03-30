import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import componentRegister from 'vidgets/componentRegister';
import withComponentRegister from '../withComponentRegister';
import '@testing-library/jest-dom/extend-expect';

const testResult = JSON.stringify(componentRegister);
const TestComponent = ({ components }) => <div>{JSON.stringify(components)}</div>;

describe('withComponentRegister decorator', () => {
  it('should provide component with register', () => {
    const EhancedComponent = withComponentRegister(TestComponent);
    const { getByText } = render(<EhancedComponent />);
    expect(getByText(testResult)).toBeInTheDocument();
  });
});
