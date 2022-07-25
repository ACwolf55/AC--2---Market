import React from 'react'

export default function Order(props) {


  return (
    <div className='order'>
        {props.order.items.map((item)=>{
            return(
                <>
                <p>{item.name}</p>
                <p>{item.price}</p>
                </>
            )


        })}


    </div>
  )
}
