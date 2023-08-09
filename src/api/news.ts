import request from '@/utils/request.js'

export function fetchTypeList(params: any) {
    return request({
      url: "/newsSeries/list",
      method: "get",
      params: params,
    });
  }

  export function fetchNewsByType(params: any) {
    return request({
      url: "/news/getAllNewsByType",
      method: "get",
      params: params,
    });
  }

  export function getNewsById(id) {
    return request({
      url: "/news/queryNewsContent/"+id,
      method: "get",
    });
  }

  export function getNewsSort(id) {
    return request({
      url: "/news/getNewsSort/"+id,
      method: "get",
    });
  }

  
  