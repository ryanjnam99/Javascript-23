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

module.exports.getAllManagers = (request, response) => {
    Manager.find({})
        .then(managers=> response.json(managers))
        .catch(err => response.json(err))
}

module.exports.getManager = (request, response) => {
    Manager.findOne({_id:request.params.id})
    .then(manager => response.json(manager))
    .catch(err => response.json(err))
}

