import React from 'react';
import t from 'prop-types';
import Error from 'assets/error.jpg';
import View from './View';
import Typography from './Typography';

const containerStyle = {
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
};

const imageStyle = {
  position: 'absolute',
  objectFit: 'contain',
  width: '100%',
  filter: 'blur(2px)',
};

const ErrorMessage = ({ children }) => (
  <View style={{ ...containerStyle }}>
    <img src={Error} style={imageStyle} alt="empty_result" />
    <Typography color="white" style={{ position: 'absolute' }}>{children}</Typography>
  </View>
);

ErrorMessage.propTypes = {
  children: t.node,
};

ErrorMessage.defaultProps = {
  children: null,
};

export default ErrorMessage;
