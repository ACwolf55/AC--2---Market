import React, { useState,useEffect } from "react";
import StripeContainer from "./StripeContainer";
import PayementForm from "./PayementForm";

export default function CheckOut() {

    const [showCart, setShowCart] = useState(false)
    const [purchased,setPurchased] = useState(false)


    const purchaseCart=()=>{

    }

return(
    <>
    {showCart ? <StripeContainer/>  : <h3> Cart Items </h3>}

    <button onClick={()=>setPurchased(true)}>Purchase</button>
    </>
)



}