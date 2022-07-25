import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Order from './Order';

export default function Orders() {
  let id = sessionStorage.getItem("id");

  const [orders,setOrders] = useState([])


  
  useEffect(()=>{

    axios.get(`/userOrders/${id}`).then((res)=>{
      setOrders(res.data)
    })

  },[])

  const ordersLog =()=>{
    console.log(orders)
  }


  return (
    <div className='orders'>

      <h2>-- ⚠ Page Under Construction ⚠ --</h2>
    <br/>
      <>
      {orders.length==0
      ?
      <p>loading</p>
      :
      <div className='orders-map'>
      {orders.map((item)=>{
        return <Order order={item}/>
      })}
    </div>

    }
      </>
      
      <button onClick={ordersLog}>console.log orders</button>

      
    </div>
  )
}
