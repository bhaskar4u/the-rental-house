const express = require('express');
const Cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')

const { AddUser } = require('./controller/createUser')
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

app.post('/reg', AddUser)

app.listen(PORT, (err) => {
    if (err) {
        console.log(`server not running ${err}`);
    }
    console.log(`server running in ${process.env.NODE_ENV} on PORT:${PORT}`);
})