import '@testing-library/jest-dom';
import { create } from 'react-test-renderer';
import { render } from '@testing-library/react';
import React from 'react';
import SwitchComponent from '../SwitchComponent';
import '@testing-library/jest-dom/extend-expect';

describe('SwitchComponent component', () => {
  it('should matches the snapshot', () => {
    const component = create(<SwitchComponent />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should display fallbackComponent if no component or components provided', () => {
    const { container } = render(<SwitchComponent />);
    expect(container.firstChild.nodeName).toBe('DIV');
  });

  it('should display Component from a component store', () => {
    const components = {
      test: () => <div>test div</div>,
    };

    const { getByText } = render(
      <SwitchComponent components={components} component="test" />,
    );
    expect(getByText('test div')).toBeInTheDocument();
  });
});
