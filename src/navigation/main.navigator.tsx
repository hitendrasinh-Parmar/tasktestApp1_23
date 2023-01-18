import React from 'react';
import { MainRoutes, MainStack } from './routes';
import ProductScreen from '../container/ProductScreen';
const MainNavigator = (): React.ReactElement => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={MainRoutes.Products} component={ProductScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
