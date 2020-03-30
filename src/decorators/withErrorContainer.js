import React from 'react';
import ErrorContainer from 'components/ErrorContainer';

const withErrorContainer = (Component) => ({ error = null, ...other }) => (
  <ErrorContainer error={error}>
    <Component {...other} />
  </ErrorContainer>
);
export default withErrorContainer;
