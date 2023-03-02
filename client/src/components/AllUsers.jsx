import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { OneUser } from './OneUser';


export const AllUsers = () => {

  const [lista,setLista] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:8000/api/getusers', 
    {
       withCredentials: true 
    })
    .then ( (res) =>{
      console.log(res);
      setLista(res.data);
    })
    .catch( (err) => {
      console.log(err);
    })
  },[])



  return (
    <>
      <div>All users</div>
      {
        lista.map( (user, index ) =>(
          <div key={ index }>
            <p>{ user.email }</p>
            <Link to={`/one_user/${user._id}`} >Link to user</Link>
          </div>
        ))
      }
    </>
  )
}
