import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true,
        default:'Anonymos'
    }
})