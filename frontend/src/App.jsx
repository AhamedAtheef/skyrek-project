import './App.css'
import ProductCard from './components/productcard'

function App() {
 
  return (
    <>
     <div>
      <ProductCard
      name = "Apple laptop"
      price= "$500"
      image = "https://picsum.photos/id/1/200/300"
      />
     </div>
    </>
  )
}

export default App
