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
            username:
            <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        </form>

    </div>

  );
}

export default Auth;