import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    owner:{
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required:true
    },
    Likes:[{
        type: String
    }],
    Comments:[{
        type: Schema.Types.ObjectId, 
        ref: 'Comment'
    }],
    achievements:[{
        type:String
    }]
},{timestamps:true})

const Post =mongoose.models.Post ||  mongoose.model("Post",postSchema)
export default Post