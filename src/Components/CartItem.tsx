import axios from 'axios';
import React, {useEffect, useState} from 'react';

interface PropsItem {
    item:{id:Number,
    user_id: Number,
    item_id: Number,
    quanity:Number,

    }
}

function CartItem(props: PropsItem) {

  let user_id = sessionStorage.getItem("id");

  const[number, setNumber] = useState(1)
  const[item,setItem] = useState({
    id:"",
    name:"",
    price: "",
    description: "",
    pic_url:''
  })
 

  useEffect(() => {
  
    axios.get(`/getItem/${props.item.item_id}`).then((res)=>{
      console.log(res.data)
        setItem(res.data)
    })
  
  }, [])
  

  return (
    <div className='item-card'>
      {item.id===''
      ?
      <>
      <p style={{color: "black"}}>loading</p>
      </>
      :
        <div className='Item'>
      
        <p>{item.name}</p>
        <img className='fruit-pic' src={item.pic_url}></img>
        <p>{item.price}</p>
      </div>
}
    </div>
  );
}

export default CartItem;