
import axios from "axios";
import { TIMEOUT, BASE_URL } from './config'

class Request {
  constructor(timeout, baseURL) {
    this.instance = axios.create({
      timeout,
      baseURL
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({...config, method: 'get'})
  }

  post(config) {
    return this.request({...config, method: 'post'})
  }
}

export default new Request(TIMEOUT, BASE_URL)

