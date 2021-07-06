const mysql      = require('mysql');

let connection   = mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'Yolande123!',
                database:'cinemamanager',
                insecureAuth:true
            })
    
connection.connect();

class Connection {
    constructor(){
        this.initDbConnection();
    }
    initDbConnection(){
        connection  = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'Yolande123!',
            database:'cinemamanager',
            insecureAuth:true
        });    
    }
}

 

module.exports = {Connection, connection};