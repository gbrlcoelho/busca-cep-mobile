import {Button, Input, Logo} from '@components/index'
import {useNavigation} from '@react-navigation/native'
import {normalize} from '@utils/Normalize'
import React, {useEffect, useState} from 'react'
import {Alert} from 'react-native'
import {Card, CardTitle, Container, HomeView} from './styles'

export const Home = () => {
  const {navigate, addListener} = useNavigation()
  const [zipcode, setZipcode] = useState('')

  const handleNavigation = async () => {
    zipcode.length >= 8 ? navigate('Details', {zipcode}) : Alert.alert('Digite um CEP válido')
  }

  useEffect(() => {
    const unsubscribe = addListener('focus', () => {
      setZipcode('')
    })
    return unsubscribe
  }, [addListener])

  return (
    <Container>
      <Logo />
      <Card>
        <HomeView>
          <CardTitle>Qual CEP você deseja</CardTitle>
          <CardTitle>pesquisar?</CardTitle>
        </HomeView>
        <HomeView>
          <Input
            placeholder='00000-000'
            value={zipcode}
            onChangeText={setZipcode}
            width={normalize(240)}
            maxLength={8}
          />
        </HomeView>
        <HomeView>
          <Button bold color='rgb(40, 44, 52)' onPress={handleNavigation}>
            CONSULTAR
          </Button>
        </HomeView>
        <Button backgroundColor='transparent' borderColor='white' borderWidth={3} bold>
          SALVAR FAVORITO
        </Button>
      </Card>
    </Container>
  )
}
