import React from 'react';
import t from 'prop-types';

const SwitchComponent = ({
  components,
  component,
  fallbackComponent,
  ...other
}) => {
  const Component = components[component] || fallbackComponent;
  return <Component {...other} component={component} />;
};

SwitchComponent.propTypes = {
  components: t.objectOf(t.elementType),
  component: t.string,
  fallbackComponent: t.node,
};

SwitchComponent.defaultProps = {
  components: {},
  component: 'div',
  fallbackComponent: 'div',
};

export default SwitchComponent;
