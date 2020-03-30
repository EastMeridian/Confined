import { useSelector } from 'react-redux';
import { getVidgets } from 'flux/selectors/vidgetSelectors';
import useVidgetActions from 'hooks/useVidgetActions';

function useVidgetReducer() {
  const actions = useVidgetActions();
  const vidgets = useSelector(getVidgets);

  return {
    vidgets,
    ...actions,
  };
}

export default useVidgetReducer;
