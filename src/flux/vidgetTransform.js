import { createTransform } from 'redux-persist';
import adapterManager from 'vidgets/adapterManager';

const SetTransform = createTransform(
  (inboundState, key) => (
    { ...inboundState, mySet: inboundState.mySet ? [...inboundState.mySet] : [] }
  ),
  (outboundState, key) => {
    if (key === 'vidgetReducer') adapterManager.rehydrate(outboundState);
    return { ...outboundState, mySet: new Set(outboundState.mySet || []) };
  },
  { whitelist: ['vidgetReducer'] },
);
export default SetTransform;
