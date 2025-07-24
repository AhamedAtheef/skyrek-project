import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Loginpage from "./pages/loginpage"
import Adminpage from "./pages/Adminpage"
import Testpage from "./pages/Testpage"
import { Toaster } from "react-hot-toast"
import { Clientpage } from "./pages/client/clientpage"
import HomeBtn from "./components/homebtn"

function App() {
 
  return (
    <BrowserRouter>
      <div className="w-full h-screen">
        <Toaster possition="top-right"/>
        <Routes path="/">
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/admin/*" element={<Adminpage/>}/>
        <Route path="/test" element={<Testpage/>}/>
        <Route path="/user/*" element={<Clientpage/>}/>
        <Route path="/*" element={<HomeBtn/> }/>
        </Routes>
      </div>
    
    </BrowserRouter>

  )
}

export default App
