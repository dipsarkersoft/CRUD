
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import ReadPage from "./pages/ReadPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import Navbar from "./components/Navbar";
import {Toaster} from "react-hot-toast";


function App() {


  return (


      <BrowserRouter>
    <Navbar/>
    <Toaster/>

            <Routes>

                <Route path='/' element={<CreatePage></CreatePage>} ></Route>
                <Route path='/list' element={<ReadPage/>} ></Route>
                <Route path='/update/:id' element={<UpdatePage></UpdatePage>}></Route>
            </Routes>



</BrowserRouter>



          );


}

export default App;
