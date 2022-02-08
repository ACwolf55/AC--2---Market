import axios from 'axios';
import React, {useState} from 'react';


function Auth() {



  const[number, setNumber] = useState(1)
  const[username, setUsername] = useState<string>('')
  const[password, setPassword] = useState<string>('')
  // const[number, setNumber] = useState<number>(1)
  // const[number, setNumber] = useState<number | string>(1)
  const[loading, setLoading] = useState<boolean>(true)


  const increment =()=>{
    setNumber(prevState=> prevState+1)
    // setNumber("5") typescript error
  }

  const login=()=>{
    if(username===''){
      alert('enter username')
    }else if(password===''){alert('must enter password')}
    else{
    axios.post('/login',{username,password})
    }
  }

  return (
    <div className="Auth">  
        <form onSubmit={login}>
        <label>
            register:
            <input type="text" name="username" placeholder='username' onChange={setUsername} />
            <input type="password" name="password" placeholder='password' />
        </label>
        <input type="submit" value="Submit" />
        </form>

        <p style={{color:'black'}}>{number}</p>
        <button onClick={increment}>Add</button>

    </div>

  );
}

export default Auth;