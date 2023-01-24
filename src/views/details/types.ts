import {RouteProp} from '@react-navigation/native'

type ParamList = {
  Details: {zipcode: string}
}

export type ScreenRouteProp = RouteProp<ParamList, 'Details'>
