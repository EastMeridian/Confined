import React, { Suspense } from 'react';
import { ActivityIndicator } from 'components';

const withSuspense = (Component) => (props) => (
  <Suspense fallback={<ActivityIndicator />}>
    <Component {...props} />
  </Suspense>
);

export default withSuspense;
