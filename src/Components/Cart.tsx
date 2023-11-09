import React, {useState,useEffect} from 'react';
import axios from 'axios';
import CartItem from './CartItem';
import { useNavigate } from "react-router-dom";
import Header from './Header';


function Cart() {
  const navigate = useNavigate();
  let id = sessionStorage.getItem("id");
  let username = sessionStorage.getItem("username");
  const[loading, setLoading] = useState(true)
  const [cart, setCart] = useState([])
  const [total,setTotal] = useState(0)
  const [totalDisplay, setTotalDisplay] = useState('')

  // const[cart,setCart] = useState(
  //   [
  //     {id:0,
  //   user_id: 0,
  //   item_id: 0,
  //   quanity:0}
  //   ]
  //   )

  

  useEffect(()=>{
    // axios.get(`/getCart/${id}`).then((res)=>{
    //   console.log(res.data)
    //   setCart(res.data)

    axios.get(`/getCartItems/${id}`).then((res)=>{
      console.log(res.data)
      setCart(res.data)
      
      })

      axios.get(`/getCartTotal/${id}`).then((res=>{
        setTotalDisplay(res.data)
       let num = res.data*100
    }))
      

  },[])



  const checkOut =()=>{

    navigate('/CheckOut',{state:{cart}})
  }

  return (
    
    <div className="Market">  

    <h3>{`${username}'s cart`}</h3>
        <div className='cart-display'>
          <h4>${totalDisplay}</h4>
        <button onClick={checkOut}>Check Out</button>
        <div className='item-map'> 
        {cart.length===0
        ?
        <p>loading</p>
        :
        <>
              {cart.map(element=>{
                return(
                <CartItem item={element}/>
                )
            })}
          </>
          }
          </div>
          </div>

    </div>
    
  )
          }

export default Cart;
