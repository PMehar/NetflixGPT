import React from 'react';
import Header from './Header';
import { useState } from 'react';

const Login = () => {
  const[isSignInForm , setIsSignInForm] = useState(true);
  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg' alt='background-img'
            />
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-75'>
          <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
          
          {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800'/>)}
          <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800'/>
          <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800'/>
          <button className='p-4 my-6 w-full bg-red-500 rounded-lg'>{isSignInForm? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already a user? Sign In Now"}</p>
        </form>
    </div>
  );
};

export default Login;