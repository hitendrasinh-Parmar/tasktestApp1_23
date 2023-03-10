import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export enum RootRoutes {
  Main = 'Main',
}

export enum MainRoutes {
  Products = "Products",
  ProductDetails = "ProductDetails",
  CreateProduct = "CreateProduct",
}


export type RootStackParamList = {
  [RootRoutes.Main]: NavigatorScreenParams<MainStackParamList>;
};

export type MainStackParamList = {
  [MainRoutes.Products]: undefined
  [MainRoutes.ProductDetails]: undefined
  [MainRoutes.CreateProduct]: undefined
};



export const RootStack = createStackNavigator();
export const MainStack = createStackNavigator<MainStackParamList>();
