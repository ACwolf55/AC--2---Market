import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

interface PropsItem {
    item:{
        id:number,
        name:string,
        price: number,
        description: string,
        pic_url: string
    }
}

function Item(props: PropsItem) {
  const navigate = useNavigate();
  let user_id = sessionStorage.getItem("id");

  const[number, setNumber] = useState(1)
  // const[number, setNumber] = useState<number>(1)
  // const[number, setNumber] = useState<number | string>(1)
  const[itemAdded, setItemAdded] = useState<boolean>(false)


  
  const addToCart=()=>{ 

    if(user_id==null){
      console.log(user_id)
      alert('login to add to cart!')
    }else{
    axios.post('/addToCart',{user_id:user_id,item_id:props.item.id,quanity:1 }).then((res)=>{
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
    {itemAdded
     ? 
     <>
    <p>item added!</p>
    <img id='checkmark' src='https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Arrows-PNG/Green_Check_Mark_PNG_Clipart.png?m=1589361041'></img>
     </>
    :  

    <div className='item-normal'>
        <p>{props.item.name[0].charAt(0).toUpperCase() + props.item.name.slice(1)}</p>
        <p>${props.item.price}</p>
        <img className='fruit-pic' src={props.item.pic_url}></img>
        <br></br>
        <button onClick={addToCart}>add</button>
    </div>
  }
    </div>
  );
}

export default Item;
