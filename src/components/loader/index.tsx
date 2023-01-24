import React, {memo} from 'react'
import {ActivityIndicator} from 'react-native'
import {useTheme} from 'styled-components'
import {LoadingView} from './styles'

const Loader = () => {
  const {colors} = useTheme()

  return (
    <LoadingView>
      <ActivityIndicator size={120} color={colors.yellow} />
    </LoadingView>
  )
}

export default memo(Loader)
