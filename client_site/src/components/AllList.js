import React, {useEffect, useState} from 'react';
import {Delete,Read} from "../ApiServices/Crud";
import toast from "react-hot-toast";
import {useNavigate } from "react-router-dom"
import {EditFilled,DeleteFilled} from "@ant-design/icons"




const AllList = function (props) {

    const navigate = useNavigate();

    const [DataList,setDataList]=useState([])


useEffect(() => {
        Read()
            .then((result) => {

                setDataList(result)

            })

    }, [])


    const DeleteIteam = (id) => {

      Delete(id)

          .then((result)=>{
              if(result===true){
                  toast.success("Delete sucess")

                  Read()

                      .then((result) => {

                          console.log(result.length)

                          setDataList(result)

                            if(result.length>0){
                                 setTimeout(function(){
                                    window.location.reload()
                                  }, 50);

                            }
                            else {
                                navigate("/")
                            }
                      })

              }

              else {
                  toast.error("Delete Failed .Try agein")
              }

          })


    }


    const UpdateIteam = (id) => {
        navigate("/update/"+id)

                        }


    {
        if(DataList.length>0 ){
            return (
                <div className="container List">
                    <table className="table table-hover ">
                        <thead className="table_header">
                        <tr>
                            <th >ID</th>
                            <th>Product Name</th>
                            <th>Product Code</th>
                            <th>Image</th>
                            <th>UnitPrice</th>
                            <th>Product Qty</th>
                            <th>TotalPrice</th>
                            <th>Action</th>

                        </tr>
                        </thead>
                        <tbody>

                        {
                            DataList.map((item,index)=>{

                                return(
                                    <tr  className="table_document">
                                        <td > <h6>{index+1 +"."}</h6></td>
                                        <td ><h6>{item.ProductName}</h6></td>
                                        <td ><h6>{item.ProductCode}</h6></td>
                                        <td><img className="list-img" alt="Photo." src={item.Image} /></td>
                                        <td ><h6>{item.Qty}</h6></td>
                                        <td ><h6>{item.TotalPrice}</h6></td>
                                        <td ><h6>{item.UnitPrice}</h6></td>
                                        <td>
                                            <button onClick={UpdateIteam.bind(this,item._id)} className=" m-2 btn bg-success text-light" ><EditFilled/> </button>
                                            <button onClick= {DeleteIteam.bind(this,item._id)} className="btn bg-danger text-light"><DeleteFilled /></button>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                        </tbody>


                    </table>

                </div>

            )

        }
    }


};

export default AllList;