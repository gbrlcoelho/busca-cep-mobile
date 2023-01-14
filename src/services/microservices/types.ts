import {AxiosRequestConfig, AxiosResponse} from 'axios'

export type ApiResponse<T> = Promise<AxiosResponse<T>>

export type ApiConfig = AxiosRequestConfig

export type ListAllResponse<T> = ApiResponse<{
  content: Array<T>
}>
