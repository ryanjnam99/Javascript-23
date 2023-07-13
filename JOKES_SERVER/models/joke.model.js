const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup must be required."],
        minlength: [3, "Setup must be longer than 3 characters"]
    },
    punchline: {
        type: String,
        required: [true, "Where's the joke if there's no punchline."],
        minlength: [2, "Two characters are not gonna cut it."]
    }
});

const Joke = mongoose.model('Joke', JokesSchema);

module.exports = Joke;
