const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sql = require("./db.js");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to web course example application." });
});

app.get("/Saar", function(req, res){
    sql.query("select * from saar", (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in getting info: " + err});
            return;
        }
        console.log("got all the info..");
        res.send(mysqlres);
        return;
    });
});

app.listen(3000, () => {
console.log("Server is running on port 3000.");
});