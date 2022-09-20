import React,{useRef} from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';


 function Signup() {
     let navigate = useNavigate();

   

const onSubmit = (e)=>{
e.preventDefault();
}



  return (
  <div className='signup'>
          <div className='container'>
              <div className='row'>
                  <div className='col-md-5 m-auto'>
                      <form className='signup_form'>
                          {/* <h3>{user.email}</h3> */}
                          <div className='form-group'>
                              <input type="email" placeholder='Enter Email' className='form-control'/>
                          </div>
                          <div className='form-group'>
                              <input type="text" placeholder='Enter Name' className='form-control'  />
                          </div>
                          <div className='form-group'>
                              <input type="password" placeholder='Enter Password' className='form-control' />
                          </div>
                          <div className='form-group text-center'>
                              <button type='submit' className='btn btn-info submit' onClick={onSubmit}>Create an Account</button>
                              {/* <button type='submit' className='btn btn-info submit' onClick={logout}>Logout</button> */}
                          </div>
                      </form>
                  </div>
              </div>
          </div>
  </div>
  )
}

export default Signup;
