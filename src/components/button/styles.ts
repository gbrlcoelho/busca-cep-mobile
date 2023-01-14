import styled from 'styled-components/native'
import {ButtonViewType, TextType, TouchableType} from './types'

export const ButtonView = styled.View<ButtonViewType>`
  margin-top: ${(props) => props.marginTop || 0}%;
`

export const Touchable = styled.TouchableOpacity<TouchableType>`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: ${(props) => props.height || props.theme.buttonSize.height.large}px;
  width: ${(props) => props.width || props.theme.buttonSize.width.large}px;
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.disabled : props.backgroundColor || props.theme.colors.yellow};
  border-radius: ${(props) => props.borderRadius || 4}px;
  border-color: ${(props) => props.borderColor || 'transparent'};
  border-width: ${(props) => props.borderWidth || 0}px;
  align-self: ${(props) => props.alignSelf || 'auto'};
  margin-right: ${(props) => props.marginRight || 0}px;
`

export const Text = styled.Text<TextType>`
  color: ${(props) => (props.disabled ? props.theme.colors.middleGray : props.color || props.theme.colors.white)};
  font-size: ${(props) => props.fontSize || props.theme.fontSize.h3}px;
  font-weight: ${(props) => (props.bold ? 700 : 400)};
`
