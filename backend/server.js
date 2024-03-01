const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "",
    database:"cruds"
});

app.post('/login',(req,res)=>{
    const sql = "SELECT * FROM login WHERE username = ? AND password =?";
    const values = [
        req.body.email,
        req.body.password
    ]
    db.query(sql,[req.body.email, req.body.password],(err,data) => {
        if (err) return res.json("Error");
       if(data.length > 0){
        return res.json("Login Successfully")
       }else{
        return res.json("No record")
       }
    })
})

app.listen(8081, () => {
    console.log("Listening...")
})