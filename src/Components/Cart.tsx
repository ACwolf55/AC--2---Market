import React, {useState,useEffect} from 'react';
import axios from 'axios';
import CartItem from './CartItem';


function Cart() {
let id = sessionStorage.getItem("id");
  const[number, setNumber] = useState(1)
  // const[number, setNumber] = useState<number>(1)
  // const[number, setNumber] = useState<number | string>(1)
  const[loading, setLoading] = useState<boolean>(true)
  const[cart,setCart] = useState([])
  

  useEffect(()=>{
    axios.get(`/getCart/${id}`).then((res)=>{
      console.log(res.data)
      setCart(res.data)
    })},[])

  const increment =()=>{
    setNumber(prevState=> prevState+1)
    // setNumber("5") typescript error
  }

  return (
    <div className="Market">  
        <h3>Marketplace</h3>

        {/* <div className='item-map'>
        {cart.map(item=>{
            return(
            <CartItem item_id={item}/>
            )
        })}
        </div> */}

    </div>
  );
}

export default Cart;
