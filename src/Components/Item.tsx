import axios from 'axios';
import React, {useState} from 'react';

interface PropsItem {
    item:{
        name:string,
        price: number
    }
}

function Item(props: PropsItem) {

  let user_id = sessionStorage.getItem("username");

  const[number, setNumber] = useState(1)
  // const[number, setNumber] = useState<number>(1)
  // const[number, setNumber] = useState<number | string>(1)
  const[loading, setLoading] = useState<boolean>(true)


  const increment =()=>{
    setNumber(prevState=> prevState+1)
    // setNumber("5") typescript error
  }
  
  const addToCart=()=>{
  
  } 

  return (
    <div className="Item">  
        <p>Item!</p>
        <p>{props.item.name}</p>

        <button onClick={addToCart}>add</button>


    </div>
  );
}

export default Item;
