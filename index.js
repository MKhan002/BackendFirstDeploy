require('dotenv').config()

const express = require('express');
const app = express();

const port = process.env.PORT;


app.get('/', (req, res)=>{
    res.send("Hello world!")
})
app.get('/twitter', (req, res)=>{
    res.send("Hiteshdotcom")
})

app.listen(process.env.PORT , ()=>{
    console.log("Server is listening.")
})