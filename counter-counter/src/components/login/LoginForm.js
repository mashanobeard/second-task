import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';


const Login = () => {
    const validationSchema = yup.object().shape({
        email: yup.string().typeError('String').required("Is required")
    })
  return (
  <div>
      <Formik 
      initialValues={{
          email: '',
          password: ''
      }}
      validateOnBlur
      onSubmit={(values) => {console.log(values) }}
      validationSchema={validationSchema}
      >
       {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div>
              <p>
                  <label htmlFor={`email`} >Email</label> <br/>
                  <input
                   type={`text`}
                   name={`email`}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.name} />
              </p>
              {touched.name && errors.name}
              <button
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
                type={`submit`}
                >Enter</button>
          </div>
       )}  
      </Formik>
  </div>
   );
}
export default Login;