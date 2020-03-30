import compose from 'lodash/fp/compose';
import withErrorContainer from 'decorators/withErrorContainer';
import withLoadingContainer from 'decorators/withLoadingContainer';

const withVidgetContainer = compose(
  withLoadingContainer,
  withErrorContainer,
);

export default withVidgetContainer;
