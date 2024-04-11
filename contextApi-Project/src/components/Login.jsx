import React, { useContext, useState } from "react";
import UserContextProvider from "../context/UserContextProvider";
import UserContext from "../context/userContext";

function Login() {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const {setUser}=useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div>
      <h1>Login</h1>
      <input type="text"
       value={username}
       onChange={(e)=>setusername(e.target.value)}
      placeholder="username" />
      <input type="password"
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
       placeholder="userpassword" />
       <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
