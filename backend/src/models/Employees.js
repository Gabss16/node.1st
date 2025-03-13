import { Schema, model } from "mongoose";


const employeesShema = new Schema({
    name:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    birthday:{
        type: String

    },
    email:{
        type: String,
        require: true
    },
    adress:{
        type: String,
        require: true
    },
    hireDate:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    telephone:{
        type: String,
        require: true
    },
    dui:{
        type: String,
        require: true
    },
    isssNumber:{
        type: String,
        require: true
    },
    isVerified:{
        type: Boolean,
        require: true
    }
},{
    timestamps: true,
    strict: false
});

export default model( "Employees", employeesShema)