
const express = require('express');
const {
    addPost,
    getPost,
    getPosts,
    deletePost,
    updatePost
} = require('../controller/posts');

const router = express.Router();

// GET all posts - this should be first
router.get("/", getPosts);

// GET single post by id
router.get("/:id", getPost);

// POST create new post
router.post("/", addPost);

// DELETE post
router.delete("/:id", deletePost);

// UPDATE post
router.put("/:id", updatePost);

module.exports = router;