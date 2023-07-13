const Joke = require('../models/joke.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allDaJokes) => {
            res.json({ jokes: allDaJokes })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => {
            res.json({ joke: oneJoke })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({ joke: newJoke })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findJokeAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.deleteAnExistingJoke = (req, res) => {
    User.deleteJoke({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });
}
