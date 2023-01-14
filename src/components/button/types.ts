import {TextProps, TouchableOpacityProps} from 'react-native'

export interface TouchableType extends TouchableOpacityProps {
  height?: number
  width?: number
  backgroundColor?: string
  borderRadius?: number
  borderColor?: string
  borderWidth?: number
  alignSelf?: string
  marginRight?: number
}

export interface ButtonViewType {
  marginTop?: number
}

export interface TextType extends TextProps {
  color?: string
  fontSize?: number
  disabled?: boolean
  bold?: boolean
}

export interface ButtonProps extends TouchableOpacityProps {
  height?: number
  width?: number
  backgroundColor?: string
  borderRadius?: number
  borderColor?: string
  borderWidth?: number
  color?: string
  fontSize?: number
  bold?: boolean
  onPress?: () => void
  onPressIn?: () => void
  onPressOut?: () => void
  isLoading?: boolean
  disabled?: boolean
  activeOpacity?: number
  alignSelf?: string
  marginRight?: number
  marginTop?: number
}
