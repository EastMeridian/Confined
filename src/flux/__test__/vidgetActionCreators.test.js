import createVidget from 'factories/createVidget';
import entityRegister from 'vidgets/entityRegister';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addVidget,
  buildVidget,
} from '../actionCreators/vidgetActionCreators';
import { ADD_VIDGET } from '../actions/vidgetActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('addVidget', () => {
  it('should create an action to add vidget', () => {
    const vidget = createVidget();
    const expectedAction = {
      type: ADD_VIDGET,
      payload: vidget,
    };
    expect(addVidget(vidget)).toEqual(expectedAction);
  });
});

describe('buildVidget', () => {
  const store = mockStore();
  const entity = entityRegister.get('RandomDog');
  const id = 'test';
  const vidget = createVidget({ ...entity, id });

  it('should return the proper action', async () => {
    await store.dispatch(buildVidget({ ...entity, id }));
    const actions = store.getActions();
    const expectedAction = {
      type: ADD_VIDGET,
      payload: vidget,
    };
    expect(actions).toEqual([expectedAction]);
  });
});
