import React from "react";
import { connect } from "react-redux";
import LoginRedux from "../components/LoginRedux/loginRedux";
import { withRouter } from "react-router-dom";
import { updateEmail, updatePassword } from '../actions';
import FormReducer from "../reducer";


const LoginReduxContainer = (props) => {
  const { updateEmail, updatePassword } = props;
console.log(props)

  const handleEmailChange = (event) => {
    updateEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    updatePassword(event.target.value);
  };

//   const onHandleSubmit = (event) => {
//     event.preventDefault();
//     props.history.replace("/login-redux/success");
//   };

  return (
    <LoginRedux
      emailInputChange={handleEmailChange}
      passwordInputChange={handlePasswordChange}
//       emailOutput={props.email}
//       passwordOutput={props.password}
      onSubmit={onHandleSubmit}
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