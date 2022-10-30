const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const PORT = 3000
// config
dotenv.config({path: './config/.env'})
connectDB()

app.use(
    cors({
        origin: '*'
    }))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Routes 
app.use('/api', require('./routes/recipes'))

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('frontend/dist'))
// }

app.listen(PORT, console.log(`Running on port ${PORT}`))