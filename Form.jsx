import "./Form.css"
import { useState } from "react";
const Form = () => {
const [user, setUser] = useState({
   FirstName:"",
   LastName:"",
   Email:"",
   Password:"",
   Phonenumber:"",
});

const handleInput=(e)=>{
   const{name,value} = e.target;
   setUser((prev)=>({...prev,[name]:value}));
};

const handleSubmit=(event)=>{
event.preventDefault();
console.log(user)
}


  return (
    <div className="main-div">
      <form onSubmit={handleSubmit}>
         <h1 className="head-text">sign up</h1>
         <p className="intraction">please fill up this form to create an account</p>
         <label>FristName:</label>
         <input
         type="text"
         name="FirstName"
         placeholder="Enrer Frist Name"
         required
         value={user.FirstName}
         onChange={handleInput}
         />
         <label>LastName:</label>
         <input
         type="text"
         name="LastName"
         placeholder="Enrer Last Name"
         required
         value={user.LastName}
         onChange={handleInput}
         />
         
          <label>Email:</label>
         <input
         type="email"
         name="Email"
         placeholder="Enrer email"
         required
         value={user.Email}
         onChange={handleInput}
         />
         
          <label>Password:</label>
         <input
         type="password"
         name="Password"
         placeholder="Enrer password"
         required
         value={user.Password}
         onChange={handleInput}
         />
          <label>Phone Number:</label>
         <input
         type="text"
         name="Phonenumber"
         placeholder="Enrer Mobile Number"
         required
         value={user.Phonenumber}
         onChange={handleInput}
         />
         <p className="intraction">By creating a account you agree to our <span><a>Terms & privacy</a></span></p>
         <button>sign Up</button>
      </form>
    </div>
  )
}

export default Form;
