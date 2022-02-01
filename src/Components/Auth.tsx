import React, {useState} from 'react';


function Auth() {



  const[number, setNumber] = useState(1)
  // const[number, setNumber] = useState<number>(1)
  // const[number, setNumber] = useState<number | string>(1)
  const[loading, setLoading] = useState<boolean>(true)


  const increment =()=>{
    setNumber(prevState=> prevState+1)
    // setNumber("5") typescript error
  }

  return (
    <div className="Auth">  
        <form>
        <label>
            register:
            <input type="text" name="username" placeholder='username' />
            <input type="password" name="password" placeholder='password' />
        </label>
        <input type="submit" value="Submit" />
        </form>

    </div>

  );
}

export default Auth;