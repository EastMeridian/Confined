import { createSelector } from 'reselect';
import adapterManager from 'vidgets/adapterManager';

export const getVidgetReducer = (state) => state.vidgetReducer;
export const getVidgets = (state) => state.vidgetReducer.vidgets;

export const getVidgetById = (state, props) => state.vidgetReducer.vidgetStore[props.id];

export const getVidgetStates = createSelector(
  getVidgetById,
  (vidget) => {
    if (!vidget) return {};
    return ({
      ...vidget,
      adapter: adapterManager.get(vidget.vidget),
    });
  },
);


export const makeGetVidgetStates = (id) => (state) => getVidgetStates(state, { id });
