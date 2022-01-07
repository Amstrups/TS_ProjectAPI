const app = require('express')();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

const PORT = 8080;

app.use(bodyParser.json())

//Routes
const companyRoutes = require('./routes/companies')

app.use('/Companies', companyRoutes)

//MongoDB
mongoose 
 .connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
     })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

//Run application
app.listen(PORT)