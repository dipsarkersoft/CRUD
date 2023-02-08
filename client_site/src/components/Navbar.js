import React, {useEffect, useState} from 'react'
import IMG from "../images/th.png"
import {Read} from "../ApiServices/Crud";
import {useNavigate} from "react-router-dom";




const Navbar = () => {

  const [list,setList]=useState([])

    const navigate=useNavigate()

  useEffect(()=>{
    Read()
        .then((data)=>{
         setList(data)

         })

  },[])


  return (


<div className="Main_navbar">
   <nav className="navbar navbar-expand-lg ">
    <div className="container ">
      <a className="navbar-brand navLogo" href="/"><img src={IMG}/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav">

          <li className="nav-item">
            <a className="nav-link" href="/">Create</a>
          </li>

                { list.length>0? (

                  <div>
                      <li className="nav-item">

                          <a className="nav-link" href="/list">Read</a>
                      </li>
                  </div>
              ) :(<>
                </>)


          }


        </ul>
      </div>
    </div>
  </nav>
      </div>
  )
}

export default Navbar