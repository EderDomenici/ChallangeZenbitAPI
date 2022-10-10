const express = require('express');
const routes = express.Router();

const feedbackController = require('../Controllers/feedbackController')


routes.get('/',feedbackController.index)

routes.post('/', feedbackController.create)





module.exports = routes