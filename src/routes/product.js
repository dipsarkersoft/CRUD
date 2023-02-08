const express=require("express")

const router=express.Router()
const{creatProducts,findAllProduct,selectProductById,updateProduct,deleteProduct}=require("../controllers/product")

router.post("/creatProducts",creatProducts)
router.get("/findAllProduct",findAllProduct)
router.get("/selectProductById/:id",selectProductById)
router.put("/updateProduct/:id",updateProduct)
router.post("/deleteProduct/:id",deleteProduct)



module.exports=router