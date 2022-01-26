import React, {useState} from 'react';


function Item() {

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
    }
  ]);

  const increment =()=>{
    setNumber(prevState=> prevState+1)
    // setNumber("5") typescript error
  }

  return (
    <div className="Home">  
        <p>Item!</p>


    </div>
  );
}

export default Item;
