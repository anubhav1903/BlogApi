const blog=require('../controllers/blog.controller')
const router=require('express').Router();
router.get('/',blog.getAll)
router.get('/blog',blog.getBlog)
router.get('/update/:id',blog.updateBlog)
router.post('/update/:id',blog.postUpdateBlog)
router.get('/delete/:id',blog.deleteBlog)
router.post('/blog',blog.postBlog)

module.exports=router;