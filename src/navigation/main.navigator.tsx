import React from 'react';
import { MainRoutes, MainStack } from './routes';
import ProductScreen from '../container/ProductScreen';
import ProductDetails from '../container/ProductDetails';
const MainNavigator = (): React.ReactElement => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={MainRoutes.Products} component={ProductScreen} />
      <MainStack.Screen name={MainRoutes.ProductDetails} component={ProductDetails} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
