import mongoose from "mongoose";
const Schema=mongoose.Schema;

const authenticate=new Schema({
    uname:{
        type:String,
        required:true
    },
    pwd:{
        type:String,
        required:true
    },
});
export default mongoose.model('userfhlogins',authenticate);
                        //collection name, variable