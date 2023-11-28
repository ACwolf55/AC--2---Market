import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Item from './Item';


export default function Market() {
 
  const [items, setItems] = useState([]);
  const [searchString, setsearchString] = useState('')
  const [searched,setSearched] = useState(false)
  const [searchedArr,setSearchedArr] = useState([])


  useEffect(()=>{
    axios.get('/allItems').then((res)=>{
      setItems(res.data)
      console.log(res.data)
    }).catch((err)=>console.log(err))
    
    },[])

    const searchItems =()=>{
      console.log('sdf')
      console.log(searchString)
      let word = searchString.toLowerCase()
      console.log(word)
      let filterArr = items.filter((item)=>{
        return item.name === word
      })
  
      if(filterArr.length!==0){
        setSearchedArr(filterArr)
        setsearchString('')
        setSearched(true)
      }
    }


    const resetSearch =()=>{
      setSearched(false)

    }



  return (
    <div className="Market">  
    {items.length==0 
    ? 
    <p>loading</p> 
    :
    <>
         <div className='search-form'>
        <input type='text' value={searchString} onChange={(e)=>setsearchString(e.target.value)}></input>
      <button onClick={searchItems}>&#x1F50D;</button>
      </div>
        <div className='item-map'>
    { searched 
      ?
      <>
      <button onClick={resetSearch}>Back to Market</button>
         {searchedArr.map(item=>{
            return(
           <Item item={item}/>
            )
        })} 
      
      
      </>
      :
     <>
        {items.map((item)=>{
            return(
           <Item item={item}/>
            )
        })}  
        </>
  }
    
        </div>
        </>
  }
    </div>
  );
}