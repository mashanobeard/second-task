import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
        email: yup.string().email('Email is invalid').required("Email is required"),
        password: yup.string().typeError('Must be a string').required("Password is required").min(6,'min 6 symbols')
    })

const Login = () => {
  <div>
      <h1>Log in</h1>
      <Formik 
     initialValues={{
          email: '',
          password: ''
      }}
      validateOnBlur
      onSubmit={(values, {resetForm})=>{
          console.log(values)
          resetForm()
        }}
      validationSchema={validationSchema}
      >
    {({ 
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid, 
        handleSubmit, 
        dirty 
    }) => (
          <div>
              <p>
                  <label htmlFor='email' className="names" >Email</label> <br/>
                  <input
                  className="inputs"
                   type='email'
                   name='email'
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.email} />
              </p>
              {touched.email && errors.email && <p className="errors-message">{errors.email}</p>}
              <p>
                  <label htmlFor='password' className="names">Password</label> <br/>
                  <input
                   className="inputs"
                   type='password'
                   name='password'
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.password} />
              </p>
              {touched.password && errors.password && <p className="errors-message">{errors.password}</p>}
              <button
                className ="btn"
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
                type='submit'
                >Enter</button>
                 <pre>
                     <code>
                    <strong>Your creds</strong> = {JSON.stringify(values.email, null, 2)}, 
                    {JSON.stringify(values.password, null, 2)}
                    </code>
                </pre>
          </div>
         
       )}  
      </Formik>
        </div>
}
export default Login;