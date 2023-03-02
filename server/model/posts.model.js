const mongoose = require('mongoose');
const { Schema } = mongoose


const PostSchema = new mongoose.Schema( 
    {
        postDescription: {
            type: String,
            required: true,
            min: 3,
            max: 300
        },
        likes: [],
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model("post", PostSchema);