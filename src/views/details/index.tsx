import {useRoute} from '@react-navigation/native'
import React from 'react'

export const Details = () => {
  const {params} = useRoute()

  console.log(params)
  return <></>
}
