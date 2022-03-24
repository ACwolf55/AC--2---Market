import React, { useState,useEffect } from "react";
import StripeContainer from "./StripeContainer";

export default function CheckOut() {

    const [showCart, setShowCart] = useState(false)




return(
    <>
    {showCart ? <StripeContainer/>  : <h3> Cart Items </h3>}
    </>
)



}