const ProductSchema = require('../productModel/productModel.js')
const getPost = async(req, res) => {
    try{
       const product = new ProductSchema.find();
        res.status(200).json(product)

    }catch(error){
        res.status(500).json({error:"Internal error"})
    }
}
const createPost = async(req, res) => {
    try{
        const {productname, price, rating} = req.body;
       const product = new ProductSchema({productname, price, rating});
       await product.save();
        res.status(201).json(product)

    }catch(error){
        res.status(500).json({error:"Internal error"})
    }
}


module.exports = {getPost, createPost};