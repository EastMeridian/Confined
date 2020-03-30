import React from 'react';
import { View } from 'components';
import useVidgetActions from 'hooks/useVidgetActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import colors from 'styles/colors';

const iconContainerStyle = {
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 4,
};

const withVidgetRemover = (Component) => ({ id, ...props }) => {
  const { removeVidget } = useVidgetActions();
  return (
    <>
      <View style={iconContainerStyle}>
        <IconButton aria-label="delete" onClick={() => removeVidget(id)}>
          <CloseIcon fontSize="small" style={{ color: colors.secondaryText }} />
        </IconButton>
      </View>
      <Component {...props} />
    </>
  );
};

export default withVidgetRemover;
