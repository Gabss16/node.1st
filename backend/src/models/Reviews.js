import { Schema, model } from "mongoose";


const reviewsShema = new Schema({
    commets:{
        type: String,
        require: true
    },
    rating:{
        type: Number,
        require: true,
        max: 5

    },
    
    idCostumers:{
        type: Schema.Types.ObjectId,
        ref: "Costumers",
        require : true,
        
    }
},{
    timestamps: true,
    strict: false
});

export default model( "Reviws", reviewsShema)