import {Button, Input} from '@components/index'
import {useNavigation} from '@react-navigation/native'
import {normalize} from '@utils/Normalize'
import React, {useState} from 'react'
import {Alert} from 'react-native'
import {Card, CardTitle, Container, HomeView, Logo} from './styles'

export const Home = () => {
  const {navigate} = useNavigation()
  const [cep, setCep] = useState('')

  const handleNavigation = async () => {
    cep.length >= 8 ? navigate('Details', cep) : Alert.alert('Digite um CEP válido')
  }

  return (
    <Container>
      <Logo />
      <Card>
        <HomeView>
          <CardTitle>Qual CEP você deseja</CardTitle>
          <CardTitle>pesquisar?</CardTitle>
        </HomeView>
        <HomeView>
          <Input placeholder='00000-000' value={cep} onChangeText={setCep} width={normalize(240)} maxLength={8} />
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
