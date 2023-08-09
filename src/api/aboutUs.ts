import request from '@/utils/request.js'

export function fetchHistoryList() {
    return request({
      url: "/history/allList",
      method: "get"
    });
}

export function fetchCompanyIntro() {
    return request({
      url: "/intro/queryContent",
      method: "get"
    });
}

export function fetchCompanyCulture(params: any) {
  return request({
    url: "/culture/list",
    method: "get",
    params: params,
  });
}


