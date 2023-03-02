const PostController = require('../controller/posts.controller');
const { authenticate } = require('../config/jwt.config');


module.exports = (app) =>{
    app.post('/api/createpost', authenticate ,PostController.createPost);
    app.get('/api/getposts', authenticate ,PostController.getPosts); 
    app.get('/api/getonepost/:id', authenticate ,PostController.getOnePost);
    //app.put('/api/likeapost/:id', authenticate ,PostController.likeAPost);
    app.delete('/api/deletepost/:id', authenticate, PostController.deleteOnePost);
}

