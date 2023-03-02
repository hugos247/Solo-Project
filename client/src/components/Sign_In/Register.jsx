import axios from 'axios';
import { useState } from 'react';

export const Register = () => {


    const [name,setName] = useState('');
    const [alias,setAlias] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      axios.post(`http://localhost:8000/api/register`, {
          name,alias, email, password, confirmPassword
      }, 
      {
        withCredentials:true
      })
      .then(( res )=>{
          console.log( res );
        return res.data;
      }).catch((err)=>{
          console.log( err );
      })
  }

  return (
    <div className="register-container">
            <h2>Registrarse</h2>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="">
                    Name
                    <input type="text" onChange={ ( e ) => setName( e.target.value )}/>
                </label> <br />
                <label htmlFor="">
                    Alias
                    <input type="text" onChange={ ( e ) => setAlias( e.target.value )}/>
                </label> <br />
                <label htmlFor="">
                    Email
                    <input type="email" onChange={ ( e ) => setEmail( e.target.value )}/>
                </label> <br />
                <label htmlFor="">
                    Password
                    <input type="password" onChange={ ( e ) => setPassword( e.target.value )}/>
                </label> <br />
                <label htmlFor="">
                    Confirm Password
                    <input type="password" onChange={ ( e ) => setConfirmPassword( e.target.value )}/>
                </label> <br />
                <button className="sign-in-button">Register</button>
        </form>
    </div>
  )
}
