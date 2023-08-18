var mysql = require('mysql2');




  function connection(){
    var db = mysql.createConnection({
        host: "localhost",
        user: "root",
        database : "nodejs",
        password: ""
      });

      db.connect((err)=> {
        console.log(err)
        if(err){
            console.error("Error connecting to database: " + err);
            return;
        }
        console.log("Connected data base.")
      })
      return db;
  }

  module.exports = {connection}
