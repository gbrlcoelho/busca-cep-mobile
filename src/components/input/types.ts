import {TextInputProps} from 'react-native'

export interface InputIconType extends TextInputProps {
  backgroundColor?: string
  borderRadius?: number
  width?: number | string
  fontSize?: number
  height?: number | string
}

export interface InputViewProps {
  width?: number | string
}
