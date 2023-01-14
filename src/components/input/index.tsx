import React, {useState} from 'react'
import {useTheme} from 'styled-components/native'
import {InputView, TextInput} from './styles'
import {InputIconType} from './types'

export const Input = (inputIconProps: InputIconType) => {
  const [isOnFocus, setIsOnFocus] = useState(false)
  const {colors} = useTheme()

  return (
    <InputView width={inputIconProps.width}>
      <TextInput
        {...inputIconProps}
        onFocus={() => setIsOnFocus(!isOnFocus)}
        onBlur={() => setIsOnFocus(!isOnFocus)}
        backgroundColor={inputIconProps.backgroundColor}
        borderRadius={inputIconProps.borderRadius}
        height={inputIconProps.height}
        fontSize={inputIconProps.fontSize}
        accessibilityRole='none'
        placeholderTextColor={colors.lightGray}
        onChangeText={inputIconProps.onChangeText}
      />
    </InputView>
  )
}
