import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Register() {
    const navigate = useNavigate();
    let loginName = sessionStorage.getItem("username");
    let id = sessionStorage.getItem("id");

  
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const[number, setNumber] = useState<number>(1)
   






    const register = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(username, password)
        
        if (username === "") {
          alert("enter username");
        } else if (password === "") {
          alert("must enter password");
        } else {
          axios.post("/register", { username, password }).then((res) => {
            if(res.data =='username already exists'){
              alert(res.data)
            }else{
           alert(`registration complete! for: ${username}`)
           navigate('/')
            }
    
          }).catch((err)=> console.log(err))
        }
      };



  return (

    <div className='register'>

<form onSubmit={register}>
        <label>
          Register:
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


    </div>
  )
}
