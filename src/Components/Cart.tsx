import React, {useState,useEffect} from 'react';
import axios from 'axios';
import CartItem from './CartItem';
import { useNavigate } from "react-router-dom";


function Cart() {
  const navigate = useNavigate();
  let id = sessionStorage.getItem("id");
  const[number, setNumber] = useState(1)
  // const[number, setNumber] = useState<number>(1)
  // const[number, setNumber] = useState<number | string>(1)
  const[loading, setLoading] = useState(true)

  const[cart,setCart] = useState(
    [
      {id:0,
    user_id: 0,
    item_id: 0,
    quanity:0}
    ]
    )
  

  useEffect(()=>{
    axios.get(`/getCart/${id}`).then((res)=>{
      console.log(res.data)
      setCart(res.data)
    })},[])

  const checkOut =()=>{

    navigate('/CheckOut')
  }

  return (
    <div className="Market">  
        <h3>Marketplace</h3>

        <div className='item-map'> 
              {cart.map(element=>{
                return(
                <CartItem item={element}/>
                )
            })}
            <button onClick={checkOut}>Check Out</button>
        </div>

    </div>
  )
          }

export default Cart;
