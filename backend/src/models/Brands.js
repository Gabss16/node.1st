/*
Campos: 
 name
 year
 slogan
 img
*/ 

import { Schema, model } from "mongoose";


const brandsShema = new Schema({
    name:{
        type: String,
        require: true
    },
    year:{
        type: String

    },
    slogan:{
        type: String

    },
    img:{
        type: String
    }
},{
    timestamps: true,
    strict: false
});

export default model( "brands", brandsShema)