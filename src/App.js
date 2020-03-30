import React from 'react';
import HomeScreen from 'screens/home/HomeScreen';
import { Provider } from 'react-redux';
import { store, persistor } from 'flux';
import { AppLayout } from 'components';
import colors from 'styles/colors';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppLayout style={{ backgroundColor: colors.background }}>
          <HomeScreen />
        </AppLayout>
      </PersistGate>
    </Provider>
  );
}

export default App;
