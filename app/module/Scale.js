import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */
export default function (units = 1) {
  return (width / 375) * units
}

const verticalScale = (size) => (height / 667) * size

export { verticalScale, height, width }
