const mongoose = require('mongoose');
const Post = require('../model/posts.model');


// const { userId, postDescription } = req.body;
// const user = await User.findById(userId);


/* CREAR POST */
const createPost = (req, res) => {
    Post.create( req.body ).
        then( result => {
            res.json( result );
        })
        .catch( error => {
            console.log(error);
        })
}


/* OBTENER TODOS LOS POSTS */
const getPosts = (req, res) => {
    Post.find( req.body )
    .then ( (result) => {
        res.json( result );
    })
    .catch( ( error ) => {
        console.log( error );
    })
}


/*OBTENER UN POST */

const getOnePost = (req, res) => {
    Post.findById(req.params.id)
    .then ( (result) => {
        console.log(result);
        res.json(result);
    })
    .catch( (error) => {
        console.log(error);
        res.json(error)
    })
}

/* DAR LIKE */


// const likeAPost = (req, res)=>{
//     Post.updateOne({_id: req.params.id}, req.body, {runValidators:true})
//     .then((resultado)=>{
//         console.log(req.body);
//         res.json(resultado);
//     }).catch((error)=>{
//         console.log(error);
//         res.status(400).json();
//     })
// }

/* ELIMINAR UN POST */

const deleteOnePost = (req, res) => {
    Post.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}




module.exports = {
    createPost,
    getPosts,
    //likeAPost,
    getOnePost,
    deleteOnePost
}
