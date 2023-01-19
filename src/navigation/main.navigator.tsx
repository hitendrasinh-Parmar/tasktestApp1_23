import React from 'react';
import { MainRoutes, MainStack } from './routes';
import ProductScreen from '../container/ProductScreen';
import ProductDetails from '../container/ProductDetails';
import CreateProduct from '../container/CreateProduct';

const MainNavigator = (): React.ReactElement => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={MainRoutes.Products} component={ProductScreen} />
      <MainStack.Screen name={MainRoutes.ProductDetails} component={ProductDetails} />
      <MainStack.Screen name={MainRoutes.CreateProduct} component={CreateProduct} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
