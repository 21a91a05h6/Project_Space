import mongoose from "mongoose";
const Schema=mongoose.Schema;

const maininfo=new Schema({
    mid:{
        type:String,
        required:true
    },
    material:{
        type:String,
        required:true
    },
    cap:{
        type:String,
        required:true
    },
    clg:{
        type:String,
        required:true
    },
    itype:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    ldate:{
        type:String,
        required:true
    },
    ndate:{
        type:String,
        required:true
    },
    works:{
        type:String,
        required:true
    },
    remarks:{
        type:String,
        required:true
    }
});
export default mongoose.model('maintenancedata',maininfo);
                        //collection name, variable