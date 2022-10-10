const express = require('express');
const cors = require('cors')


const feedbackRoute = require('./routes/feedback')


const app = express();

const port = process.env.PORT || 3000


app.use(cors())

app.use(express.json());


app.use('https://challangezenbitapi.herokuapp.com/', feedbackRoute)



app.listen(port,()=> console.log('Server is runing 🚀'))