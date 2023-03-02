import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export const OneUser = (  ) => {

    const [user, setUser] = useState({});
    const { user_id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getoneuser/${user_id}`, { withCredentials: true})
        .then( ( res ) => {
            setUser( res.data );
            console.log( res.data );
        })
        .catch( ( error ) => {
            console.log( error );
        })
    }, [])
    

  return (
    <>
      <div> USUARIO </div>
      <p>{ user._id }</p>
    
    </>
  )
}
