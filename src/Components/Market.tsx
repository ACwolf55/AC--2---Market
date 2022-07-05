import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Item from './Item';


function Market() {
 
  const [items, setItems] = useState([]);

  useEffect(()=>{
    axios.get('/shop').then((res)=>{
      setItems(res.data)
      console.log(res.data)
      
    })},[])



  return (
    <div className="Market">  
    {items.length==0 
    ? 
    <p>loading</p> 
    :
    <>
        <h3>Marketplace</h3>
        <div className='item-map'>
        {items.map(element=>{
            return(
            <Item item={element}/>
            )
        })}  
    
        </div>
      </> 
  }
    </div>
  );
}

export default Market;
