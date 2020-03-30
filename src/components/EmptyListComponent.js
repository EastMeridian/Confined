import React from 'react';
import image from 'assets/empty_result.jpg';
import colors from 'styles/colors';
import Divider from '@material-ui/core/Divider';
import View from './View';
import Typography from './Typography';

const containerStyle = {
  alignItems: 'center',
};

const contentContainerStyle = {
  marginBottom: '2em',
  alignItems: 'center',
  textAlign: 'center',
};

const imageStyle = {
  width: '22rem',
  maxWidth: '100vw',
};

const EmptyListComponent = () => (
  <View style={containerStyle}>
    <View style={contentContainerStyle}>
      <img src={image} style={imageStyle} alt="empty_result" />
      <Typography component="h2">No Vidget Found</Typography>
      <Typography color={colors.secondaryText}>when you're ready, add a new vidget.</Typography>
      <Divider style={{ marginTop: '1em', width: '50%', backgroundColor: colors.secondaryText }} />
    </View>
  </View>
);

export default EmptyListComponent;
