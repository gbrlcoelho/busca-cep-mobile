import config from '@services/config/axiosConfig'
import {injectAxiosDebug} from '@services/utils/injectAxiosDebug'
import _axios from 'axios'

const axios = _axios.create({
  baseURL: config.baseURL?.replace(/\/$/, ''),
})

injectAxiosDebug(axios)

export {axios}
