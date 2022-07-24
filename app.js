require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('config');

const indexRouter = require('./src/routes/index');
const userRouter = require('./src/routes/user.router');
const mongoConnectionString = config.get('database.host')
const app = express();

const mongoose = require('mongoose');
mongoose
  .connect(mongoConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to MONGODB")) //esto se puede evitar, es solo para saber que se realizo la conexion
  .catch((err) => {
    console.error(err);
    throw err;
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', userRouter);

module.exports = app;