const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mysql =require("mysql2");
const connect = express();
connect.use(cors());
connect.use(bodyparser.json());
connect.use(express.json());
connect.use(express.static('public'));
connect.use(bodyparser.urlencoded({extended:true}));
let databaseconnection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Rofica17caty",
    database:"cake"
})

databaseconnection.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Database connected successfully");
    }
})


connect.post('/signup',(request,response)=>{
    let {name,email,password} = request.body
    let sql= 'insert into users(name,email,password) values(?,?,?)'
    databaseconnection.query(sql,[name,email,password],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
            console.log("ok")
        }
    })
})

connect.post('/login', (request, response) => {
    let { email, password } = request.body;

    
    let sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    databaseconnection.query(sql, [email, password], (error, result) => {
        if (error) {
            response.send({ "status": "error" });
            console.log(error);
        } else {
            if (result.length > 0) {
                
                response.send({ "status": "success", "message": "Login successful", "user": result[0] });
                console.log("Login success");
            } else {
                
                response.send({ "status": "failed", "message": "Invalid email or password" });
                console.log("Invalid login");
            }
        }
    });
});



connect.listen(5140, () => {
    console.log("Server running on http://localhost:5140");
});