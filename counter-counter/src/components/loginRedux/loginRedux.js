import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const LoginRedux = () => {
  const [email,setEmail] = useState ("")
  const [password,setPassword] = useState ("")

  const dispatch = useDispatch()

  const formHandler = (event) => {
    event.preventDefault();
    console.log(event.target.elements)
    let data = event.target.elements;
    dispatch()
  }

  return (
  <div>
    <form onSubmit={formHandler}>
      <h1>Login here</h1>
      <input
        type="email" 
        placeholder="Email" 
        value={email}
        onChange = {(e) => setEmail(e.target.value)}/>
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange = {(e) => setPassword(e.target.value)}
         />
      <button type="submit">
    Log in
      </button>
    </form>
    
        </div>
   );
   
}
export default LoginRedux;