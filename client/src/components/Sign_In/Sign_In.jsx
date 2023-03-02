import axios from 'axios';
import { useState } from 'react';
import { Login } from './Login';
import { Register } from './Register';


export const SignIn = () => {


  return (
    <div className="container-sign-in">
      <Register />
      <Login />
    </div>
  )
}
