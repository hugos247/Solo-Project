import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export const Login = ( ) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();


    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/login`, {
            email,password
        }, { withCredentials:true, credentials: 'include' } )
        .then((res)=>{
            console.log(res);
            navigate('/bright_ideas');
        }).catch((err)=>{
            console.log(err);
        })
    }


  return (
    <form onSubmit={ submitHandler }>
        <div className="login-container">
                <h2>Logearse</h2>

                    <label htmlFor="">
                        Email
                        <input type="text" onChange={ ( e ) => setEmail( e.target.value )}/>
                    </label> <br />

                    <label htmlFor="">
                        Password
                        <input type="password" onChange={ ( e ) => setPassword( e.target.value )}/>
                    </label> <br />

                <button className="sign-in-button">Login</button>
        </div>
    </form>
  )
}
