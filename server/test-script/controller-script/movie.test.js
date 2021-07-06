//Testing some routes from the cinema controller
const cinemaRouter = require('express').Router();
const Movies       = require('../../Models/Movies');
const newMovie     = new Movies();
const mysql        = require('mysql');

let connection     = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Yolande123!',
    database:'cinemamanager',
    insecureAuth:true
})

connection.connect();
//adding a movie 

test('adding a movie to the database',()=>{
     cinemaRouter.post('/add',(req,res)=>{
        newMovie.setMovieName('avengers');
        newMovie.setDuration('20min');
        newMovie.setId(null)
        console.log(newMovie)

        const addMovieQuery = `insert into movies value(${newMovie.getId()},null,null,'${newMovie.getMovieName()}','${newMovie.getDuration()}')`;
        const deleteQuery = `delete from movies where movieName = ${newMovie.getMovieName()}`
        connection.query(addMovieQuery,(err,result)=>{
            expect(result).toBeTruthy();
            connection.query(deleteQuery);
        });
    })
})