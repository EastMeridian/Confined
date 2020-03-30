import SwitchComponent from 'components/SwitchComponent';
import compose from 'lodash/fp/compose';
import withVidget from 'decorators/withVidget';
import withComponentRegister from 'decorators/withComponentRegister';
import withSuspense from 'decorators/withSuspense';
import withVidgetRemover from 'decorators/withVidgetRemover';

export default compose(
  withVidget,
  withVidgetRemover,
  withComponentRegister,
  withSuspense,
)(SwitchComponent);
