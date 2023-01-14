import React, {memo} from 'react'
import {ActivityIndicator} from 'react-native'
import {useTheme} from 'styled-components'
import {ButtonView, Text, Touchable} from './styles'
import {ButtonProps} from './types'

const Button = ({
  onPress,
  onPressIn,
  onPressOut,
  isLoading,
  disabled,
  height,
  width,
  backgroundColor,
  borderRadius,
  borderColor,
  borderWidth,
  activeOpacity,
  alignSelf,
  marginRight,
  color,
  fontSize,
  children,
  marginTop,
  bold,
}: ButtonProps) => {
  const {colors} = useTheme()

  return (
    <ButtonView marginTop={marginTop}>
      <Touchable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={isLoading || disabled}
        height={height}
        width={width}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        borderColor={borderColor}
        borderWidth={borderWidth}
        activeOpacity={activeOpacity || 0.7}
        alignSelf={alignSelf}
        marginRight={marginRight}
        accessibilityRole='none'>
        {isLoading ? (
          <ActivityIndicator color={colors.darkGray} />
        ) : (
          <>
            <Text color={color} fontSize={fontSize} disabled={disabled} bold={bold}>
              {children}
            </Text>
          </>
        )}
      </Touchable>
    </ButtonView>
  )
}

export default memo(Button)
