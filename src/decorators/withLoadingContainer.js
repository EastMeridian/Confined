import React from 'react';
import LoadingContainer from 'components/LoadingContainer';

const withLoadingContainer = (Component) => ({ loaded, ...other }) => (
  <LoadingContainer loaded={loaded}>
    <Component {...other} />
  </LoadingContainer>
);

export default withLoadingContainer;
