/**
 * 例子
 */

import base from './base';
import axios from '@/axios';
import qs from 'qs';

const article = {
  // 新闻列表    
  articleList() {
    return axios.get(`${base.sq}/topics`);
  },
  // 新闻详情,演示    
  articleDetail(id, params) {
    return axios.get(`${base.sq}/topic/${id}`, {
      params: params
    });
  },
  // post提交    
  login(params) {
    return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));
  }
}

export default article;
