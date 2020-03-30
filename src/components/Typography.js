import React from 'react';
import t from 'prop-types';

const styles = {
  span: {
    fontFamily: 'Roboto',
  },
  h2: {
    fontFamily: 'Sen',
    fontWeight: 400,
    marginBottom: 8,
    marginTop: 8,
  },
};

const Typography = ({
  children,
  component,
  color,
  style,
}) => {
  const Component = component;
  return (
    <Component style={{ ...styles[component], color, ...style }}>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  children: t.node,
  component: t.string,
  color: t.string,
  style: t.shape({}),
};

Typography.defaultProps = {
  children: null,
  component: 'span',
  color: 'black',
  style: {},
};

export default Typography;
