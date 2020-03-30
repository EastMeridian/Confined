import React from 'react';
import t from 'prop-types';
import colors from 'styles/colors';
import { cardLayout, fullSizeLayout } from 'styles/layouts';
import ButtonBase from '@material-ui/core/ButtonBase';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import View from './View';

const containerStyle = {
  ...cardLayout,
  border: `1px dashed ${colors.secondaryText}`,
  alignItems: 'center',
  justifyContent: 'center',
};

const buttonStyle = fullSizeLayout;

const AddCard = ({ onClick }) => (
  <View style={containerStyle}>
    <ButtonBase style={buttonStyle} onClick={onClick}>
      <AddCircleOutlineIcon fontSize="large" style={{ color: colors.primary }} />
    </ButtonBase>
  </View>
);

AddCard.propTypes = {
  onClick: t.func,
};

AddCard.defaultProps = {
  onClick: () => {},
};

export default AddCard;
