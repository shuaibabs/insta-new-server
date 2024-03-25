const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

let Cred = require('./cred.model');

app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://mhshuaibabbasi:4AXOBiZjUQ7pInsc@cluster0.q6nznmw.mongodb.net/";
mongoose.connect(uri, ) //{useUnifiedTopology: true, useNewUrlParser: true}
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB DataBase Connection Established Successfully")
})

todoRoutes.route('/').get(function(req, res){
    Cred.find()
    .then(result => {
        console.log(result);
        res.json(result);
    })
    .catch(error => {
        // Handle error
        console.log(error);
      });
});


todoRoutes.route('/add').post(function(req, res){
    let cred = new Cred(req.body);
    console.log(JSON.stringify(cred))
    cred.save()
        .then(cred => {
            res.status(200).json({'cred' : 'cred added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new cred Failed');
        });
});


app.use('/instagram', todoRoutes);

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});