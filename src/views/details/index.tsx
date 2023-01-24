import {Button, Loader, Logo, ResultList} from '@components/index'
import {useNavigation, useRoute} from '@react-navigation/native'
import {IZipcodeResponse} from '@services/api'
import CepService from '@services/microservices/CepService'
import {Card, CardTitle, Container, HomeView} from '@views/home/styles'
import React, {useEffect, useState} from 'react'
import {ScreenRouteProp} from './types'

export const Details = () => {
  const {params} = useRoute<ScreenRouteProp>()
  const {goBack} = useNavigation()
  const [loading, setLoading] = useState(false)
  const [zipcodeData, setZipcodeData] = useState({} as IZipcodeResponse)

  const handleGetCepDetails = async (zipcode: string) => {
    setLoading(true)
    try {
      const response = await CepService.getCep(zipcode)
      setZipcodeData(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleGetCepDetails(params.zipcode)
  }, [params.zipcode])

  return (
    <Container>
      <Logo />
      <Card>
        {loading ? (
          <Loader />
        ) : (
          <HomeView>
            <CardTitle>Resultados para o CEP</CardTitle>
            <ResultList zipcodeData={zipcodeData} />
            <Button onPress={goBack} bold color='rgb(40, 44, 52)'>
              NOVA CONSULTA
            </Button>
          </HomeView>
        )}
      </Card>
    </Container>
  )
}
