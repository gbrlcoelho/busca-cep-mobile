import {Dimensions, PixelRatio} from 'react-native'

const width = Dimensions.get('screen').width

const scale = width / 320

export const normalize = (size: number) => {
  let newSize = size * scale

  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}
