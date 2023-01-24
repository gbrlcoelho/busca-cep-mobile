import {AxiosRequestConfig, AxiosResponse} from 'axios'

export type ApiResponse<T> = Promise<AxiosResponse<T>>

export type ApiConfig = AxiosRequestConfig

export type ListAllResponse<T> = ApiResponse<{
  content: Array<T>
}>

export interface IZipcodeResponse {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
}
