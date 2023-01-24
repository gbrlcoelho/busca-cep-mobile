import {normalize} from '@utils/Normalize'
import styled from 'styled-components/native'

export const Container = styled.View`
  padding: ${normalize(16)}px;
  align-items: flex-start;
`
export const RowGap = styled.View`
  flex-direction: row;
  margin: ${normalize(8)}px 0;
  align-items: center;
`
export const Title = styled.Text`
  font-size: ${({theme}) => theme.fontSize.h2}px;
  color: ${({theme}) => theme.colors.yellow};
`

export const ResultText = styled.Text`
  font-size: ${({theme}) => theme.fontSize.h2}px;
  color: ${({theme}) => theme.colors.white};
`
