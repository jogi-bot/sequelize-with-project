
const express = require('express');
const externalServer = require("./server/server")
const routes = require('./routes/routes')

externalServer.use(express.json());
externalServer.use(express.urlencoded({ extended: true }))
require('dotenv').config()



externalServer.use('/api', routes)


const port = process.env.PORT
externalServer.listen(port, ()=> {
  console.log(`you are in ${port} `);
})








