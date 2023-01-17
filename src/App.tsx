import {Router} from '@routes/Router'
import {theme} from '@styles/index'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {ThemeProvider} from 'styled-components'

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App
