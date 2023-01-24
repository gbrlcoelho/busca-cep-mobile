import React, {memo} from 'react'
import {Container, ResultText, RowGap, Title} from './styles'
import {ResultListProps} from './types'

const ResultList = ({zipcodeData: cepData}: ResultListProps) => {
  return (
    <Container>
      <RowGap>
        <Title>ESTADO: </Title>
        <ResultText>{cepData.uf}</ResultText>
      </RowGap>
      <RowGap>
        <Title>CIDADE: </Title>
        <ResultText>{cepData.localidade}</ResultText>
      </RowGap>
      <RowGap>
        <Title>BAIRRO: </Title>
        <ResultText>{cepData.bairro}</ResultText>
      </RowGap>
      <RowGap>
        <Title>RUA: </Title>
        <ResultText>{cepData.logradouro}</ResultText>
      </RowGap>
    </Container>
  )
}

export default memo(ResultList)
