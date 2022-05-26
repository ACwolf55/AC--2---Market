import axios from 'axios';
import React, {useEffect, useState} from 'react';

// interface PropsItem {
//     item:{id:Number,
//     user_id: Number,
//     item_id: Number,
//     quanity:Number,

//     }
// }

interface PropsItem {
  item:{ id:String,
    name:String,
    price: String,
    description: String,
    pic_url:string

  }
}

function CartItem(props: PropsItem) {

  let id = sessionStorage.getItem("id");
  const [total,setTotal] =useState(0)
 

  useEffect(() => {

  
    console.log(props.item)
  
  }, [])

  const deleteItem =()=>{
    //axios.delete(`/deleteCartItem/${item.id}.then(res))
  }
  

  return (
    <div className='item-card'>
      {props.item.id===''
      ?
      <>
      <p style={{color: "black"}}>...</p>
      </>
      :
        <div className='Item'>
      
        <p>{props.item.name}</p>
        <img className='fruit-pic' src={props.item.pic_url} ></img>
        <p>{props.item.price}</p>
        <button onClick={deleteItem}>Delete</button>
      </div>
}

    </div>
  );
}

export default CartItem;