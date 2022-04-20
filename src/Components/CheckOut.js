import React, { useState,useEffect } from "react";
import TestStripe from './TestStripe'
import axios from "axios";
import StripeCheckout from 'react-stripe-checkout'


export default function CheckOut() {
    let id = sessionStorage.getItem("id");

    const [showCart, setShowCart] = useState(false)
    const [purchased,setPurchased] = useState(false)
    const [total,setTotal] = useState(0)

    const getTotal=()=>{
        axios.get(`/getCartTotal${id}`).then((res)=>{
            setTotal(res.data)
        })
    }

return(
    <div>
    {/* <StripeContainer/>  */}
    <h1>Total</h1>
   

        
    <StripeCheckout
            stripeKey='pk_test_51Kh1AwBS4IfWHtbjigMFs5u1KmU158nXHbRzoEKudS0jPUTypjrObeNAlFOHbHmYoK37Ec4TAjJP59pznbQzusTV00iomdfIpp'
            label='pay now'
            name='pay with card'
            billingAddress
            shippingAddress
            amount={2}
            description='test!'
        />


    </div>
)
}
