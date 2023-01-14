import styled from 'styled-components/native'
import {InputIconType, InputViewProps} from './types'

export const InputView = styled.View<InputViewProps>`
  flex-direction: row;
  width: ${(props) => props.width || props.theme.inputSize.width.default}px;
`

export const TextInput = styled.TextInput<InputIconType>`
  text-align: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.borderRadius || 4}px;
  border-style: solid;
  height: ${(props) => props.height || props.theme.inputSize.height.default}px;
  flex: 1;
  color: ${(props) => props.theme.colors.middleGray};
  font-size: ${(props) => props.fontSize || props.theme.fontSize.h4}px;
`
