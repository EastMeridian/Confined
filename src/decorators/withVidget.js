import { connect } from 'react-redux';
import { buildVidget } from 'flux/actionCreators/vidgetActionCreators';
import { getVidgetStates } from 'flux/selectors/vidgetSelectors';

const mapDispatchToProps = (dispatch) => ({
  buildVidget: (id) => dispatch(buildVidget(id)),
});

export default connect(getVidgetStates, mapDispatchToProps);
