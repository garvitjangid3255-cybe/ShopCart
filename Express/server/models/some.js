import mongoose from "mongoose";

const someSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true 
    }
},{
    timestamps:true
})

const Data = mongoose.model('some',someSchema);

export default Data