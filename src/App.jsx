import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contacts/Contacts'
import Favori from './Pages/Favori/Favori'
import Error from './Pages/Error/Error'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import Product from './Pages/Products/Products'
import NavBar from './Components/Navbar/NavBar'

function App() {
  const [data, setData] = useState([])
    useEffect(()=>{
      fetch('https://dummyjson.com/products')
      .then((reponse)=>reponse.json())
      .then((reponse)=>setData(reponse.products))
      .catch((error)=>console.log(error)
      )
    })
    console.log(data);
    
  return (
    <>
      <div>
        <div>
          <NavBar/>
        <Routes>
          <Route path='/' element={<Home data={data} />}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Favori' element={<Favori/>}/>
          <Route path='/Error'  element={<Error/>}/>
          <Route path='/ProductDetail' element={<ProductDetail/>}/>
          <Route path='/Produit' element={<Product/>} />
          </Routes>  
        </div>
      </div>
    </>
  )
}

export default App
