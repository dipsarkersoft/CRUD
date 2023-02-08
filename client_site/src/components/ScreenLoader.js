 import React from 'react';
 import loader from "../components/loader.svg"
 const ScreenLoader = () => {
     return (
       <div  className="ProcessingDiv">
      <div className="container center-screen">
          <img className="loader-size"src={loader}/>

             </div>
         </div>
     );
 };

 export default ScreenLoader;