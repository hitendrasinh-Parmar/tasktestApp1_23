import { NavigationContainer } from '@react-navigation/native';
import ThemeProvider from './src/theme/ThemeProvider';
import React from 'react';
import { navigationRef } from './src/services/RootNavigationServices';
import RootNavigator from './src/navigation/root.navigation';
import 'react-native-gesture-handler';
import { AppProvider } from './src/context/AppContext';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {

  return (
    <NavigationContainer ref={navigationRef}>
      <ThemeProvider>
        <Provider store={store}>

          {/* <AppProvider> */}
          <RootNavigator />
          {/* </AppProvider> */}
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
};



export default App;
