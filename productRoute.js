const { Router } = require("express");
const router = Router();
const { getPost , createPost} = require("../productController/productController.js");

router.get("/products", getPost);
router.post("/create", createPost)

module.exports = router;
