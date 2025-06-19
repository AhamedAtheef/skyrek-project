import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import ProductCard from './components/productcard'
import Homepage from "./pages/Homepage"
import Loginpage from "./pages/loginpage"
import Registerpage from "./pages/Registerpage"
import Adminpage from "./pages/Adminpage"

function App() {
 
  return (
    <BrowserRouter>
      <div className="w-full h-screen">
        <Routes path="/">
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/register" element={<Registerpage/>}/>
        <Route path="/admin/*" element={<Adminpage/>}/>
        </Routes>
      </div>
    
    </BrowserRouter>

  )
}

export default App
