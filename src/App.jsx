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
import Footer from './Components/Footer/Footer'

function App() {
  const [favoris,setFavoris] = useState([])
  const ajouterFavori=(articles)=>{
    if(!favoris.find(fav=>fav.id===articles.id)){
      setFavoris([...favoris,articles])
      console.log(coucou);
      

    }
  }
    const retirerFavori = (id) => {
    setFavoris(favoris.filter(article => article.id !== id));
  };

  const [data, setData] = useState([])
    useEffect(()=>{
      fetch('https://dummyjson.com/products')
      .then((reponse)=>reponse.json())
      .then((reponse)=>setData(reponse.products))
      .catch((error)=>console.log(error)
      )
    })
    // console.log(data);
    
  return (
    <>
      <div>
        <div>
          <NavBar/>
        <Routes>
          <Route path='/' element={<Home data={data}  ajouterFavori={ajouterFavori} />}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Favori' element={<Favori data={data} favoris={favoris}  retirerFavori={retirerFavori} ajouterFavori={ajouterFavori} />}/>
          <Route path='*'  element={<Error/>}/>
          <Route path='/ProductDetail/:id' element={<ProductDetail data={data} />}/>
          <Route path='/Produit' element={<Product data={data} />} />
          </Routes>  
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
