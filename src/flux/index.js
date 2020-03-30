import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { vidgetReducer } from './reducers/vidgetReducer';
import SetTransform from './vidgetTransform';

const rootReducer = combineReducers({
  vidgetReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  transforms: [SetTransform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {
  store,
  persistor,
};
