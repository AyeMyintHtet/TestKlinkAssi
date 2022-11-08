import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import { LoginCom } from 'theme/login'

import Icon from 'assets'
import { TextCom } from 'components';


const Login = () => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });




  return (
    <LoginCom>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 info">
            <div>
            <img className='img-fluid' src={Icon.logo} alt="" />
            </div>
            <div className='profile'>
              <div className='d-flex gap-2'>
                <img className='img-fluid' src={Icon.star} alt="" />
                <img className='img-fluid' src={Icon.star} alt="" />
                <img className='img-fluid' src={Icon.star} alt="" />
                <img className='img-fluid' src={Icon.star} alt="" />
                <img className='img-fluid' src={Icon.star} alt="" />
              </div>
                <p>
                  KLink has saved us thousands of hours of work. We’re able to spin up projects and features much faster.
                </p>
                  <div>
                    <img className='img-fluid' src={Icon.avatar} alt="" />
                  </div>
                  <div>
                <p>Lori Bryson</p>
                <p>Product Designer, Sisyphus</p>
                  </div>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <p>© klinkenterprise.com</p>
              <p>help@klinkenterprise.com</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="formDiv">
              <div className='d-flex justify-content-center align-items-center flex-column w-100'>
              <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <h1>Log in</h1>
            <TextCom className='mb-4'>Welcome back! Please enter your details.</TextCom>  
            <div className="form">
           {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
              <TextCom size='sm' className='mb-2'>Email</TextCom>
              {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter your email"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                 {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                 <TextCom size='sm' className='mb-2'>Password</TextCom>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter your password"
                  className="form-control"
                />
                 {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Sign in</button>
              </form>
            </div>
          </div>
        )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        </div>
    </LoginCom>
  )
}

export default Login