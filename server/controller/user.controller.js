const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
const { log } = console;

module.exports = {

    registerUser: async (req, res) =>{
        try{
            const nuevoUsuario = await User.create(req.body);
            const userToken = jwt.sign({_id:nuevoUsuario._id}, SECRET_KEY);
            res.status(201).cookie('userToken', userToken, {httpOnly:true, expires:new Date(Date.now() + 9000000)})
            .json({successMessage:"Usuario registrado ", user:nuevoUsuario});

        }catch(error){
            res.status(401).json(error);
            log(error);
        }
    },

    loginUser: async (req, res)=>{
        const user = await User.findOne({email:req.body.email});
        console.log(" El usuario que intenta ingresar es:", user );
        if(!user){
            res.status(400).json({error: "Email/Password incorrecto"});
        }
        try{
            const passwordValida = await bcrypt.compare(req.body.password, user.password );
            console.log(passwordValida, " PASSWORD VALIDA");
            if(!passwordValida){
                res.status(400).json({error: "Email/Password incorrecto"});
            }else{
             const userToken = jwt.sign( {_id:user._id }, SECRET_KEY);
             res.status(202).cookie('userToken', userToken, {httpOnly:true, expires:new Date(Date.now() + 900000)}).json( { successMessage: 'Usario logeado', user: user } );
            }

        }catch(error){
            res.status(400).json({error: "Email/Password incorrecto"});
            log( error );
        }
    },
    logOutUser:(req,res)=>{
        res.clearCookie('userToken');
        res.json( { success:'Usuario salio' } );
    },

    getOneUser: (req, res) => {
        const { id } = req.params;
        User.findById( id ).
        then( ( result ) => {
            res.json( result );
        })
        .catch( ( error ) => {
            console.log( error );
        })
    },

    getUsers: (req, res) => {
        User.find( req.body )
        .then ( ( result ) => {
            res.json( result );
        })
        .catch( ( error ) => {
            console.log( error );
        })
    }

    

}