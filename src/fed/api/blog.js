'use strict'
import axios from './axios_config'

//获取博客列表
function getBlogs(page, categoryId, cb) {
  axios.get(`/blogs?page=${page}&category=${categoryId}`)
    .then((response)=>{
      cb(response.data)
    })
}
//根据分类的名字
function getBlogsByCategoryName(page, categoryName, cb) {
  axios.get(`/blogs?page=${page}&categoryName=${categoryName}`)
    .then((response)=>{
      cb(response.data)
    })
}

function addReadCount(id, cb) {
  axios.post('/blogs/addReadCount',{id:id})
    .then((response)=>{
      cb(response.data)
    })
}



export default {
  getBlogs, addReadCount, getBlogsByCategoryName
}
