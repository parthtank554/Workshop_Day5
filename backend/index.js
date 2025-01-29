const express = require("express");
const app = express();
const port = 4545;

const m1 = require("./controller/playerdb");
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/", (req, res) =>{
    res.send("Welcome to the Simple Rest API!...");
});

app.get("/e1", m1.funct1);
app.get("/test3/*", m1.funct5);   // this part is known as wild card...
                                  // in this line its work in url but you write test/anyonetext that's work

app.listen(port, ()=>{
    console.log(`server is running on port ${port}!...`);
});