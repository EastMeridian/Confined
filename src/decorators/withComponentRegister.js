import React from 'react';
import componentRegister from 'vidgets/componentRegister';

const withComponentRegister = (Component) => (props) => (
  <Component {...props} components={componentRegister} />
);

export default withComponentRegister;
