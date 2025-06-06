import { Schema, model } from "mongoose";


const faqsShema = new Schema({
    question:{
        type: String,
        required: true,
        minLenght: 4,
        maxLenght: 500,
        trim: true 
    },
    answer:{
        type: String,
        required: true,
        minLenght: 4,
        maxLenght: 500,
        trim: true 
    },

    level:{
        type: Number,
        min: 1,
        max: 10,
        required: true,
        trim: true
    },
    isActive:{
        type: Boolean,
        required: true,
        default: true
    }
},{
    timestamps: true,
    strict: false
});

export default model( "Faqs", faqsShema)