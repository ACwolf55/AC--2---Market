import React, {useState} from 'react'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'

export default function StripeContainer() {
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
    <div>StripeContainer</div>
  )
}
