
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    post:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Post'
    },
},{timestamps:true})

const Comment =mongoose.models.Comment ||  mongoose.model("Comment",commentSchema)
export default Comment