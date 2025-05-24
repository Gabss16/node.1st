import { Schema, model } from "mongoose";


const branchesShema = new Schema({
    name:{
        type: String,
        require: true
    },
    address:{
        type: String

    },
    telephone:{
        type: String
    },
    schedule:{
        type: String
    }
},{
    timestamps: true,
    strict: false
});

export default model( "Branches", branchesShema)