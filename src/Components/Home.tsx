import React, {useState} from 'react';
import Header from './Header'
import Market from './Market';
import Nav from './Nav'


function Home() {
  const[number, setNumber] = useState(1)
  // const[number, setNumber] = useState<number>(1)
  // const[number, setNumber] = useState<number | string>(1)
  const[loading, setLoading] = useState<boolean>(true)


  return (
    <div className="Home">  
    <Header/>
          <main>
        <Market/>
      
      <Nav/>
    </main>
   


    </div>
  );
}
export default Home;
