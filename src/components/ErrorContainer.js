import React from 'react';
import t from 'prop-types';
import ErrorMessage from './ErrorMessage';

const ErrorContainer = ({ error, children, ...other }) => (
  <>
    {error && <ErrorMessage>{error}</ErrorMessage>}
    {!error && React.cloneElement(children, other)}
  </>
);

ErrorContainer.propTypes = {
  error: t.string,
  children: t.node,
};

ErrorContainer.defaultProps = {
  error: null,
  children: null,
};

export default ErrorContainer;
