import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Item from './Item';
import { addAbortSignal } from 'stream';


function Market() {

  const[number, setNumber] = useState(1)
  // const[number, setNumber] = useState<number>(1)
  // const[number, setNumber] = useState<number | string>(1)
  const[loading, setLoading] = useState<boolean>(true)


  const [items, setItems] = useState([]);

  useEffect(()=>{
    axios.get('/shop').then((res)=>{
      setItems(res.data)
      
    })},[])

  const increment =()=>{
    setNumber(prevState=> prevState+1)
    // setNumber("5") typescript error
  }

  return (
    <div className="Market">  
        <h3>Marketplace</h3>
        <div className='item-map'>
        {items.map(element=>{
            return(
            <Item item={element}/>
            )
        })}
        </div>

    </div>
  );
}

export default Market;
