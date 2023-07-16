const ManagerController = require('../controllers/manager.controller');
module.exports = function(app){
    app.get('/api', ManagerController.index);
    app.post('/api/products', ManagerController.createManager);
    app.get('/api/products', ManagerController.getAllManagers);
    app.get('/api/products/:id', ManagerController.getManager);
    app.put("/api/products/:id", ManagerController.updateManager);
    app.delete('/api/products/:id', ManagerController.deleteManager);
}

