import { Dimensions, PixelRatio } from 'react-native';
// Retrieve initial screen's width
let screenWidth = Dimensions.get('window').width;

// Retrieve initial screen's height
let screenHeight = Dimensions.get('window').height;

const tabDimensions = { w: 774, h: 1133 };

const mobDimensions = { w: 390, h: 844 };

const whSW = screenWidth > 500 ? tabDimensions.w : mobDimensions.w;

const hpSH = screenWidth > 500 ? tabDimensions.h : mobDimensions.h;

const scale = screenWidth / whSW;
const normalize = (size: number) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param {string} widthPercent The percentage of screen's width that UI element should cover
 * along with the percentage symbol (%).
 * @return {number} The calculated dp depending on current device's screen width.
 */
const widthPercentageToDP = (widthPercent: number | string) => {
  // Parse string percentage input and convert it to number.
  const elemWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param {string} heightPercent The percentage of screen's height that UI element should cover
 * along with the percentage symbol (%).
 * @return {number} The calculated dp depending on current device's screen height.
 */
const heightPercentageToDP = (heightPercent: number | string) => {
  // Parse string percentage input and convert it to number.
  const elemHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

/**
 * Event listener function that detects orientation change (every time it occurs) and triggers
 * screen rerendering. It does that, by changing the state of the screen where the function is
 * called. State changing occurs for a new state variable with the name 'orientation' that will
 * always hold the current value of the orientation after the 1st orientation change.
 * Invoke it inside the screen's constructor or in componentDidMount lifecycle method.
 * @param {object} that Screen's class component this variable. The function needs it to
 * invoke setState method and trigger screen rerender (this.setState()).
 */
const listenOrientationChange = (that: any) => {
  Dimensions.addEventListener('change', (newDimensions) => {
    // Retrieve and save new dimensions
    screenWidth = newDimensions.window.width;
    screenHeight = newDimensions.window.height;

    // Trigger screen's rerender with a state update of the orientation variable
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    that.setState({
      orientation: screenWidth < screenHeight ? 'portrait' : 'landscape',
    });
  });
};

/**
 * Wrapper function that removes orientation change listener and should be invoked in
 * componentWillUnmount lifecycle method of every class component (UI screen) that
 * listenOrientationChange function has been invoked. This should be done in order to
 * avoid adding new listeners every time the same component is re-mounted.
 */
const removeOrientationListener = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  Dimensions?.removeEventListener('change', () => { });
};

/**
 * Width-Percentage
 * Converts width dimension to percentage
 * 390, 879 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
const wp = (dimension: number | string) => widthPercentageToDP(`${(dimension / whSW) * 100}%`);

/**
 * Height-Percentage
 * Converts width dimension to percentage
 * * 390, 879 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
const hp = (dimension: number | string) => heightPercentageToDP(`${(dimension / hpSH) * 100}%`);

export { wp, hp, normalize, listenOrientationChange, removeOrientationListener };
