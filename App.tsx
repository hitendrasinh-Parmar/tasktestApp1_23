

import { NavigationContainer } from '@react-navigation/native';
import ThemeProvider from './src/theme/ThemeProvider';
import React from 'react';
import { navigationRef } from './src/services/RootNavigationServices';
import RootNavigator from './src/navigation/root.navigation';


const App = () => {

  return (
    <NavigationContainer ref={navigationRef}>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
};



export default App;
