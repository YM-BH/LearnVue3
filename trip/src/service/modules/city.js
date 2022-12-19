
import request from '../request'

export function getAllCity() {
  return request.get({
    url: '/city/all'
  })
}