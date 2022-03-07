import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Item from './Item';


function Market() {

  const[number, setNumber] = useState(1)
  // const[number, setNumber] = useState<number>(1)
  // const[number, setNumber] = useState<number | string>(1)
  const[loading, setLoading] = useState<boolean>(true)


  const [items, setItems] = useState([
    {
        id:1,
        name: "Mango",
        price: 1.00,
        description:'sweet tropical fruit'
    },
    {
        id:2,
        name:"Apple",
        price:.40,
        description:'red fruit'
    }

  ]);

  useEffect(()=>{
    axios.get('/shop',).then((res)=>{
      console.log(res.data)
      setItems(res.data)
    })
  },[])

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
