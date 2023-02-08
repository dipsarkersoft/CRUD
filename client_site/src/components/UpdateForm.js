import React, {useEffect} from 'react';
import {useRef} from "react";
import {isEmpty} from "./ValidationHelper";
import toast from "react-hot-toast";
import { ReadProductById, Update} from "../ApiServices/Crud";
import {useNavigate} from "react-router-dom";


const UpdateForm = (props) => {



    const navigate=useNavigate()
    let ProductName,ProductCode,Image,UnitPrice,Qty,TotalPrice=useRef()


    const UpdateData = () => {
        let Product_Name=ProductName.value;
        let Product_Code=ProductCode.value;
        let Product_Image=Image.value;
        let Unit_Price=UnitPrice.value;
        let Product_Qty=Qty.value;
        let Total_Price=TotalPrice.value


        if(isEmpty(Product_Name && Product_Code && Product_Image && Unit_Price && Product_Qty && Total_Price)){
            toast.error("Please fill all fields")
        }
        else {
            Update(props.id,Product_Name, Product_Code, Product_Image, Unit_Price, Product_Qty, Total_Price)
                .then((result)=>{
                    if(result===true){
                        toast.success("Data Update Sucess")
                        ProductName.value="";
                        ProductCode.value="";
                        Image.value="";
                        UnitPrice.value="";
                        Qty.value="";
                        TotalPrice.value=""

                        navigate("/list")



                    }
                    else {
                        toast.error("Please Try again")
                    }
                })
                .catch((error)=>{
                    console.log(error)
                })

        }

    }


    useEffect(()=>{
        ReadProductById(props.id)
            .then((result)=>{
                ProductName.value=result[0]["ProductName"]
                ProductCode.value=result[0]["ProductCode"]
                Image.value=result[0]["Image"]
                UnitPrice.value=result[0]["UnitPrice"]
                Qty.value=result[0]["Qty"]
                TotalPrice.value=result[0]["TotalPrice"]
            })
            .catch()
    })


    return (
        <div>
            <div className="container main_form">

                <h3> Update Product</h3>
                <div className="Form">

                <div className="row">


                    <div className="col-md-6 p-2">
                        <label >Product Name</label>
                        <input autoFocus ref={(input)=>ProductName=input} type="text" className="form-control"/>

                    </div>
                    <div className="col-md-6 p-2">
                        <label >Product Code</label>
                        <input ref={(input)=>ProductCode=input} type="text" className="form-control"/>

                    </div>
                    <div className="col-md-6 p-2">
                        <label >Product Image</label>
                        <input  ref={(input)=>Image=input} type="text" className="form-control"/>

                    </div>
                    <div className="col-md-6 p-2">
                        <label >UnitPrice</label>
                        <input ref={(input)=>UnitPrice=input} type="text" className="form-control"/>

                    </div>
                    <div className="col-md-6 p-2">
                        <label >Product  Qty</label>
                        <input ref={(input)=>Qty=input} type="text" className="form-control"/>

                    </div>
                    <div className="col-md-6 p-2">
                        <label >TotalPrice</label>
                        <input ref={(input)=>TotalPrice=input} type="text" className="form-control"/>

                    </div>

                </div>

                <div className="row">
                    <div className="col-md-4">
                        <button onClick={UpdateData} className="btn btn-primary w-50"> Update</button>

                    </div>


                </div>

                </div>


            </div>

        </div>
    );
};




export default UpdateForm;