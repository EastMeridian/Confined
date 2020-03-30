import React from 'react';
import t from 'prop-types';
import ButtonBase from '@material-ui/core/ButtonBase';
import { fullSizeLayout } from 'styles/layouts';
import Card from './Card';
import View from './View';

const containerStyle = {
  width: '10rem',
  height: '10rem',
  justifyContent: 'center',
  textAlign: 'start',
};

const buttonStyle = {
  ...fullSizeLayout,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const VidgetDisplayerCard = ({ children, onClick }) => (
  <Card style={containerStyle}>
    <ButtonBase style={buttonStyle} onClick={onClick} component="div">
      <View>
        {children}
      </View>
    </ButtonBase>
  </Card>
);

VidgetDisplayerCard.propTypes = {
  children: t.node,
  onClick: t.func,
};

VidgetDisplayerCard.defaultProps = {
  children: null,
  onClick: () => { },
};

export default VidgetDisplayerCard;
