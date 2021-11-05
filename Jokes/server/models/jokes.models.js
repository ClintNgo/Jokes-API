const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type:String,
        required: [true,"set up of a joke is required."],
        minlength: [10,"set up of a joke is required to have at-least ten characters."]
    },
    punchline: {
        type:String,
        required: [true,"punchline of a joke is required."],
        minlength: [3,"punchline of a joke is required to have at-least three characters."]
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
