const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
        trim: true 
    },
    desc: {
        type: String,
        required: true,
        trim: true,
        maxlength: 2000
    },
    q_type: {
        type: Number,
        required: true
    },
    }
);
const QuestionSet = mongoose.model("questionSchema", questionSchema);

const formDBSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    question_set: {
        type: [{
            type:String
        }],
    },
},    {timestamp: true}

);

const Form = mongoose.model("Form", formDBSchema);

module.exports = {QuestionSet, Form};


