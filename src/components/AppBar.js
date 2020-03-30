import React from 'react';
import t from 'prop-types';
import sizing from 'styles/sizing';

import View from './View';

const containerStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: sizing.appBarHeight,
  backgroundColor: 'white',
  paddingLeft: '2em',
  paddingRight: '2em',
};

const AppBar = ({ children }) => (
  <View style={containerStyle}>
    {children}
  </View>
);

AppBar.propTypes = {
  children: t.node,
};

AppBar.defaultProps = {
  children: null,
};

export default AppBar;
