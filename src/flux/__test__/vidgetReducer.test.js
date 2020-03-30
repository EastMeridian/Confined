import createVidget from 'factories/createVidget';
import { vidgetReducer, initialeState } from '../reducers/vidgetReducer';
import {
  ADD_VIDGET,
  REMOVE_VIDGET_ID,
  REMOVE_VIDGET,
} from '../actions/vidgetActions';

describe('vidgetReducer', () => {
  it('should return the initial state', () => {
    expect(vidgetReducer(undefined, {})).toEqual(initialeState);
  });

  it('should handle ADD_VIDGET', () => {
    const vidget = createVidget();
    expect(
      vidgetReducer(undefined, {
        type: ADD_VIDGET,
        payload: vidget,
      }),
    ).toEqual({
      vidgets: [vidget.id],
      vidgetStore: {
        [vidget.id]: vidget,
      },
    });
  });

  it('should handle REMOVE_VIDGET_ID', () => {
    const vidget = createVidget();
    expect(
      vidgetReducer({
        vidgets: [vidget.id],
      }, {
        type: REMOVE_VIDGET_ID,
        payload: vidget.id,
      }),
    ).toEqual({
      vidgets: [],
    });
  });

  it('should handle REMOVE_VIDGET', () => {
    const vidget = createVidget();
    expect(
      vidgetReducer({
        vidgetStore: { [vidget.id]: vidget },
      }, {
        type: REMOVE_VIDGET,
        payload: vidget.id,
      }),
    ).toEqual({
      vidgetStore: {},
    });
  });
});
