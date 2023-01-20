import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps
} from 'react-native';
import useStyles from '../styles/useStyles';
import ImageFragment from '../images/ImageFragement';

type ButtonInterface = TouchableOpacityProps & {
  title?: string;
  buttonStyles?: Array<ViewStyle>;
  btnGroup?: boolean;
  lastbtn?: boolean;
  borderNone?: boolean;
  titleStyle?: Array<TextStyle>;
  icon?: any
};

const Button = (props: ButtonInterface) => {
  const {
    title,
    buttonStyles,
    btnGroup = false,
    lastbtn = false,
    borderNone = false,
    titleStyle = [],
    icon = null
  } = props;
  const __s = useStyles();

  return (
    <TouchableOpacity
      {...props}
      style={[
        __s.paddingV10,
        // !borderNone && [__s.borderWidth1, __s.borderGray2],
        !!buttonStyles && buttonStyles,
        btnGroup && [__s.flex1, !lastbtn && __s.marginR10],
      ]}>
      {
        icon && <ImageFragment imgUrl={icon} />
      }
      {title && <Text
        style={[__s.font16, __s.fontPoppinsMedium, __s.fontGray, __s.textCenter, ...titleStyle]}>
        {title}
      </Text>}
    </TouchableOpacity>
  );
};

export default Button;
