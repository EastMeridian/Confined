import React from 'react';
import entityRegister from 'vidgets/entityRegister';

const withVidgetRegister = (Component) => (props) => (
  <Component {...props} entityRegister={entityRegister} />
);

export default withVidgetRegister;
