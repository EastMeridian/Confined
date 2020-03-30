import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import { create } from 'react-test-renderer';
import React from 'react';
import createVidget from 'factories/createVidget';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import entityRegister from 'vidgets/entityRegister';
import adapterManager from 'vidgets/adapterManager';
import VidgetProvider from '../VidgetProvider';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

describe('VidgetProvider Component', () => {
  const entity = entityRegister.get('RandomDog');
  const vidget = createVidget(entity);
  adapterManager.subscribe(entity);

  const store = mockStore({
    vidgetReducer: {
      vidgetStore: {
        [vidget.id]: vidget,
      },
      vidgets: [],
    },
  });

  it('should match the snapshot', async () => {
    const component = create(
      <Provider store={store}>
        <VidgetProvider id={vidget.id} />
      </Provider>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
