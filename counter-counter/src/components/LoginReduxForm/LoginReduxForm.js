import React from 'react'
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';



let LoginReduxForm = ({onSubmit, emailUpdate, passwordUpdate, emailSuccessForm, passwordSuccessForm}) => {

return(
    <div>
  <form onSubmit={onSubmit}>
    <div>
        <label htmlFor="email">Email</label> <br/>
        <Field 
        className="inputs"
        name="email" 
        component='input'
        onChange={emailUpdate}  
        type="email"
        required/>
    </div>
    <div>
        <label htmlFor="password">Password</label> <br/>
        <Field 
        className="inputs"
        name="password" 
        component='input' 
        onChange={passwordUpdate}
        minLength ="6"
        required
        type="password" />
   </div>
   <div>
    <button type="submit"  className="btn">
      Submit
    </button>
    </div>
  </form>
  <div>
    <pre>
        <code>
         <strong>Your creds</strong> = {JSON.stringify(emailSuccessForm)}, {JSON.stringify(passwordSuccessForm)}
        </code>
    </pre>
    </div>

</div>
    )
}
LoginReduxForm.propTypes ={
    onSubmit: PropTypes.func,
} 

 LoginReduxForm = reduxForm({
    form: 'login'
})(LoginReduxForm)

export default LoginReduxForm;