import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Order from './Order';

export default function Orders() {
  let id = sessionStorage.getItem("id");

  const [orders,setOrders] = useState([])
  const [loading,setLoading] = useState(true)


  
  useEffect(()=>{

    axios.get(`/userOrders/${id}`).then((res)=>{
      console.log(res.data)
      setOrders(res.data)
      setLoading(false)

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
      {loading
      ?
      <p>loading</p>
      :
      orders.length==0 ?
        <p>No Orders</p> 
        :
      <div className='orders-map'>
      {orders.map((item)=>{
        return (
       <div className='order-link'>
        <p>{item.date}</p>
        <p>items: {item.items.length}</p>
       </div>
        )
      })}
    </div>

    }
      </>
      
      <button onClick={ordersLog}>console.log orders</button>

      
    </div>
  )
}
