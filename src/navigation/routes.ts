import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export enum RootRoutes {
  Main = 'Main',
}

export enum MainRoutes {
  Tabs = 'Tabs',
  Settings = 'Settings',
  SeeAllScreen = 'SeeAllScreen'
}


export type RootStackParamList = {
  [RootRoutes.Main]: NavigatorScreenParams<MainStackParamList>;
};

export type MainStackParamList = {
};



export const RootStack = createStackNavigator();
export const MainStack = createStackNavigator<MainStackParamList>();
