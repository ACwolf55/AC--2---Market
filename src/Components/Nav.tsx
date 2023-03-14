import axios from "axios";
import React, { useState,useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import cartLogo from './cart.png'


function Nav() {
  const navigate = useNavigate();
  let loginName = sessionStorage.getItem("username");
  let id = sessionStorage.getItem("id");
  // let loginName = sessionStorage.getItem("username");
  // let id = sessionStorage.getItem("id");

  const [loaded, setLoaded] = useState(false);
  const [cartNumber, setCartNumber] = useState(null);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const[number, setNumber] = useState<number>(1)
  // const[number, setNumber] = useState<number | string>(1)
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log(cartNumber)
    let loginName = sessionStorage.getItem("username");
    let id = sessionStorage.getItem("id");
    if(id!==null){
    axios.get(`/cartNumber/${id}`).then((res)=>{
        setCartNumber(res.data)
    })
    while(cartNumber==0){
      setNumber((prevState)=>prevState+1)
    }
    if(loginName==null){
      setLoaded(false)
    }
  }
  }, [loaded])


  

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(username, password)
    
    if (username === "") {
      alert("enter username");
    } else if (password === "") {
      alert("must enter password");
    } else {
      axios.post("/login", { username, password }).then((res) => {
        console.log(res.data)
        sessionStorage.setItem("username",res.data.username );
        sessionStorage.setItem("id",res.data.id );
        setLoaded(true);
      }).catch((err)=> alert(err.response.request.response))
    }
  };

  const logout=()=>{
    sessionStorage.clear()
    setLoaded(false)
    navigate('/')
  }
 


  return (
    <nav>
      {loginName !== null ?
      <>
       <h2>{loginName}</h2> 
      <div className='cart-click' onClick={()=>navigate('/Cart')}>
        <div className="cartNumLogo">{cartNumber==null?"loading" : cartNumber}</div>
        <img src={cartLogo} id='cart-logo'/>
        <h4 className="view-cart">view cart</h4>
       </div>
        <div/>
        <Link to='/Orders'  style={{color: "#a8d6db"}}>View Orders</Link>
       <button onClick={logout}>Logout</button>
       </>
       :
       <>
        <form onSubmit={login}>
        <label>
          Login:
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
       <button onClick={()=>navigate('/Register')}>Register</button> 
       </>
       }
     
      <p style={{color:'black'}}>{loaded}</p>
    </nav>
  );
}

export default Nav;
