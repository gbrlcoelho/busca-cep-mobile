import {ApiResponse, ICepResponse} from '@services/api'
import {axios} from '@services/Service'

class CepService {
  private cep: string

  constructor() {
    this.cep = '/json'
  }

  getCep = async (cep: string): ApiResponse<ICepResponse> => {
    return await axios.get(`${cep}${this.cep}/`)
  }
}

export default new CepService()
