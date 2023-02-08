const products=require("../models/product")

//create...
exports.createProductServices=async(data)=>{
     return products.create(data)
}

//read.......
exports.findAllProductsServices=async()=>{
     return products.find()
}


exports.findProductsByIDServices=async(query)=>{
     return products.find(query)
}

exports.updateProductServices=async(query,data)=>{
     return products.updateOne(query,data)
}

exports.deleteProductServices=async(query)=>{
     return products.deleteOne(query)
}