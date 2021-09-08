import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { Grid, Button } from "@material-ui/core";
import PropTypes from 'prop-types';


const validationSchema = yup.object().shape({
  email: yup.string().email('Email is invalid').required("Email is required"),
  password: yup.string().typeError('Must be a string').required("Password is required").min(6,'min 6 symbols')
})

const LoginRedux = ({emailChange, passwordChange, onSubmit, emailSuccess, passwordSuccess }) => {


return(
  <div>
   <Formik validationSchema={validationSchema} >
    <Form 
      
      onSubmit={onSubmit}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          Email:  
          <Field
            color="secondary"
            name="email"
            label="Email"
            type="email"
            onChange = {emailChange}
          />
        </Grid>
        <Grid item>
          Password:
          <Field
            color="secondary"
            name="password"
            label="Password"
            type="password"
            onChange = {passwordChange}
          />
        </Grid>
        <Grid item>
        </Grid>
        <Grid item>
          <Button 
            variant="contained" 
            color="primary" 
            type="submit">
            Enter
          </Button>
        </Grid>
      </Grid>
    </Form>
  </Formik>
  <div>
  <pre>
    <code>
      <strong>Your creds</strong> = {JSON.stringify(emailSuccess)}, {JSON.stringify(passwordSuccess)}
    </code>
  </pre>
  </div>
  </div>
)
}
LoginRedux.propTypes ={
  emailChange: PropTypes.func,
  passwordChange: PropTypes.func,
  onSubmit: PropTypes.func,
  emailSuccess: PropTypes.string,
  passwordSuccess: PropTypes.string
}

export default LoginRedux;