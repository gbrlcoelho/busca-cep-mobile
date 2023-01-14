import {theme} from '@styles/Theme'
import 'styled-components'

declare module 'styled-components' {
  type ThemeType = typeof theme
  export interface DefaultTheme extends ThemeType {}
}
