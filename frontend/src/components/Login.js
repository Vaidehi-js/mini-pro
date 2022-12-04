import React from 'react';
import { Formik } from 'formik';
import './login.css';

const Login = () => {
  const loginSubmit = (formdata) => {
    console.log(formdata);
  }

return (

    <div className='container'>
    <div className='card'>
    <div className='card-body'>

    <Formik initialValues={{ email : '', password : ''}} onSubmit= {loginSubmit}> 
    { 
      ({values, handleChange, handleSubmit}) => (
      <form onSubmit={ handleSubmit }> 
    <h2 className='h2'> Login </h2>
    <hr /> <br />
    <label className='myinp'> Email</label>
    <input type="email" className="form-control mb-4" name="email" onChange={handleChange} value={values.email} placeholder='abc@xyyz' />
    
    <label className='myinp'>PASSWORD</label>
    <input type="password" className="form-control mb-4" name="password" onChange={handleChange} value={values.password} placeholder='abc1V123' />

    <button className='btn btn-success w-100 mt-4'> Login </button>
    </form>

      )
    }
    </Formik>
    </div>
    </div>
    </div>

  )
}
export default Login;
