/**
 * 例子
 */

import axios from '@/axios'
import qs from 'qs'

const article = {
  // 新闻列表
  articleList () {
    return axios.get(`/topics`)
  },
  // 新闻详情,演示
  articleDetail (id, params) {
    return axios.get(`/topic/${id}`, {
      params: params
    })
  },
  // post提交
  login (params) {
    return axios.post(`/accesstoken`, qs.stringify(params))
  }
}

export default article
