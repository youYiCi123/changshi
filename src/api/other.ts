import request from '@/utils/request.js'

export function sendMessage(data:any) {
    return request({
      url: '/message/addContent',
      method: 'post',
      data: data
    })
  }
  