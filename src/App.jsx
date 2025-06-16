import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
    useEffect(()=>{
      fetch('https://dummyjson.com/products')
      .then((reponse)=>reponse.json())
      .then((reponse)=>setData(reponse.data))
      .catch((error)=>console.log(error)
      )
    })
  return (
    <>
      <div>

      </div>
    </>
  )
}

export default App
