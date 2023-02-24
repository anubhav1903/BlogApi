const blog=require('../models/blog.model')

module.exports.getAll= async()=>{
    const data= await blog.find();
    return data;
}
module.exports.getBlog= async()=>{
    const data=""
    return data;
}
module.exports.updateBlog= async(id)=>{
    const data=await blog.findById(id)
    return data;
}
module.exports.postUpdateBlog= async(id,title,posted_by,discription,picture)=>{
    try {
        await blog.updateOne({_id:id},{
            $set:{
                title:title,
                posted_by:posted_by,
                discription:discription,
                picture:picture
            }
        })
        return {success:true}
    } catch (error) {
        return {success:false}   
    }

}
module.exports.deleteBlog= async(id)=>{
    try {
        await blog.deleteOne({_id:id})
        return {success:true}
    } catch (error) {
        return {success:false}   
    }
   
}
module.exports.postBlog= async(allData)=>{
    try {
        blog(allData).save();
        return {success:true}
    } catch (error) {
        return {success:false}   
    }
   
}