import axios from 'axios';
import { useState, useEffect } from 'react';
import { CreatePost } from './CreatePost';
import { Link } from 'react-router-dom';
import { OnePost } from './OnePost';


export const AllPosts = () => {

  const [lista,setLista] = useState([]);
  const [count, setCount] = useState(0);
  

  useEffect(() =>{
    axios.get('http://localhost:8000/api/getposts', 
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
    <div>
      <CreatePost />
      <div>AllPosts</div>
      {
        lista.map( (idea, index ) =>(
          <div key={ index }>
            <p>{ idea.postDescription }</p>
            <Link to={`/one_post/${idea._id}`}> {count} People likes this</Link>
            <p>It has {count} likes</p>
            <button onClick={ () => setCount(count + 1) }> Like button </button>
            
          </div>
        ))
      }
      {/* {
        lista.map( idea =>  (
          <OnePost 
            key={ idea._id }
            idea= { idea }
          />
        ))
      } */}

    </div>
  )
}
