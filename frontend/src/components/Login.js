import React from 'react';
import { Formik } from 'formik';
import './login.css';

const Login = () => {
  const loginSubmit = (formdata) => {
    console.log(formdata);
  }

return (

    <div className='container'>
    <div className='bard' style={{backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/2048px-Circle-icons-mail.svg.png")'}}>
    <div className='card-body'>

    <Formik initialValues={{ email : '', password : ''}} onSubmit= {loginSubmit}> 
    { 
      ({values, handleChange, handleSubmit}) => (
      <form onSubmit={ handleSubmit }> 
    <h2 className='h2'> Login </h2>
    <hr /> <br />
    <label className='myinp'> Email</label>
    <input type="email" className="form-control mb-4" name="email" onChange={handleChange} value={values.email} required placeholder='abc@xyyz' />
    
    <label className='myinp'>PASSWORD</label>
    <input type="password" className="form-control mb-4" name="password" onChange={handleChange} value={values.password} required placeholder='abc1V123' />
    <br />
    <button className='button'> Login </button>
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
