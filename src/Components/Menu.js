import React,{useState,useEffect} from 'react'

export default function Menu() {
   
    const [num,setNum] = useState(0)

    const numAdder =()=>{
        setNum((prevState)=>{ prevState +1})
    }

    while(num<1000)
 
    


  return (
    <div className='Menu'>
        <button onClick={numAdder}>increase num</button>
        <p>{num}</p>
        
    </div>
  )
}
