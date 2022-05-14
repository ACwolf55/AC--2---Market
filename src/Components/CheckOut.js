import React, { useState,useEffect } from "react";
import TestStripe from './TestStripe'
import axios from "axios";
import StripeCheckout from 'react-stripe-checkout'


export default function CheckOut() {
    let id = sessionStorage.getItem("id");

    const [showCart, setShowCart] = useState(false)
    const [purchased,setPurchased] = useState(false)
    const [total,setTotal] = useState(0)
    const [totalDisplay, setTotalDisplay] = useState('')
    const [data, setdata] = useState(0)


    useEffect(()=>{
     axios.get(`/getCartTotal/${id}`).then((res=>{
         setTotalDisplay(res.data)
        let num = res.data*100
      num = parseFloat(num)
        console.log(res.data)
        setTotal(num)
     }))
    })

    const pay = async token =>{

        axios.post('/payment',{amount:total,token}).then((res=>{
        console.log('payemt fucn firered')
        if(res.status===200){
            alert('successful payment!')
        }
        else{
            alert('payment unsuccessful')
        }

        }))

    }

return(
    <div>
    {/* <StripeContainer/>  */}
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
