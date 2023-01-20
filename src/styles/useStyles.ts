import { StyleSheet } from 'react-native';
import { hp, wp, normalize } from '../services/ResponsiveDesign';
import { fontMaker } from '../services/fontMaker';
import { useTheme } from '../theme/ThemeProvider';
import { ColorsInterface } from '../types/global';
const useStyles = () => {
  const { theme }: { theme: ColorsInterface } = useTheme();

  return StyleSheet.create({
    flex0: {
      flex: 0,
    },
    flex1: {
      flex: 1,
    },
    flex2: {
      flex: 2,
    },
    flexWrap: {
      flexWrap: 'wrap',
    },
    flexGrow1: {
      flexGrow: 1,
    },
    flexRow: {
      flexDirection: 'row',
    },
    flexRowReverse: {
      flexDirection: 'row-reverse',
    },
    flexColumn: {
      flexDirection: 'column',
    },
    justifySpaceBetween: {
      justifyContent: 'space-between',
    },
    flexWrapContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    alignJustifyCenter: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowSpaceBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    alignFlexStart: {
      alignItems: 'flex-start',
    },
    alignCenter: {
      alignItems: 'center',
    },
    justifyCenter: {
      justifyContent: 'center',
    },
    alignFlexEnd: {
      alignItems: 'flex-end',
    },
    justifyFlexEnd: {
      justifyContent: 'flex-end',
    },
    justifyFlexStart: {
      justifyContent: 'flex-start',
    },
    alignSelfEnd: {
      alignSelf: 'flex-end',
    },
    alignSelfCenter: {
      alignSelf: 'center',
    },
    posr: {
      position: 'relative',
    },
    posa: {
      position: 'absolute',
    },
    tabBarStyles: {
      padding: 5,
    },
    textCenter: {
      textAlign: 'center',
    },
    ImgContain: {
      resizeMode: 'contain',
    },
    ImgCover: {
      resizeMode: 'cover',
    },
    overflowHidden: {
      overflow: 'hidden',
    },

    fontPoppinsLight: {
      ...fontMaker({ family: 'Poppins', weight: 'Light' }),
    },
    fontPoppinsLightItalic: {
      ...fontMaker({ family: 'Poppins', weight: 'Light', style: 'Italic' }),
    },

    fontPoppinsRegular: {
      ...fontMaker({ family: 'Poppins', weight: 'Regular' }),
    },
    fontPoppinsRegularItalic: {
      ...fontMaker({ family: 'Poppins', weight: 'Regular', style: 'Italic' }),
    },

    fontPoppinsMedium: {
      ...fontMaker({ family: 'Poppins', weight: 'Medium' }),
    },
    fontPoppinsMediumItalic: {
      ...fontMaker({ family: 'Poppins', weight: 'Medium', style: 'Italic' }),
    },
    fontPoppinsBold: {
      ...fontMaker({ family: 'Poppins', weight: 'Bold' }),
    },
    fontPoppinsBoldItalic: {
      ...fontMaker({ family: 'Poppins', weight: 'Bold', style: 'Italic' }),
    },

    fontPoppinsExtraBold: {
      ...fontMaker({ family: 'Poppins', weight: 'ExtraBold' }),
    },
    fontPoppinsExtraBoldItalic: {
      ...fontMaker({ family: 'Poppins', weight: 'ExtraBold', style: 'Italic' }),
    },
    font8: {
      fontSize: normalize(8),
    },
    font10: {
      fontSize: normalize(10),
    },
    font11: {
      fontSize: normalize(11),
    },
    font12: {
      fontSize: normalize(12),
    },
    font13: {
      fontSize: normalize(13),
    },
    font14: {
      fontSize: normalize(14),
    },
    font15: {
      fontSize: normalize(15),
    },
    font16: {
      fontSize: normalize(16),
    },
    font17: {
      fontSize: normalize(17),
    },
    font18: {
      fontSize: normalize(18),
    },
    font20: {
      fontSize: normalize(20),
    },
    font22: {
      fontSize: normalize(22),
    },
    font24: {
      fontSize: normalize(24),
    },
    font26: {
      fontSize: normalize(26),
    },
    font28: {
      fontSize: normalize(28),
    },
    font30: {
      fontSize: normalize(30),
    },
    font32: {
      fontSize: normalize(32),
    },
    font34: {
      fontSize: normalize(34),
    },
    font36: {
      fontSize: normalize(36),
    },
    font39: {
      fontSize: normalize(39),
    },
    font47: {
      fontSize: normalize(47),
    },
    font48: {
      fontSize: normalize(48),
    },
    font64: {
      fontSize: normalize(64),
    },
    marginT0: {
      marginTop: 0,
    },
    marginL5: {
      marginLeft: wp(5),
    },
    marginL24: {
      marginLeft: wp(24),
    },
    marginL16: {
      marginLeft: wp(16),
    },
    marginL10: {
      marginLeft: wp(10),
    },
    marginL12: {
      marginLeft: wp(12),
    },
    marginR10: {
      marginRight: wp(10),
    },
    marginR16: {
      marginRight: wp(16),
    },
    marginR180: {
      marginRight: wp(180),
    },
    marginB12: {
      marginBottom: hp(12),
    },
    marginB10: {
      marginBottom: hp(10),
    },
    marginB16: {
      marginBottom: hp(16),
    },
    marginB18: {
      marginBottom: hp(18),
    },
    marginB24: {
      marginBottom: hp(24),
    },
    marginB32: {
      marginBottom: hp(32),
    },
    marginB126: {
      marginBottom: hp(126),
    },
    marginB100: {
      marginBottom: hp(100),
    },

    marginT24: {
      marginTop: hp(24),
    },
    marginT32: {
      marginTop: hp(32),
    },
    marginT94: {
      marginTop: hp(94),
    },
    marginT5: {
      marginTop: hp(5),
    },
    marginT12: {
      marginTop: hp(12),
    },
    marginT16: {
      marginTop: hp(16),
    },

    marginH15: {
      marginHorizontal: wp(15),
    },
    marginH0: {
      marginHorizontal: wp(0),
    },
    marginV24: {
      marginVertical: hp(24),
    },
    marginV32: {
      marginVertical: hp(32),
    },
    marginV200: {
      marginVertical: hp(200),
    },
    marginH32: {
      marginHorizontal: wp(32),
    },
    marginH24: {
      marginHorizontal: wp(24),
    },
    marginH120: {
      marginHorizontal: wp(120),
    },
    marginH200: {
      marginHorizontal: wp(200),
    },
    marginH10: {
      marginHorizontal: wp(10),
    },
    marginH5: {
      marginHorizontal: wp(5),
    },
    marginH16: {
      marginHorizontal: wp(16),
    },
    marginH18: {
      marginHorizontal: wp(18),
    },
    marginV10: {
      marginVertical: 10,
    },
    marginV16: {
      marginVertical: 16,
    },
    padding0: {
      padding: 0,
    },
    paddingH0: {
      paddingHorizontal: wp(0),
    },
    paddingH4: {
      paddingHorizontal: wp(4),
    },
    paddingH10: {
      paddingHorizontal: wp(10),
    },
    paddingH12: {
      paddingHorizontal: wp(12),
    },
    paddingH5: {
      paddingHorizontal: wp(5),
    },
    paddingH16: {
      paddingHorizontal: wp(16),
    },
    paddingH14: {
      paddingHorizontal: wp(14),
    },
    paddingH18: {
      paddingHorizontal: wp(18),
    },
    paddingH20: {
      paddingHorizontal: wp(20),
    },
    paddingH24: {
      paddingHorizontal: wp(24),
    },
    paddingH25: {
      paddingHorizontal: wp(25),
    },
    paddingH35: {
      paddingHorizontal: wp(35),
    },
    paddingH30: {
      paddingHorizontal: wp(30),
    },
    paddingH50: {
      paddingHorizontal: wp(50),
    },
    paddingH200: {
      paddingHorizontal: wp(200),
    },
    paddingB25: {
      paddingBottom: hp(25),
    },
    paddingB45: {
      paddingBottom: hp(45),
    },
    paddingB80: {
      paddingBottom: hp(80),
    },
    paddingT17: {
      paddingTop: hp(17),
    },
    padding24: {
      padding: 24,
    },
    padding10: {
      padding: hp(10),
    },
    padding15: {
      padding: hp(15),
    },
    padding20: {
      padding: hp(20),
    },
    paddingT0: {
      paddingTop: hp(0),
    },
    paddingV3: {
      paddingVertical: hp(3),
    },
    paddingT6: {
      paddingTop: hp(6),
    },
    paddingT2: {
      paddingTop: hp(2),
    },
    paddingB10: {
      paddingBottom: hp(10),
    },
    paddingB8: {
      paddingBottom: hp(8),
    },
    paddingB12: {
      paddingBottom: hp(12),
    },
    paddingB14: {
      paddingBottom: hp(14),
    },
    paddingB24: {
      paddingBottom: hp(24),
    },
    paddingV12: {
      paddingVertical: hp(12),
    },
    padding5: {
      padding: hp(5),
    },
    paddingV10: {
      paddingVertical: hp(10),
    },
    paddingV16: {
      paddingVertical: hp(16),
    },
    paddingV14: {
      paddingVertical: hp(14),
    },
    paddingV18: {
      paddingVertical: hp(18),
    },
    paddingV20: {
      paddingVertical: hp(20),
    },
    paddingV24: {
      paddingVertical: hp(24),
    },
    paddingV48: {
      paddingVertical: hp(48),
    },
    paddingV100: {
      paddingVertical: hp(100),
    },
    paddingV200: {
      paddingVertical: hp(200),
    },
    paddingV8: {
      paddingVertical: hp(8),
    },
    paddingV6: {
      paddingVertical: hp(6),
    },
    paddingV4: {
      paddingVertical: hp(4),
    },
    paddingB16: {
      paddingBottom: hp(16),
    },
    paddingB0: {
      paddingBottom: hp(0),
    },
    paddingT24: {
      paddingTop: hp(24),
    },
    paddingT32: {
      paddingTop: hp(32),
    },
    paddingT48: {
      paddingTop: hp(48),
    },
    paddingT50: {
      paddingTop: hp(50),
    },
    paddingT100: {
      paddingTop: hp(100),
    },
    bottom15: {
      bottom: hp(15),
    },
    bottom5: {
      bottom: hp(5),
    },
    paddingT12: {
      paddingTop: hp(12),
    },
    paddingT15: {
      paddingTop: hp(15),
    },
    paddingL24: {
      paddingLeft: wp(24),
    },
    paddingL12: {
      paddingLeft: wp(12),
    },
    paddingL10: {
      paddingLeft: wp(10),
    },
    paddingL16: {
      paddingLeft: wp(16),
    },
    paddingL18: {
      paddingLeft: wp(18),
    },
    paddingL8: {
      paddingLeft: wp(8),
    },
    paddingR24: {
      paddingRight: wp(24),
    },
    paddingR16: {
      paddingRight: wp(16),
    },
    paddingR11: {
      paddingRight: wp(11),
    },
    paddingR10: {
      paddingRight: wp(10),
    },
    lineHeight30: {
      // lineHeight: 30,
    },
    lineHeight40: {
      // lineHeight: 40,
    },
    lineHeight25: {
      // lineHeight: 25,
    },
    lineHeight20: {
      // lineHeight: 20,
    },
    lineHeight22: {
      // lineHeight: 22,
    },
    lineHeight18: {
      // lineHeight: 18,
    },
    lineHeight16: {
      // lineHeight: 16,
    },
    borderRadius4: {
      borderRadius: 4,
    },
    borderRadius10: {
      borderRadius: 10,
    },
    borderRadius100: {
      borderRadius: 100,
    },
    borderRadiusT4: {
      borderTopRightRadius: 4,
      borderTopLeftRadius: 4,
    },
    borderRadiusT10: {
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
    borderRadius25: {
      borderRadius: 25
    },
    borderRadiusB4: {
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 4,
    },
    width64: {
      width: wp(20),
    },
    width118: {
      width: wp(118),
    },
    width160: {
      width: wp(160),
    },
    width134: {
      width: wp(134),
    },
    width170: {
      width: wp(170),
    },
    width190: {
      width: wp(190),
    },
    width90: {
      width: wp(90),
    },
    width350: {
      width: wp(350),
    },
    width66: {
      width: wp(66),
    },
    width70: {
      width: wp(70),
    },
    width24: {
      width: wp(24),
    },
    width18: {
      width: wp(18),
    },
    width20: {
      width: wp(20),
    },
    width8: {
      width: wp(8),
    },
    width14: {
      width: wp(14),
    },
    width12: {
      width: wp(12),
    },
    height12: {
      height: hp(12),
    },
    height14: {
      height: hp(14),
    },
    height8: {
      height: hp(8),
    },
    height18: {
      height: hp(18),
    },
    height64: {
      height: hp(64),
    },
    height66: {
      height: hp(66),
    },
    height70: {
      height: hp(70),
    },
    minHeight75: {
      minHeight: hp(75),
    },
    height90: {
      height: hp(90),
    },
    height120: {
      height: hp(120),
    },
    height200: {
      height: hp(200),
    },
    height500: {
      height: hp(500),
    },
    height48: {
      height: hp(48),
    },
    width56: {
      width: hp(56),
    },
    height56: {
      height: hp(56),
    },
    height23: {
      height: hp(23),
    },
    height24: {
      height: hp(24),
    },
    height20: {
      height: hp(20),
    },
    borderWidth0: {
      borderWidth: 0,
    },
    borderWidth2: {
      borderWidth: 2,
    },
    borderWidth4: {
      borderWidth: wp(4),
    },
    fontBlack: {
      color: theme.black,
    },
    fontGray: {
      color: theme.gray,
    },
    fontGreen: {
      color: theme.green,
    },
    fontWhite: {
      color: theme.white,
    },
    borderGray2: {
      borderColor: theme.gray2,
    },
    borderGreen: {
      borderColor: theme.green,
    },
    borderView: {
      borderWidth: 2,
      borderColor: theme.gray2,
    },
    placeHolderBlack: {
      color: theme.black,
    },
    bgColorGreen: {
      backgroundColor: theme.green,
    },
    bgColorlightBlue: {
      backgroundColor: '#545545',
    },
    bgColorGray2: {
      backgroundColor: theme.gray2,
    },
    bgColorWhite: {
      backgroundColor: theme.white,
    },
    bgColorBlack: {
      backgroundColor: theme.black,
    },
  });
};

export default useStyles;
