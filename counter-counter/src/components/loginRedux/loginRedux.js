import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { Grid, Button } from "@material-ui/core";
import PropTypes from 'prop-types';


const validationSchema = yup.object().shape({
  email: yup.string().email('Email is invalid').required("Email is required"),
  password: yup.string().typeError('Must be a string').required("Password is required").min(6,'min 6 symbols')
})

const LoginRedux = ({emailInputChange, passwordInputChange, onSubmit }) => {


return(
   <Formik validationSchema={validationSchema} onSubmit={onSubmit}>
    <Form autoComplete="off">
      <Grid container direction="column" spacing={1}>
        <Grid item>
          Email:  
          <Field
            color="secondary"
            name="email"
            label="Email"
            type="email"
            onChange= {emailInputChange}
            required
          />
        </Grid>
        <Grid item>
          Password:
          <Field
            color="secondary"
            name="password"
            label="Password"
            type="password"
            onChange = {passwordInputChange}
            required
          />
        </Grid>
        <Grid item>123
        </Grid>
        <Grid item>
          <Button 
            fullWidth variant="contained" 
            color="primary" 
            type="submit">
            Sign In
          </Button>
        </Grid>
      </Grid>
    </Form>
  </Formik>
)
}
LoginRedux.propTypes ={
  emailInputChange: PropTypes.func,
  passwordInputChange: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default LoginRedux;