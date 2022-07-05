// 1st npm i react-router-dom   step 1

//       ----------  index.js step 2

import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export default function index() {



  return (
      <BrowserRouter>
         <App/>
      </BrowserRouter>
    
  )
}
// ----------------    APP.js step 3     declare routes


import React from 'react'
import Home from './Home'
import Register from './Register'

import { Routes,Route } from 'react-router-dom'

export default function App() {


  return (

    <Routes>
          
        <Route path="/" element={ <Home/> } />
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Register' element={<Register/>}/>


    </Routes>
  )
}
// -----------------------  any component step 4          switch between routes / pages
import React from 'react'
import App from '../App'
import { useNavigate,Link } from 'react-router-dom'

export default function Compont() {

    const navigate = useNavigate()

    

    

  return (
    <div>

    <button onClick={()=>navigate('/Cart')}>go to Cart</button>
    
    
    <Link to="/Register"><img></img>
    
    </Link>

    </div>
  )
}


