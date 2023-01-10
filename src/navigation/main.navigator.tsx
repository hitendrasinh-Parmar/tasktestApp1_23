import React from 'react';
import { MainRoutes, MainStack } from './routes';

const MainNavigator = (): React.ReactElement => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>

    </MainStack.Navigator>
  );
};

export default MainNavigator;
