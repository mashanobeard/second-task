import React from "react";
import LoginReduxForm from "../components/LoginReduxForm/LoginReduxForm";
import { updateEmail, updatePassword } from '../actions/index';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const LoginReduxFormContainer = (props) => {
    const { updateEmail, updatePassword } = props;

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
       <LoginReduxForm
            onSubmit={handleSubmit}
            emailUpdate={handleEmailUpdate}
            passwordUpdate={handlePasswordUpdate}
            emailSuccessForm = {props.email}
            passwordSuccessForm = {props.password}
        />
)
}
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
      connect(mapStateToProps, mapDispatchToProps)(LoginReduxFormContainer)
    );
