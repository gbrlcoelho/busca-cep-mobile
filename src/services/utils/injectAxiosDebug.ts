import {AxiosInstance} from 'axios'

export const injectAxiosDebug = (axios: AxiosInstance): void => {
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error?.response?.config) {
      }
      throw error
    },
  )
}
