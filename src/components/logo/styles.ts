import {normalize} from '@utils/index'
import {Image} from 'react-native'
import styled from 'styled-components/native'

export const LogoImage = styled(Image).attrs({
  source: require('@images/logo.png'),
})`
  margin-bottom: ${normalize(28)}px;
  width: ${normalize(200)}px;
  height: ${normalize(40)}px;
`
