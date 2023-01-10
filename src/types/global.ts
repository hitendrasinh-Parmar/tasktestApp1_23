import { ViewStyle, ImageStyle, TextStyle } from 'react-native';
import Styles from '../styles/useStyles';
import { ReactNode } from 'react';

// type of theme for declared as globla

export type themeTypeBase = ViewStyle | ImageStyle | TextStyle;

export interface ThemeProviderType {
  children: ReactNode;
  toggle: boolean;
  toggleFunction: React.FC<boolean>;
}

export type StyleKeys = typeof Styles;

export type themeType = {
  theme: any;
  toggleTheme: any;
};

//  ColorValue &
export type ColorsInterface = {
  primary?: string;
  black?: string;
  white?: string;
  gray?: string;
  gray2?: string;
  green?: string;
  lightBlue?: string;
};
