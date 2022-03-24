import React, {useState} from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PayementForm from './PayementForm'

const PUBLIC_KEY ='pk_test_TYooMQauvdEDq54NiTphI7jx'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {


  return (
   <Elements stripe={stripeTestPromise}>
     <PayementForm/>

   </Elements>
    
  )
}
