const { Manager } = require('../models/manager.model')
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createManager = (request, response) => {
    console.log(request.body)
    Manager.create(request.body)
        .then(manager=> response.json(manager))
        .catch(err => response.json(err));
}

