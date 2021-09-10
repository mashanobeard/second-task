import React from "react";
import { connect } from "react-redux";
import LoginRedux from "../components/LoginRedux/loginRedux";
import { withRouter } from "react-router-dom";
import { updateEmail, updatePassword } from '../actions/index';


const LoginReduxContainer = (props) => {
  const { updateEmail, updatePassword } = props;
   console.log(props)

  const handleEmailUpdate = (event) => {
    updateEmail(event.target.value);
  };

  const handlePasswordUpdate = (event) => {
    updatePassword(event.target.value);
  };

   const handleSubmit = (event) => {
     event.preventDefault();
     props.history.push("/Login-Redux/Success");
   };

  return (
    <LoginRedux
      emailUpdate={handleEmailUpdate}
      passwordUpdate={handlePasswordUpdate}
      onSubmit={handleSubmit}
      emailSuccess = {props.email}
      passwordSuccess = {props.password}
    />
  );
};

const mapStateToProps = (state) => ({
  email: state.LoginReducer.email,
  password: state.LoginReducer.password,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateEmail: (value) => dispatch(updateEmail(value)),
    updatePassword: (value) => dispatch(updatePassword(value)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginReduxContainer)
);