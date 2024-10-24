
import ProductsWrapper from "./components/productsWrapper";
import ShoeDetails from "./components/shoeDetails";
import ShoeType from "./components/ShoeType";
import './App.css';
function App() {
  return (
    <div className='App'>
     <ProductsWrapper
     shoedetails={<ShoeDetails />}
     shoeName={<ShoeType />}  
     />
    </div>
  )
}

export default App
