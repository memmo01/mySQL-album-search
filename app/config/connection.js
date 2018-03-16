var mysql = require("mysql");


var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:""
});


connection.connect(function(err){
    if (err) throw err;
    console.log("connection at port "+ connection.threadId);
});


module.exports=connection;