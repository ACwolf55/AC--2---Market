import axios from "axios";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cartLogo from './cart.png'


function Auth() {
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
    axios.get(`/cartNumber/${id}`).then((res)=>{
        setCartNumber(res.data)
    })
    while(cartNumber==0){
      setNumber((prevState)=>prevState+1)
    }
    if(loginName==null){
      setLoaded(false)
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
        sessionStorage.setItem("username", res.data.username);
        sessionStorage.setItem("id", res.data.id);
        setLoaded(true);
      }).catch((err)=> console.log(err))
    }
  };

  const logout=()=>{
    sessionStorage.clear()
    setLoaded(false)
    navigate('/')
  }
 


  return (
    <div className="Auth">
      {loginName !== null ?
      <div id='cart'onClick={()=>navigate('/Cart')} style={{cursor: 'pointer'}} >
        <div className="cartNumLogo">{cartNumber==null?"loading" : cartNumber}</div>
        <img src={cartLogo} id='cart-logo'/>
        <h4>view cart</h4>
        <div/>
       <div>{loginName}</div> 
       <button onClick={logout}>Logout</button>
       </div>
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
    </div>
  );
}

export default Auth;
