const mongoose=require('mongoose')
const {Schema}=require('mongoose')

const blog= new mongoose.Schema({
    title:String,
    posted_by:String,
    discription:String,
    picture:String
})

module.exports=mongoose.model('blog',blog)