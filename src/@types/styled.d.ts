import {theme} from '@styles/index'
import 'styled-components'

declare module 'styled-components' {
  type ThemeType = typeof theme
  export interface DefaultTheme extends ThemeType {}
}
