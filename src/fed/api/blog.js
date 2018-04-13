'use strict'
import axios from './axios_config'

//获取博客列表
function getBlogs(page, categoryId, cb) {
  axios.get(`/blogs?page=${page}&category=${categoryId}`)
    .then((response)=>{
      cb(response.data)
    })
}


export default {
  getBlogs
}