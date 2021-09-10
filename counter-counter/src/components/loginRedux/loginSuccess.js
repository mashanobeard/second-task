import React from 'react';
import { connect } from "react-redux";

const LoginSuccess = ({email, password}) => {
  <div>
      <h1>Welcome, {email} </h1>
      <p>Your password: {password}</p>
  </div>
}

const mapStateToProps = (state) => ({
    email: state.LoginReducer.email,
    password: state.LoginReducer.password,
  });

export default connect(mapStateToProps, null) (LoginSuccess);