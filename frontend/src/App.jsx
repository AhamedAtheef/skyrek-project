import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Homepage from "./pages/Homepage"
import Loginpage from "./pages/loginpage"
import Registerpage from "./pages/Registerpage"
import Adminpage from "./pages/Adminpage"
import Testpage from "./pages/Testpage"
import { Toaster } from "react-hot-toast"

function App() {
 
  return (
    <BrowserRouter>
      <div className="w-full h-screen">
        <Toaster possition="top-right"/>
        <Routes path="/">
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/register" element={<Registerpage/>}/>
        <Route path="/admin/*" element={<Adminpage/>}/>
        <Route path="/test" element={<Testpage/>}/>
        </Routes>
      </div>
    
    </BrowserRouter>

  )
}

export default App
