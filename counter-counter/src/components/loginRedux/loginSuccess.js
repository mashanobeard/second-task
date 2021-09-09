import React from 'react';
import { connect } from "react-redux";


const LoginSuccess = ({email, password}) => {

  return (
    
  <div>
      <h1>Welcome, {email} </h1>
      <p>Your password: {password}</p>
  </div>
   ); 
}
const mapStateToProps = (state) => ({
    email: state.FormReducer.email,
    password: state.FormReducer.password,
  });

export default connect(mapStateToProps, null) (LoginSuccess);