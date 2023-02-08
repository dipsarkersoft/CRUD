const mongoose = require("mongoose")

const productSchema = mongoose.Schema({

     ProductName: {
          type: String, required: true
     },
     ProductCode: {
          type: String,unique:true ,required: true,
     },
     Image: {
          type: String, required: true
     },
     UnitPrice: {
          type: String, required: true
     },
     Qty: {
          type: String, required: true
     },
     TotalPrice: {
          type: String, required: true
     }
}, { versionKey: false, timestamps: true })


const products = mongoose.model("products", productSchema)
module.exports = products