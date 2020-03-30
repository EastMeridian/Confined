import React from 'react';
import t from 'prop-types';
import shadows from 'styles/shadows';
import { cardLayout } from 'styles/layouts';

import View from './View';

const containerStyle = {
  ...cardLayout,
  backgroundColor: 'white',
  boxShadow: shadows.base,
};

const Card = ({ children, style }) => (
  <View style={{ ...containerStyle, ...style }}>
    {children}
  </View>
);

Card.propTypes = {
  children: t.node,
  style: t.shape({}),
};

Card.defaultProps = {
  children: null,
  style: {},
};

export default Card;
