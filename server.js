const express = require('express')

const mongoose = require('mongoose')

require('dotenv').config()




const app = express()


mongoose.connect(process.env.MongoDB_URI, {useNewUrlParser: true})

const db = mongoose.connection

db.once('open', ( )=> console.log('Database is connected and running'))




app.use(express.json())


app.listen(5000, ()=> console.log('Server is listening on 5000'))