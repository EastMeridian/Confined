import React from 'react';
import t from 'prop-types';
import ActivityIndicator from './ActivityIndicator';

const LoadingContainer = ({ loaded, children, ...other }) => (
  <>
    {!loaded && <ActivityIndicator />}
    {loaded && React.cloneElement(children, other)}
  </>
);

LoadingContainer.propTypes = {
  loaded: t.bool,
  children: t.node,
};

LoadingContainer.defaultProps = {
  loaded: false,
  children: null,
};

export default LoadingContainer;
