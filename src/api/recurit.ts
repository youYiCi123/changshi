import request from '@/utils/request.js'

export function fetchList() {
    return request({
      url: "/job/jobList",
      method: "get"
    });
}