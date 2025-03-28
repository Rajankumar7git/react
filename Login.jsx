import "./Login.css"
import { useState } from "react";

const Login = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");


const handleSubmit=(event)=>{
event.preventDefault();
const LoginData={
   username,
   password,
};
console.log(LoginData);
}
  return (
    <div className="cantanier">
      <form className="box" onSubmit={handleSubmit}>
      <h1> Log In </h1>
         <label>Username</label>
         <input 
         className="user"
         type="text"
         placeholder="Enter Username"
         required
         autoComplete="off"
         value={username}
         onChange={(e)=>setUsername(e.target.value)}
         />
      

<label>Password</label>
         <input 
         className="password"
         type="password"
         placeholder="Enter Username"
         required
         autoComplete="off"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         />
         <br/>
   
   <button>Log in</button>
      </form>
    </div>
  )
}

export default Login
