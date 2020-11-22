const express = require('express');
const Cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

const API = require('./api')
const connectDB = require('./config/db')
dotenv.config({ path: 'config/config.env' })
connectDB()
const PORT = process.env.PORT || 3000;
const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
//setting middlewares
app.use(Cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(API)

app.listen(PORT, (err) => {
    if (err) {
        console.log(`server not running ${err}`);
    }
    console.log(`server running in ${process.env.NODE_ENV} on PORT:${PORT}`);
})