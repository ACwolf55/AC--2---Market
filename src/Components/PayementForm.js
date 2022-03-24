import React, { useState } from "react";
import axios from "axios";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base:{
      iconColor:"orange"
    },
    invalid: {
      iconColor:"grey",
      color:"white"
    }
  }
}

export default function PayementForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [error, paymentMethod] = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

  if (!error) {
    try {
      const { id } = paymentMethod;
      axios
        .post("/http://localhost:4000/payment", {
          amount: 100,
          id: id,
        })
        .then((res) => {
          if (res.data.success) {
            console.log(" Successful payment! :) ");
            setSuccess(true);
          }
        });
    } catch (error) {
      console.log('Error',error)
    }
  }
  else{
    console.log(error.message)
  }
}
//---------------------end of handle Submit



  return (

  <>
  {!success 
  ?
    <form onSubmit={handleSubmit}>
      <fieldset className="FormGroup">
        <div className="FormRow">
          <CardElement options={CARD_OPTIONS}/>
        </div>
      </fieldset>
      <button>Pay</button>
    </form>
  :
  <>
  <h2>Purchase complete!</h2>
  </>
}
  
  </>
  
  )
}
