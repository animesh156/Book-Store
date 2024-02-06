const express = require("express");
const path = require("path");
const dotenv = require('dotenv').config();
const colors = require('colors')
const cors = require('cors')
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')

connectDB();

const app = express();

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended:false}))




app.use('/books',require('./routes/api/books'))

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
