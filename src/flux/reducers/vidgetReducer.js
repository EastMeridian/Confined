import {
  ADD_VIDGET,
  REMOVE_VIDGET,
  REMOVE_VIDGET_ID,
} from 'flux/actions/vidgetActions';

export const initialeState = {
  vidgets: [],
  vidgetStore: {},
};

const filterIdFromArray = (id) => (element) => element !== id;

const deleteFromId = (id, store) => {
  const nextStore = { ...store };
  delete nextStore[id];

  return nextStore;
};

export const vidgetReducer = (state = initialeState, action) => {
  const { vidgets, vidgetStore } = state;
  const { type, payload } = action;

  switch (type) {
    case ADD_VIDGET:
      return {
        ...state,
        vidgets: [...vidgets, payload.id],
        vidgetStore: {
          ...vidgetStore,
          [payload.id]: payload,
        },
      };
    case REMOVE_VIDGET:
      return {
        ...state,
        vidgetStore: deleteFromId(payload, vidgetStore),
      };
    case REMOVE_VIDGET_ID:
      return {
        ...state,
        vidgets: vidgets.filter(filterIdFromArray(payload)),
      };
    default:
      return state;
  }
};
