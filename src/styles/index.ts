import {normalize} from '@utils/index'

export const theme = {
  colors: {
    white: '#fff',
    background: '#282c34',
    yellow: '#f1c400',
    disabled: '#EEEEEE',
    darkGray: '#353535',
    lightGray: '#BBBBBB',
    middleGray: '#5A5A5A',
  },

  fontSize: {
    h1: normalize(24),
    h2: normalize(16),
    h3: normalize(14),
    h4: normalize(12),
    h5: normalize(10),
    h6: normalize(8),
  },

  buttonSize: {
    height: {
      small: normalize(26),
      large: normalize(40),
    },

    width: {
      small: normalize(88),
      large: normalize(240),
    },
  },

  inputSize: {
    width: {
      default: normalize(280),
    },
    height: {
      default: normalize(40),
    },
  },
}
