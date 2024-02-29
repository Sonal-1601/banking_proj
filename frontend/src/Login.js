import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function Login (){
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary'>
        <div><form action = "p-3 bg-white w-25">
            <div className = 'mb-3'><label htmlFor ="email">Email</label>
            <input type="email" placeholder ='Enter Email' className ='form-control'/>
            </div>
            <div className = 'mb-3'><label htmlFor ="password">Email</label>
            <input type="password" placeholder ='Enter Password'/>
            </div>
            <button className='btn-btn-success'>Login</button>        
            
            </form></div>
    </div>
  );
};

export default Login;
