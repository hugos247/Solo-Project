const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 3,
            max: 30
        },
        alias: {
            type: String,
            required: true,
            min: 3,
            max: 30
        },
        email: {
            type: String,
            required: true,
            unique: true,
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Por favor ingresa una direccion de correo valida"
        },
        password: {
            type: String,
            required: true,
            min: 8
        }
    }, 
    {timestamps: true}
);

//middleware
UserSchema.pre('save', async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password, 10);
        console.log(" HASHED CONTRASENIA", hashedPassword);
        this.password = hashedPassword;
        next();
    }catch{
        console.log("Error en guardar usuario", error);
    }
})



module.exports =  mongoose.model("usuario", UserSchema);