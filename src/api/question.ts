import request from '@/utils/request.js'

//获取一级类型列表
export function fetchSolutionSeriesList() {
    return request({
      url: "/solutionSeries/listAll",
      method: "get"
    });
}
//获取级联的类型列表
export function fetchSolutionChildren() {
  return request({
    url: "/solutionSeries/list/withChildren",
    method: "get"
  });
}

//根据Id获取问题信息
export function getQuestionInfo(params: any) {
  return request({
    url: "/question/getQuestionListByType",
    method: "get",
    params: params,
  });
}

//增加游览次数
export function addQuestionView(id: number) {
  return request({
    url: "/question/addQuestionView/"+id,
    method: "get"
  });
}

//获取热门问题
export function getQuestionHot() {
  return request({
    url: "/question/getQuestionHot",
    method: "get"
  });
}

export function fetchListByFirstLevel(params: any) {
  return request({
    url: "/question/getListByFirstLevel",
    method: "get",
    params: params,
  });
}