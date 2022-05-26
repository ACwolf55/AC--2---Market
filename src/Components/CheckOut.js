import React, { useState,useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout'


export default function CheckOut() {
    let id = sessionStorage.getItem("id");
    const location = useLocation()
    const {cart} = location.state

    const [showCart, setShowCart] = useState(false)
    const [purchased,setPurchased] = useState(false)
    const [total,setTotal] = useState(0)
    const [totalDisplay, setTotalDisplay] = useState('')
    const [order,setOrder] = useState({
        items:cart,
        user_id:id,
        cost: totalDisplay,
        "succesful_payment":false,
        "order_shipped":false,
        "order_delivered":false,
        "order number":3,
        "notes":["order all good"]
    
    })
   


    useEffect(()=>{
        console.log(location.state)
      
     axios.get(`/getCartTotal/${id}`).then((res=>{
         setTotalDisplay(res.data)
        let num = res.data*100
      num = parseFloat(num)
        console.log(res.data)
        setTotal(num)
     }))
    },[])

    const pay = async token =>{

        axios.post('/payment',{id:id,amount:total,token}).then((res=>{
        console.log('payemt fucn firered')
        if(res.status===200){

            const order = {
                items:cart,
                user_id:id,
                cost: totalDisplay,
                "succesful_payment":true,
                "order_shipped":false,
                "order_delivered":false,
                "order number":4,
                "notes":["order all good"]
            
            }



            axios.post('/newOrder',{order}).then((res)=>{
                console.log(res.data)
            })
            alert('successful payment!')
        }
        else{
            alert('payment unsuccessful')
        }

        }))

    }

return(
    <div className="Checkout">
   
    <h1>Total</h1>
    <p>${totalDisplay}</p>
   

        
    <StripeCheckout
            stripeKey='pk_test_51Kh1AwBS4IfWHtbjigMFs5u1KmU158nXHbRzoEKudS0jPUTypjrObeNAlFOHbHmYoK37Ec4TAjJP59pznbQzusTV00iomdfIpp'
            label='pay now'
            name='pay with card'
            billingAddress
            shippingAddress
            amount={total}
            description='test!'
            token={pay}
        />


    </div>
)
}
