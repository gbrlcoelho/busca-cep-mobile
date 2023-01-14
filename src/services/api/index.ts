import _axios from 'axios'

export const {isAxiosError} = _axios

export const formatAxiosError = (error: unknown) => {
  if (isAxiosError(error)) {
    return error?.response?.data || error.message
  }
  return `Unknown: ${error}`
}

export * from '@services/microservices/types'
export * from 'axios'
