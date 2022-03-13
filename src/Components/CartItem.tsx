import axios from 'axios';
import React, {useEffect, useState} from 'react';

interface PropsItem {
    item:{id:Number,
    user_id: Number,
    item_id: Number,
    quanity:Number
    }
}

function CartItem(props: PropsItem) {

  let user_id = sessionStorage.getItem("id");

  const[number, setNumber] = useState(1)
  const[item,setItem] = useState({
    id:"",
    name:"",
    price: "",
    description: ""
  })

  useEffect(() => {
    console.log(props.item.item_id)
    axios.get(`/getItem/${props.item.item_id}`).then((res)=>{
      console.log(res.data)
        setItem(res.data)
    })
  
  }, [])
  


  const increment =()=>{
    setNumber(prevState=> prevState+1)
    // setNumber("5") typescript error
  }
  const deincrement =()=>{
    if(number>0){
    setNumber(prevState=> prevState-1)
    console.log(item)
    }
  }
  
  return (
    <div className='item-card'>
      {item==null 
      ?
      <p>loading</p>
      :
        <div className='Item'>
        <p>Item!</p>
        <p>{item.name}</p>
        <button onClick={deincrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
}
    </div>
  );
}

export default CartItem;