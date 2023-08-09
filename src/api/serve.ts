import request from '@/utils/request.js'

export function fetchIdeaList() {
    return request({
      url: "/serviceIdea/listAll",
      method: "get"
    });
}