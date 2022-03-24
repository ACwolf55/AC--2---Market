import React, {useState} from 'react'
import axios from 'axios'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'

export default function PayementForm() {

  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit= async(e)=>{
    e.preventDefault()
    const [error, paymentMethod] = await stripe.createPaymentMethod({
      type:'card',
      card: elements.getElement(CardElement)

    })
  }



  return (
    <div>PaymentForm</div>
  )
}
