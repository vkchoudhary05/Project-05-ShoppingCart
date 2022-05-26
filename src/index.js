const express = require('express');
const bodyParser = require('body-Parser');
const mongoose = require('mongoose');
const multer = require('multer')

const route = require('./routes/routes')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( multer().any())

mongoose.connect("mongodb+srv://new-user_2020:Vivek2020@cluster0.lxwkw.mongodb.net/Project05", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 5000, function (){
    console.log('Express app running on port: ' + (process.env.PORT || 5000))
});


