import React from 'react';

const trace = (label) => (data) => {
  console.log('trace', label, data);
  return data;
};

const traceComponent = (label) => (Component) => (props) => {
  console.log('traceComponent', label, props);
  return <Component {...props} />;
};

export { trace, traceComponent };
