const express=require('express');
const addPost = require('../controller/posts');

const router =express.Router();
router.get("/test",addPost);
module.exports=router;