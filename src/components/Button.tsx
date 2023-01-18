import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ViewStyle,
  TextStyle,
  ButtonProps
} from 'react-native';
import useStyles from '../styles/useStyles';

type ButtonInterface = ButtonProps & {
  title: string;
  buttonStyles?: Array<ViewStyle>;
  btnGroup?: boolean;
  lastbtn?: boolean;
  borderNone?: boolean;
  titleStyle?: Array<TextStyle>;
};

const Button = (props: ButtonInterface) => {
  const {
    title,
    buttonStyles,
    btnGroup = false,
    lastbtn = false,
    borderNone = false,
    titleStyle = [],
  } = props;
  const __s = useStyles();

  return (
    <View
      style={[
        __s.paddingV10,
        !borderNone && [__s.borderWidth1, __s.borderGray2],
        !!buttonStyles && buttonStyles,
        btnGroup && [__s.flex1, !lastbtn && __s.marginR10],
      ]}>
      <TouchableOpacity {...props}>
        <Text
          style={[__s.font16, __s.fontPoppinsMedium, __s.fontGray, __s.textCenter, ...titleStyle]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
