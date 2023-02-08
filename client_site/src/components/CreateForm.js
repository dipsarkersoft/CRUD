import React, {useRef} from 'react';
import ScreenLoader from "./ScreenLoader";
import toast from "react-hot-toast";
import {isEmpty} from "./ValidationHelper";
import {Create} from "../ApiServices/Crud";
import {useNavigate} from "react-router-dom";


const CreateForm = () => {

    let ProductName,ProductCode,Image,UnitPrice,Qty,TotalPrice,Loader=useRef()
    const navigate=useNavigate()

    const SaveData = () => {
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
            Loader.classList.remove("d-none")
            Create(Product_Name,Product_Code,Product_Image,Unit_Price,Product_Qty,Total_Price)
                .then((result)=>{
                    Loader.classList.add("d-none")

                    if(result===true){

                        toast.success("Data create Sucess")


                        navigate("/list")




                    }
                    else {
                        toast.error("Please Try again")
                    }
                })

        }
    }



    return (
        <>

        <div className="container main_form">


            <h3> Create Product</h3>
            <div className="Form">
               <div className="row ">

                <div className="col-md-6 p-2">
                    <label >Product Name</label>
                    <input autoFocus ref={(input)=>ProductName=input} type="text"  className="form-control"/>

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
                    <button onClick={SaveData} className="btn btn-primary w-50">Save</button>


                </div>


            </div>
            </div>
        </div>
            <div className="d-none" ref={(e)=>Loader=e}>
                <ScreenLoader/>

            </div>

        </>




    );
};

export default CreateForm;