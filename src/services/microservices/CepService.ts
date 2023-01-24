import {ApiResponse, IZipcodeResponse} from '@services/api'
import {axios} from '@services/Service'

class CepService {
  private cep: string

  constructor() {
    this.cep = '/json'
  }

  getCep = async (cep: string): ApiResponse<IZipcodeResponse> => {
    return await axios.get(`${cep}${this.cep}/`)
  }
}

export default new CepService()
