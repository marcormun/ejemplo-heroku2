//Iniciamos dependencias
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston')

//iniciamos app
const app = express();
app.use(morgan('combined', {stream: logger.stream}));
app.use(express.json());

//Routing
const router = require('./router.js');
app.use(router);

//definimos puerto
const PORT = process.env.PORT || 3000;
let fecha = new Date();


app.listen(PORT,()=>console.log(`Server started at port ${PORT} -- ${fecha}`.bgBrightYellow));
app.get('/',(req,res)=> res.send('Bienvenidos'));
