const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const url ='mongodb+srv://learningprogram:E1841349@practice.kyuvy.mongodb.net/trainingStudio?retryWrites=true&w=majority'

const cors=require('cors');

const { spawn } = require('child_process');
const path = require('path');
const cron = require('node-cron');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true})
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const con = mongoose.connection

const DB_NAME = 'trainingStudio';
const ARCHIVE_PATH = path.join(__dirname, 'public', `${DB_NAME}.gzip`);

con.once('open' , ()=>{
    console.log('connected...')
})

app.use(express.json())

const customerRouter = require('./routes/customer')
app.use('/customer' , customerRouter)

const trainerRouter = require('./routes/trainer')
app.use('/trainer' , trainerRouter)

const blogRouter = require('./routes/blog')
app.use('/blog' , blogRouter)

const emailRouter = require('./routes/email')
app.use('/email' , emailRouter)

const generalRouter = require('./routes/general')
app.use('/general' , generalRouter)

const postRouter = require('./routes/post')
app.use('/post' , postRouter)

const adminRouter = require('./routes/admin')
app.use('/admin' , adminRouter)

const chatRouter = require('./routes/chat')
app.use('/chat' , chatRouter)

const paymentRouter = require('./routes/payment')
app.use('/payment' , paymentRouter)

const dietplanRouter = require('./routes/dietplan')
app.use('/dietplan' , dietplanRouter)

const workoutplanRouter = require('./routes/workoutSchedules')
app.use('/workoutplan' , workoutplanRouter)

const smsRouter = require('./routes/sms')
app.use('/sms' , smsRouter)


cron.schedule('0 0 * * * ', () => backupMongoDB());

function backupMongoDB() {
  const child = spawn('mongodump', [
    `--db=${DB_NAME}`,
    `--archive=${ARCHIVE_PATH}`,
    '--gzip',
  ]);

  child.stdout.on('data', (data) => {
    console.log('stdout:\n', data);
  });
  child.stderr.on('data', (data) => {
    console.log('stderr:\n', Buffer.from(data).toString());
  });
  child.on('error', (error) => {
    console.log('error:\n', error);
  });
  child.on('exit', (code, signal) => {
    if (code) console.log('Process exit with code:', code);
    else if (signal) console.log('Process killed with signal:', signal);
    else console.log('Backup is successfull ✅');
  });
}

app.listen(process.env.PORT || 9020,()=>{
    console.log('server started on 9020')
})