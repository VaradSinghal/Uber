const dotenv = require('dotenv');
const cors = require('cors');
const express =  require('express');
const connectToDb = require('./db/db');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/userRoute');
const captainRoute = require('./routes/captainRoute');


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
app.use('/captain', captainRoute);

module.exports = app;