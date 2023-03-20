const express = require('express')
const bodyParser = require('body-parser')
const https = require('https');
const ejs = require('ejs');
const exp = require('constants');

const app = express();
app.set("view engine", 'ejs');
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", function (req, res) {
    // res.send("ok");
    // res.sendFile(__dirname + "/index.html")
    // res.render("index");
    // res.render('index', { foo: 'FOO' });
    res.render('index', { myjoke: joke, creator:created_by });
    // console.log("upper get "+ joke);
});
var joke;
var created_by;
// app.post("/", function (req, res) {
    // console.log(req.body);
    const url = "https://hindi-jokes-api.onrender.com/jokes?api_key=dc8ca44ff3d3788d2dcd56823843";

    https.get(url, function (responce) {

        // console.log(responce); 
        // console.log("status" + responce.statusCode);
        // console.log(url);
        responce.on("data", function (data) {
            // console.log(data);
            let JokeData = JSON.parse(data);
            // console.log(JokeData.jokeContent);
            joke = JokeData.jokeContent;
            //  console.log(JokeData);
            // console.log(JokeData.created_by);
            created_by = JokeData.created_by;
            console.log(joke);
            // responce.rander(joke: Myjoke);

        });
        console.log("Shiva "); 
        // responce.redirect(); 
    }) 
    console.log("Shivam ");
    // res.render('index', { myjoke: joke, creator: created_by });
// }) 

app.listen(3000, function () {
    console.log("App is running on port 3000");
}); 