import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

//new with old login


const LoginRedux = ({ emailUpdate, passwordUpdate, onSubmit, emailSuccess, passwordSuccess }) => {
  return (
  <div>
      <h1>Log in with Redux</h1>
      <Formik>
        <Form onSubmit={onSubmit}>
          <div>
              <p>
                  <label htmlFor="email" className="names" >Email</label> <br/>
                  <input
                  className="inputs"
                   type='email'
                   name='email'
                   onChange={emailUpdate}
                   required
                  //onBlur={handleBlur}
                   />
              </p>
              <p>
                  <label htmlFor="password" className="names">Password</label> <br/>
                  <input
                   className="inputs"
                   type='password'
                   name='password'
                   onChange={passwordUpdate}
                   required
                   minLength ="6"
                 
                   //onBlur={handleBlur}
                    />
              </p>
             
              <Button
                variant="contained"
                color="primary"
                type='submit'
                
                >Enter</Button>
    
          </div>
          </Form>
      </Formik>
          <div>
              <pre>
                <code>
                    <strong>Your creds</strong> = {JSON.stringify(emailSuccess)}, 
                    {JSON.stringify(passwordSuccess)}
                </code>
              </pre>
          </div>
        </div>
   );  
}
LoginRedux.propTypes ={
  emailUpdate: PropTypes.func,
  passwordUpdate: PropTypes.func,
  onSubmit: PropTypes.func,
  emailSuccess: PropTypes.string,
  passwordSuccess: PropTypes.string,
}
export default LoginRedux;