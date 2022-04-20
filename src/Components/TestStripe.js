import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default function PurchaseContainer() {
  return (
    <div>
        <h1> STRIPE TESET!!! </h1>

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
