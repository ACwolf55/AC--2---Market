import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

interface PropsItem {
    item:{
        id:number,
        name:string,
        price: number,
        description: string
    }
}

function Item(props: PropsItem) {
  const navigate = useNavigate();
  let user_id = sessionStorage.getItem("id");

  const[number, setNumber] = useState(1)
  // const[number, setNumber] = useState<number>(1)
  // const[number, setNumber] = useState<number | string>(1)
  const[itemAdded, setItemAdded] = useState<boolean>(false)


  const increment =()=>{
    setNumber(prevState=> prevState+1)
    // setNumber("5") typescript error
  }
  const deincrement =()=>{
    if(number>0){
    setNumber(prevState=> prevState-1)
    }
  }
  
  const addToCart=()=>{
    let user_id = sessionStorage.getItem("id");
    if(user_id==null){
      alert('login to add to cart!')
    }else{
    axios.post('/addToCart',{user_id:user_id,item_id:props.item.id,quanity:number }).then((res)=>{
      console.log(res.data)
      console.log(itemAdded)
      setItemAdded(true)
      setNumber(1) 
      navigate('/')
      setTimeout(() => {setItemAdded(false)}, 1500);
     
    }).catch((err)=>console.log(err));
  }
  } 

  return (
    <div className="Item">  
    {itemAdded ? <p>item added!</p> :  

    <div className='item-normal'>
        <p>Item!</p>
        <p>{props.item.name}</p>
        <button onClick={deincrement}>-</button>
        <button onClick={increment}>+</button>
        <p>{number}</p>
        <button onClick={addToCart}>add</button>
    </div>
  }
    </div>
  );
}

export default Item;
