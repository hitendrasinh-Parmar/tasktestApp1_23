// import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';

import MainNavigator from './main.navigator';
import { RootRoutes, RootStack } from './routes';
const isOnboardingComplete = true;
const Root = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={RootRoutes.Main}>
      <RootStack.Screen name={RootRoutes.Main} component={MainNavigator} />
    </RootStack.Navigator>
  );
};
export default Root;
