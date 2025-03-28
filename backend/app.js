const dotenv = require('dotenv');
const cors = require('cors');
const express =  require('express');
const connectToDb = require('./db/db');
const userRoute = require('./routes/userRoute');
const cookieParser = require('cookie-parser');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

connectToDb();
app.get('/',(req,res)=>{
    res.send('Hello World')
});
app.use('/user', userRoute);

module.exports = app;