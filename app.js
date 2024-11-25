const express = require('express')
const app = express();
const path = require('path')
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs")
app.get('/', (req, res)=>{
    res.render("index")
})

app.listen(process.env.PORT);