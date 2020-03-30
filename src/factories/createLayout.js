import React from 'react';
import View from '../components/View';

export default (outerStyle) => ({ style, ...other }) => (
  <View style={{ ...outerStyle, ...style }} {...other} />
);
