import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';





export const CreatePost = () => {

    const [postDescription, setPostDescription] = useState('');
    const navigate = useNavigate();
    

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:8000/api/createpost`,
        {
            postDescription
        }, 
        {
            withCredentials: true
        })
        .then ( ( res ) => {
            console.log('Llega por then', res);
            navigate(`/bright_ideas`);
        })
        .catch( ( err ) => {
            console.log('Llega por catch', err);
        })
    }


  return (
    <div className="create-idea-container">
        <form onSubmit={ handleSubmit }>
            <label>
                Write an Idea! <br />
                <input type="text" onChange={ event => setPostDescription(event.target.value)} />
            </label>
            <button>Post idea!</button>
        </form>
    </div>
  )
}
