import {Button, Input} from '@components/index'
import {ICepResponse} from '@services/api'
import CepService from '@services/microservices/CepService'
import {theme} from '@styles/index'
import {normalize} from '@utils/Normalize'
import {AxiosError} from 'axios'
import React, {useEffect, useState} from 'react'
import {ActivityIndicator} from 'react-native'
import {Card, CardTitle, Container, HomeView, LoadingView, Logo} from './styles'

export const Home = () => {
  const [cep, setCep] = useState('')
  const [loading, setLoading] = useState(false)
  const [cepData, setCepData] = useState<ICepResponse>({} as ICepResponse)

  const handleCepGet = async () => {
    setLoading(true)
    try {
      const response = await CepService.getCep(cep)
      setCepData(response.data)
      setCep('')
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.message)
      }
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }
  }

  useEffect(() => {
    console.log(cepData)
  }, [cepData])

  return (
    <Container>
      <Logo />
      <Card>
        {loading ? (
          <LoadingView>
            <ActivityIndicator size={120} color={theme.colors.yellow} />
          </LoadingView>
        ) : Object.keys(cepData).length > 0 ? (
          <>
            <CardTitle>Resultados para o CEP</CardTitle>
            <Button onPress={() => setCepData({} as ICepResponse)} bold color='rgb(40, 44, 52)'>
              Nova Consulta
            </Button>
          </>
        ) : (
          <>
            <HomeView>
              <CardTitle>Qual CEP você deseja</CardTitle>
              <CardTitle>pesquisar?</CardTitle>
            </HomeView>
            <HomeView>
              <Input placeholder='00000-000' value={cep} onChangeText={setCep} width={normalize(240)} maxLength={8} />
            </HomeView>
            <HomeView>
              <Button bold color='rgb(40, 44, 52)' onPress={handleCepGet}>
                CONSULTAR
              </Button>
            </HomeView>
            <Button backgroundColor='transparent' borderColor='white' borderWidth={3} bold>
              SALVAR FAVORITO
            </Button>
          </>
        )}
      </Card>
    </Container>
  )
}
