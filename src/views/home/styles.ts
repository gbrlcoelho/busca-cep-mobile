import {normalize} from '@utils/Normalize'
import {Image} from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
  padding: ${normalize(16)}px;
`
export const Logo = styled(Image).attrs({
  source: require('@images/logo.png'),
})`
  margin-bottom: ${normalize(28)}px;
  width: ${normalize(200)}px;
  height: ${normalize(40)}px;
`

export const LoadingView = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Card = styled.View`
  align-items: center;
  width: 100%;
  height: ${normalize(380)}px;
  border-radius: ${normalize(8)}px;
  border-width: ${normalize(4)}px;
  border-color: ${({theme}) => theme.colors.white};
`
export const HomeView = styled.View`
  padding: ${normalize(16)}px;
  align-items: center;
`

export const CardTitle = styled.Text`
  font-size: ${({theme}) => theme.fontSize.h1}px;
  color: ${({theme}) => theme.colors.yellow};
`
