/*
Campos: 
 name
 cellphone
 img
*/ 

import { Schema, model } from "mongoose";


const providersShema = new Schema({
    name:{
        type: String,
        require: true
    },
    cellphone:{
        type: String

    },
    img:{
        type: String
    }
},{
    timestamps: true,
    strict: false
});

export default model( "providers", providersShema)