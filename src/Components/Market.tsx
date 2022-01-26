import React, {useState} from 'react';
import Item from './Item';


function Market() {

  const[number, setNumber] = useState(1)
  // const[number, setNumber] = useState<number>(1)
  // const[number, setNumber] = useState<number | string>(1)
  const[loading, setLoading] = useState<boolean>(true)


  const [items, setItem] = useState([
    {
        name: "Mango",
        price: 1.00,
    },
    {
        name:"Apple",
        price:.40
    },
    {
        name: "Mango",
        price: 1.00,
    },
    {
        name:"Apple",
        price:.40
    },{
        name: "Mango",
        price: 1.00,
    },
    {
        name:"Apple",
        price:.40
    },
   

  ]);

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
