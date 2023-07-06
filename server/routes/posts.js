const express = require("express");


const extractFile = require('../middleware/file')

const PostController = require("../controllers/posts")
const router = express.Router();


router.post("", extractFile, PostController.createPost);

router.put("/:id", extractFile, PostController.updatePost);

router.get("", PostController.getPosts)

router.get("/:id", PostController.getPost)

router.delete("/:id", PostController.deletePost)


module.exports = router;
