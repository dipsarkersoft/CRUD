import React from 'react';
import axios from "axios";





//create product........

export function Create (ProductName,ProductCode,Image,UnitPrice,Qty,TotalPrice){

    const URL="http://localhost:8000/api/v1/creatProducts"
    const body={

        ProductName:ProductName,
        ProductCode:ProductCode,
        Image:Image,
        UnitPrice:UnitPrice,
        Qty:Qty,
        TotalPrice:TotalPrice
    }
   return   axios.post(URL,body)
        .then((res)=>{
            if(res.status===201){
                return true
            }
            else {
                return  false
            }

    })
     .catch((error)=>{
         console.log(error)
         return  false

    })

}



 export function Read (){
     const URL="http://localhost:8000/api/v1/findAllProduct"
   return  axios.get(URL)
        .then((res)=>{
            if (res.status === 200) {
                return res.data.data;
            } else {
                return false
            }

            }

        )
        .catch((error)=>{
            return false
        })
 }


export function ReadProductById (id){
    const URL="http://localhost:8000/api/v1/selectProductById/"+id
    return  axios.get(URL)
        .then((res)=>{
                if (res.status === 200) {
                    return res.data.data
                } else {
                    return false
                }

            }

        )
        .catch((error)=>{
            return false
        })
}




 export function Update (id,ProductName,ProductCode,Image,UnitPrice,Qty,TotalPrice){

     const URL="http://localhost:8000/api/v1/updateProduct/"+id
      const body={


          ProductName:ProductName,
          ProductCode:ProductCode,
          Image:Image,
          UnitPrice:UnitPrice,
          Qty:Qty,
          TotalPrice:TotalPrice
      }

    return  axios.put(URL,body)

         .then((res)=>{
             if(res.status===200){
                 return true
             }
             else {
                 return false
             }
         })
         .catch((error)=>{
             return false
         })
 }



 export function Delete (id){

     const URL="http://localhost:8000/api/v1/deleteProduct/"+id

   return axios.post(URL)

         .then((res)=>{
             if(res.status===200){
                 return true
             }
             else {
                 return false
             }
         })
         .catch((error)=>{
             console.log(error)
             return false
         })
 }



