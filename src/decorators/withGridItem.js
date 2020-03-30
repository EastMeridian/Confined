import React from 'react';
import Grid from '@material-ui/core/Grid';

export default (Component) => (props) => <Grid item><Component {...props} /></Grid>;
