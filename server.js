const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const usersRouter = require('./Routes/users.route')



//database connection and connection

mongoose.connect(process.env.MongoDB_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.once("open", () => console.log("Database is connected and running"));

//configuring and connecting the server using express

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use('/users', usersRouter)


app.listen(5000, () => console.log("Server is listening on 5000"));
