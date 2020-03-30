import { useSelector } from 'react-redux';
import { makeGetVidgetStates } from 'flux/selectors/vidgetSelectors';
import useVidgetActions from 'hooks/useVidgetActions';

function useVidgetReducer({ id }) {
  const actions = useVidgetActions();
  const vidget = useSelector(makeGetVidgetStates(id));

  return {
    vidget,
    ...actions,
  };
}

export default useVidgetReducer;
