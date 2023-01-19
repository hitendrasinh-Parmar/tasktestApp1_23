import React from 'react';
import {
  View,
  ViewStyle,
  Image,
  ImageStyle,
} from 'react-native';
import useStyles from '../styles/useStyles';

type ImageProps = React.ComponentProps<typeof Image> & {
  imgUrl: any;
  imgStyle?: Array<ImageStyle>;
  wrapperStyle?: Array<ViewStyle>;
};

const ImageCustom = (props: ImageProps) => {
  const { wrapperStyle = [], imgStyle = [], imgUrl = '' } = props;
  const __s = useStyles();

  return (
    <View style={[...wrapperStyle]}>
      <Image
        {...props}
        style={[__s.height24, __s.width24, __s.ImgContain, ...imgStyle,]}
        source={imgUrl}
      />
    </View>
  );
};

export default ImageCustom;
