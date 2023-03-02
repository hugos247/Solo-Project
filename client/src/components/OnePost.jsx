import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
//import { OneUser } from "./OneUser";


export const OnePost = ( { idea } ) => {

    const [post, setPost ] = useState({});
    const [likes, setLikes] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getonepost/${id}`, { withCredentials: true})
        .then( ( res ) => {
            setPost( res.data );
            console.log( res.data );
        })
        .catch( ( error ) => {
            console.log( error );
        })
    }, [])
    
    const deletePost = () => {
        axios.delete(`http://localhost:8000/api/deletepost/${id}`, {withCredentials: true})
        .then ( (res) => {
          console.log(res);
          navigate('/bright_ideas');
        })
        .catch ( (err) => {
          console.log(err);
        })
      }

  return (
    <div>
        <div className="one-post-container">
            <p>{ post.postDescription }</p>
            <button>  Like </button>
            <p>{likes.length} Likes</p>
            <button onClick={ deletePost }>Eliminar post</button>
        </div>
        
        <div className="liked-this-post-container">
            <h3>People who liked this post</h3>
        </div>
    </div>
    
  )
}
