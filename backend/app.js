const dotenv = require('dotenv');
const cors = require('cors');
const express =  require('express');
const connectToDb = require('./db/db');
const userRoute = require('./routes/userRoute');


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

connectToDb();
app.get('/',(req,res)=>{
    res.send('Hello World')
});
app.use('/user', userRoute);

module.exports = app;