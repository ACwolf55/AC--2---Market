import axios from "axios";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Auth() {
  const navigate = useNavigate();
  let loginName = sessionStorage.getItem("username");
  let id = sessionStorage.getItem("id");
  // let loginName = sessionStorage.getItem("username");
  // let id = sessionStorage.getItem("id");

  const [number, setNumber] = useState(1);
  const [cartNumber, setCartNumber] = useState(0);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const[number, setNumber] = useState<number>(1)
  // const[number, setNumber] = useState<number | string>(1)
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let loginName = sessionStorage.getItem("username");
    let id = sessionStorage.getItem("id");
    if(loginName!==null){
      axios.get(`/cartNumber/${id}`).then((res)=>{
        setCartNumber(res.data)
      })
    }

  }, [])
  

  const increment = () => {
    setNumber((prevState) => prevState + 1);
    sessionStorage.setItem("test",'true');
    // setNumber("5") typescript error
  };

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
        navigate('/')
        setNumber((prevState) => prevState + 1);
      }).catch((err)=> console.log(err))
    }
  };

  const logout =()=>{
    sessionStorage.clear()
    setNumber(0)
  }

  return (
    <div className="Auth">
      {loginName !== null ?
      <div id='cart'>
        <div className="cartNumLogo">{cartNumber}</div>
        <img src='./cart.png'/>
        <div/>
       <div>{loginName}</div> 
       </div>
       :
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
      </form> }
      <p style={{color:'black'}}>{number}</p>
        <button onClick={increment}>Add</button>
        <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Auth;
