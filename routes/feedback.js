const express = require('express');
const routes = express.Router();

const feedbackController = require('../Controllers/feedbackController')


routes.get('/feedback',feedbackController.index)

routes.post('/feedback', feedbackController.create)





module.exports = routes