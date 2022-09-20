import React, {useState} from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { loginPending, loginSuccess, loginFailed } from './features/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import {userLogin} from '../src/api/userApi';


function Login() {
    const {isLoading, isAuth, error} = useSelector(state => state.login);
    const dispatch = useDispatch();
    
    let loginUrl = 'http://35.171.157.127:8000/api/v2/login'
    
    const [formData , setFormData]=useState({
        email:"",
        password:""
    })
    const onSubmit =async (e) =>{
        e.preventDefault();
        dispatch(loginPending());  
        try {      
            let config = {
                headers:{
                    'Content-Type':'application/json'
                }
            }
            let user = await axios.post('http://35.171.157.127:8000/api/v2/login',formData,config)
            console.log("User=>",user)
           // const isAuth = await userLogin({email, password});
            console.log(isAuth);
        }
         catch (error) {
            dispatch(loginFailed(error.message));  
        }

    };

    const forgotPasswordHandler = (e) => {
        e.preventDefault();
    }
    
    const updateHandler=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }


  return(
       <div className='login'>
           <div className='container'>
               <div className='row'>
                   <div className='col-md-5 m-auto'>
                       <form className='login_form'>
                          {error && <h3>{error}</h3>}
                           <div className='form-group'>
                              <input type="email" placeholder='Enter Your Email' name="email" className='form-control' onChange={(e)=>updateHandler(e)} />
                           </div>
                          <div className='form-group'>
                              <input type="password" placeholder='Enter Your Password' name="password" className='form-control' onChange={(e) => updateHandler(e)} />
                          </div>
                          <div className='form-group text-center'>
                              <button type='submit' className='btn btn-info submit hk_half' onClick={(e)=>{onSubmit(e)}}>Login</button>
                              <Link to="/signup">
                                  <button type='submit' className='btn btn-info submit hk_half'>Create Account</button>
                              </Link>
                              <span className='text_or'>OR</span>
                                  <button type='submit' className='btn btn-info submit' onClick={forgotPasswordHandler}>Forgot Password</button>
                          </div>
                       </form>
                   </div>
               </div>
           </div>
       </div>
  )
}

export default Login;
