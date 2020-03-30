import {
  ADD_VIDGET,
  REMOVE_VIDGET,
  REMOVE_VIDGET_ID,
} from 'flux/actions/vidgetActions';
import compose from 'lodash/fp/compose';
import createVidget from 'factories/createVidget';
import adapterManager from 'vidgets/adapterManager';

export const addVidget = (vidget) => ({ type: ADD_VIDGET, payload: vidget });
export const removeVidget = (id) => ({ type: REMOVE_VIDGET, payload: id });
export const removeVidgetID = (id) => ({ type: REMOVE_VIDGET_ID, payload: id });

export const buildVidget = (options) => (dispatch) => compose(
  dispatch,
  addVidget,
  createVidget,
  adapterManager.subscribe,
)(options);

export const deleteVidget = (id) => (dispatch) => {
  dispatch(removeVidgetID(id));
  dispatch(removeVidget(id));
};
