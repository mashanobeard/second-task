import React from "react";
import { connect } from "react-redux";
import LoginRedux from "../components/LoginRedux/loginRedux";
import { withRouter } from "react-router-dom";
import { updateEmail, updatePassword } from '../actions';
import FormReducer from "../reducer";



const LoginReduxContainer = (props) => {
  const { updateEmail, updatePassword } = props;


  const handleEmailChange = (event) => {
    updateEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    updatePassword(event.target.value);
  };

   const onHandleSubmit = (event) => {
     event.preventDefault();
     props.history.replace("/Login-Redux/Success");
   };

  return (
    <LoginRedux
      emailChange={handleEmailChange}
      passwordChange={handlePasswordChange}
      onSubmit={onHandleSubmit}
      emailSuccess = {props.email}
      passwordSuccess = {props.password}
    />
  );
};

const mapStateToProps = (state) => ({
  email: state.FormReducer.email,
  password: state.FormReducer.password,
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