import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Details} from '@views/details'
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
        <Screen name='Details' component={Details} options={{headerShown: false}} />
      </Navigator>
    </>
  )
}
