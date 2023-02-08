const{createProductServices,findAllProductsServices,findProductsByIDServices,
     updateProductServices,deleteProductServices}=require("../services/product")

exports.creatProducts=async(req,res)=>{

     try{
          const data=req.body

          const product=await createProductServices(data)
         
          res.status(201).json({
               status:"sucess",
               message:"Data create sucess",
               data:product

               
     })
     }   
     
     catch(error){

          res.status(401).json({
               status:"failed",
               message:error.message
               
          })
     }
}



exports.findAllProduct=async(req,res)=>{

     try{
          const data=await findAllProductsServices()
          res.status(200).json({
               message:"Sucess",
               data:data
          })
     }
     catch(error){

          res.status(401).json({
               message:"failed",
               data:error.message
          })
     }
}


exports.selectProductById=async(req,res)=>{

     try{
          const id=req.params.id
          let query={_id:id}
     
          const result=await findProductsByIDServices(query)
          res.status(200).json({
               status:"sucess",
               data:result
          })

     
     
     }
     catch(error){
          res.status(400).json({
               status:"fail",
               data:error
          })

     }
}

exports.updateProduct=async(req,res)=>{

     try{
          const id=req.params.id
          const qurey={_id:id}
          const data=req.body
          const result=await updateProductServices(qurey,data)

          res.status(200).json({
               status:"sucess",
               message:"Data Update Sucess"
               //,data:result
          })

     }
     catch(error){
          res.status(401).json({
               status:"failed",
               data:error.message
          })

     }
}

exports.deleteProduct=async(req,res)=>{

     try{

          const id=req.params.id
          const query={_id:id}
          const result =await deleteProductServices(query)


          res.status(200).json({
               status:"sucess",
               message:"Data Delete Sucess"
               //,data:result
          })
     }
     catch(error){
          res.status(401).json({
               status:"failed",
               message:"Data delete failed"
               
          })

     }
}
