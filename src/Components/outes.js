// 1st npm i react-router-dom



import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export default function index() {



  return (
      <BrowserRouter>
         <App/>
      </BrowserRouter>
    
  )
}

///////////////////////////


import React from 'react'

import { Routes,Route } from 'react-router-dom'

export default function App() {


  return (

    <Routes>
          
        <Route path="/" element={ <Home/> } />
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/CheckOut' element={<CheckOut/>}/>
        <Route path='/Register' element={<Register/>}/>


    </Routes>
  )
}

//////////////////
import React from 'react'
import App from '../App'
import { useNavigate,Link } from 'react-router-dom'

export default function Compont() {

    const navigate = useNavigate()


  return (
    <div>

    <button onClick={()=>navigate('/Cart')}>Cart</button>
    
    
    <Link to="/Cart">Cart</Link>

    </div>
  )
}


