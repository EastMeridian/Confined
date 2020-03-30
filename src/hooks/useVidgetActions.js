import { useDispatch } from 'react-redux';
import {
  buildVidget,
  deleteVidget,
} from 'flux/actionCreators/vidgetActionCreators';
import compose from 'lodash/fp/compose';

function useVidgetActions() {
  const dispatch = useDispatch();

  return {
    buildVidget: compose(dispatch, buildVidget),
    removeVidget: compose(dispatch, deleteVidget),
  };
}

export default useVidgetActions;
