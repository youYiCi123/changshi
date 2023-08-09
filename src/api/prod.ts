import request from '@/utils/request.js'

export function fetchTypeList() {
    return request({
      url: "/prodSeries/listAll",
      method: "get"
    });
 }

 //获取该产品类型下的产品
 export function fetchProdByType(params: any) {
  return request({
    url: "/prod/getAllProdByType",
    method: "get",
    params: params,
  });
}

//产品详情
export function getProdInfo(id: number) {
  return request({
    url: "/prod/queryContent/"+id,
    method: "get"
  });
}

//产品推荐
export function getRecommendProd(params: any) {
  return request({
    url: "/prod/getRecommendProd",
    method: "get",
    params: params,
  });
}
