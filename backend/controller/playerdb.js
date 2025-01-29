const p1 = require("../dbconnections/postgrasdb");
const c1 = p1.connectionObj();


const funct1 = (req,res) => {
    console.log("Function 1 called");
    res.send("Function 1 response");
};
const funct2 = (req,res) => {
    console.log("function 2 called");
    res.send("Function 2 response");
};

const funct3 = (req,res) => {
    try
    {
        c1.query("INSERT INTO public.player1(pl_nm, pl_run, pl_country)VALUES ('parth',1900,'india');", 
            (error,result) => {
            if(error) console.log(error);
            else{
                console.log("Inserted player data succesfully");
                res.send("Inserted player data succesfully");
            }
        } );
    }
    catch
    {
        console.log("Error in function 3");
        res.status(500).send("Internal Server Error");
    }
}

const funct4 = (req,res) => {
    try
    {
        c1.query("SELECT * FROM public.player1;", (error,result) => {
            if(error) console.log(error);
            else{
                console.log("Data Fetched Succesfully !");
                res.send(result);
            }
        } );
    }
    catch
    {
        console.log("Error in function 3");
        res.status(500).send("Internal Server Error");
    }
}
const funct5 = (req,res) => {
    try
    {
        var v1 = req.body.var1; 
        var v2 = req.body.var2;
        var v3 = req.body.var3;
        c1.query("INSERT INTO public.player1(pl_nm, pl_run, pl_country)VALUES ('${v1}','${v2}','${v3}');", 
            (error,result) => {
            if(error) console.log(error);
            else{
                console.log("Inserted player data succesfully");
                res.send("Inserted player data succesfully");
            }
        } );
    }
    catch
    {
        console.log("Error in function 3");
        res.status(500).send("Internal Server Error");
    }
}

module.exports = 
{
    funct1,
    funct2,
    funct3,
    funct4,
    funct5,
}