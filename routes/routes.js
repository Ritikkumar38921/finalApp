const router = require('express').Router();
let {updatePost} = require("../controllers/controller");
let {deletePost} = require("../controllers/controller");

router.put('/:id',updatePost)
 router.delete('/:id',deletePost);


module.exports = router;

