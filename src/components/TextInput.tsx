import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  ViewStyle,
  TextInput,
  Text,
  Animated,
  Easing,
  TextStyle,
} from 'react-native';
import useStyles from '../styles/useStyles';
import ImageFragment from '../images/ImageFragement';

type iconPosition = 'center' | 'left' | 'right';

type TextInputProps = React.ComponentProps<typeof TextInput> & {
  wrapperStyle?: Array<ViewStyle>;
  textStyle?: Array<TextStyle>;
  placeholderText?: string;
  textWrapper?: Array<ViewStyle>;
  textInputStyle?: Array<TextStyle>;
  icon?: any;
  iconPosition?: iconPosition;
};

const TextInputCustom: React.FC<TextInputProps> = (props): JSX.Element => {
  const {
    wrapperStyle = [],
    textStyle = [],
    textWrapper = [],
    textInputStyle = [],
    placeholderText = null,
    icon = null,
    iconPosition = 'right',
  } = props;
  const __s = useStyles();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const focusAnim = useRef(new Animated.Value(0)).current;

  const textWrapperDefault = {
    transform: [
      {
        translateY: focusAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -15],
        }),
      },
      {
        scale: focusAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0.9],
        }),
      },
      {
        translateX: focusAnim.interpolate({
          inputRange: [0, 1],
          outputRange: iconPosition === 'left' ? [-230, -260] : [10, 7],
        }),
      },
    ],
  };

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!props?.value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused]);

  return (
    <View
      style={[
        __s.borderView,
        ...wrapperStyle,
        __s.paddingV4,
        __s.posr,
        __s.flexRow,
        __s.alignCenter,
        (isFocused || !!props?.value) && __s.borderGreen,
        iconPosition === 'left' ? [__s.flexRowReverse, __s.paddingR10] : [],
      ]}>
      <Animated.View style={[__s.posa, __s.paddingH5, textWrapperDefault, ...textWrapper]}>
        {placeholderText && (
          <Text
            style={[
              __s.fontPoppinsRegular,
              __s.fontGray,
              __s.font14,
              ...textStyle,
              (isFocused || !!props?.value) && __s.fontGreen,
              iconPosition === 'left' && [__s.paddingR16],
            ]}>
            {placeholderText}
          </Text>
        )}
      </Animated.View>
      <TextInput
        {...props}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        style={[
          iconPosition === 'right' && __s.marginL10,
          ...textInputStyle,
          __s.flex1,
          __s.font16,
        ]}
      />
      {!!icon && <ImageFragment imgUrl={require('../../assets/images/hide_password.png')} wrapperStyle={[__s.paddingR10]} />}
    </View>
  );
};

export default TextInputCustom;
