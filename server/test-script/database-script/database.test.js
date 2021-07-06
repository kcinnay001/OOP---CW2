const mysql      = require('mysql');

let connection   = mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'Yolande123!',
                database:'cinemamanager',
                insecureAuth:true
            })
    
connection.connect();

test('testing database connections',()=>{
    expect(connection).toBeTruthy()
})