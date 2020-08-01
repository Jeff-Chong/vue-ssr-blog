import request from '../utils/request'

export function uploadImg (data) {
  return request({
    url: '/file/upload',
    method: 'POST',
    data
  })
}