const mongoose = require('mongoose')
const blog=require('../services/blog.service')

module.exports.getAll=async(req,res)=>{
    const result=await blog.getAll()
    res.render('index',{'data':result})
}
module.exports.getBlog=async(req,res)=>{
    const result=await blog.getBlog()
    res.render('blog')
}
module.exports.updateBlog=async(req,res)=>{
    const id = mongoose.Types.ObjectId(req.params['id']);
    const result=await blog.updateBlog(id)
    res.render('update',{"data":result})
}
module.exports.postUpdateBlog=async(req,res)=>{
    const id = mongoose.Types.ObjectId(req.params['id']);
    const result=await blog.postUpdateBlog(id,req.body.uptitle,req.body.upposted_by,req.body.updiscription,req.body.uppicture)

    res.redirect('/')
}
module.exports.deleteBlog=async(req,res)=>{
    const id = mongoose.Types.ObjectId(req.params['id']);
    const result=await blog.deleteBlog(id)

    res.redirect('/')
}
module.exports.postBlog=async(req,res)=>{
    const result=await blog.postBlog(req.body)
    res.redirect('/')
}