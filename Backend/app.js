const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const url ='mongodb+srv://learningprogram:E1841349@practice.kyuvy.mongodb.net/trainingStudio?retryWrites=true&w=majority'

const cors=require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true})
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const con = mongoose.connection

con.once('open' , ()=>{
    console.log('connected...')
})

app.use(express.json())

const customerRouter = require('./routes/customer')
app.use('/customer' , customerRouter)

const trainerRouter = require('./routes/trainer')
app.use('/trainer' , trainerRouter)

app.listen(9020,()=>{
    console.log('server started on 9020')
})