import React, {memo} from 'react'
import {Container, ResultText, RowGap, Title} from './styles'
import {ResultListProps} from './types'

const ResultList = ({zipcodeData}: ResultListProps) => {
  return (
    <Container>
      <RowGap>
        <Title>ESTADO: </Title>
        <ResultText>{zipcodeData.uf}</ResultText>
      </RowGap>
      <RowGap>
        <Title>CIDADE: </Title>
        <ResultText>{zipcodeData.localidade}</ResultText>
      </RowGap>
      <RowGap>
        <Title>BAIRRO: </Title>
        <ResultText>{zipcodeData.bairro}</ResultText>
      </RowGap>
      <RowGap>
        <Title>RUA: </Title>
        <ResultText>{zipcodeData.logradouro}</ResultText>
      </RowGap>
    </Container>
  )
}

export default memo(ResultList)
