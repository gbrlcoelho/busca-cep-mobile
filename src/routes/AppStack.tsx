import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Home} from '@views/home'
import React from 'react'
import {StatusBar} from 'react-native'
import {useTheme} from 'styled-components'
const {Navigator, Screen} = createNativeStackNavigator()

export const AppStack = () => {
  const {colors} = useTheme()

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={colors.background} />
      <Navigator>
        <Screen name='Home' component={Home} options={{headerShown: false}} />
      </Navigator>
    </>
  )
}
