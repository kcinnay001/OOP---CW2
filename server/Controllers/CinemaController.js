const cinemaRouter             = require('express').Router();
const Movies                   = require('../Models/Movies');
const Showing                  = require('../Models/Showing');
const CinemaRoom               = require('../Models/CinemaRoom');
const MovieReview              = require('../Models/MovieReview');
const {Connection, connection} = require('../Middleware/Database-mw')
const RoomManager              = require('../Models/RoomManager');



//Interface --> a bunch functions 

class CinemaController extends Connection{
    constructor(){
        super();
        this.initRoutesPost();
        this.initRoutesGet();
        this.initRoutesPut();
        this.initRoutesDelete();
    }

    initRoutesPost(){
        this.initDbConnection();
        //get route test
        cinemaRouter.get('/test',(req,res)=>{
          
            res.send('cat');

        })

        //Add a movie
        cinemaRouter.post('/add',(req,res)=>{

            //console.log(req.body.duration)
            let newMovie = new Movies();

            newMovie.setMovieName(req.body.movieName);
            newMovie.setDuration(req.body.duration);
            newMovie.setId(null)
            console.log(newMovie)

            const addMovieQuery = `insert into movies value(${newMovie.getId()},null,null,'${newMovie.getMovieName()}','${newMovie.getDuration()}')`;
            connection.query(addMovieQuery,(err,result)=>{
                res.send(result)
            });
        })

        //Add a showing
        cinemaRouter.post('/add/show',(req,res)=>{

            const selectCinmeaId = `select id from cinemarooms where roomName ='${req.body.cinemaId}'`;

            const selectMovieId  = `select id from cinemarooms where roomName ='${req.body.movieId}'`;

            connection.query(selectCinmeaId,(err,resultCinemaId)=>{
                connection.query(selectMovieId,(err,resultMovieId)=>{
                    const newShowing = new Showing()
                    newShowing.setShowingTime(req.body.time)
                    newShowing.setCinemaId(null)
                    newShowing.setMovieId(null)
                    newShowing.setDay(req.body.day)
                    newShowing.setId(null)

                    const addShow = `insert into showing value(null,
                        '${newShowing.getShowingTime()}',
                         ${newShowing.getCinemaId()},
                         ${newShowing.getMovieId()},
                        '${newShowing.getDay()}'
                        )`;

                    console.log(addShow)
                    connection.query(addShow);
                })
                res.send('done')
            })

            

            
        })


        //Add cinema room name
        cinemaRouter.post('/add/room',(req,res)=>{
            let newCinemaRoom = new CinemaRoom();
            newCinemaRoom.setId(null);
            newCinemaRoom.setMovieId(null);
            newCinemaRoom.setSeatAvaliable(req.body.seatAvaliable);
            newCinemaRoom.setRoomName(req.body.name);
            newCinemaRoom.setRoomManager(null);
 
            const cinemaRoomQuery = `insert into cinemarooms value(
                 ${newCinemaRoom.getId()},
                 ${newCinemaRoom.getMovieId()},
                 ${newCinemaRoom.getRoomManager()},
                '${newCinemaRoom.getRoomName()}',
                '${newCinemaRoom.getSeatAvaliable()}')`

             connection.query(cinemaRoomQuery)
            // console.log(cinemaRoomQuery)
        });

        //Add Movie Review 
        cinemaRouter.post('/add/review',(req,res)=>{

            const newMovieReview = new MovieReview();

            newMovieReview.setMovieId(null);
            newMovieReview.setReview(req.body.review);
            newMovieReview.setId(null);
            newMovieReview.setUserId(null);


            const cinemaReviewQuery = `insert into moviereview value(
                null,
                ${newMovieReview.getMovieId()},
                ${newMovieReview.getUserId()},
                '${newMovieReview.getReview()}'
            )`
            connection.query(cinemaReviewQuery,(err,response)=>{
                res.send(response);
                console.log(cinemaReviewQuery)
            })
        })
        
        //Add a manager 
        cinemaRouter.post('/add/manager',(req,res)=>{
            connection.query(`select id from Users where loginName = '${req.body.loginName}'`,(err,result)=>{
                const newManager = new RoomManager()
                newManager.setId(null)
                newManager.setManagerCode(req.body.managerCode)
                newManager.setUserId(result[0].id)

            const addManagerQuery = `insert into roommanager value(${newManager.getId()},${newManager.getUserId()},${newManager.getManagerCode()})`;
            connection.query(addManagerQuery,(err,response)=>{
                res.send(response)
            })
            })
        }) 
    }

    initRoutesGet(){

                //get movie
                cinemaRouter.get('/get/Movie',(req,res)=>{
                    const getAllMovies = "select * from movies";
                    connection.query(getAllMovies,(err,r)=>{
                        res.send(r)
                    });
                })

                //get CinemaRoom 
                cinemaRouter.get('/get/CinemaRoom',(req,res)=>{
                    const getMovieQuery = `select * from cinemaRooms`
                    connection.query(getMovieQuery,(err,result)=>{
                        res.send(result)
                    })
                })
                //get Showing 
                cinemaRouter.get('/get/showing',(req,res)=>{
                    const getShowingQuery = `select * from showing`
                    connection.query(getShowingQuery,(err,result)=>{
                        res.send(result)
                    })
                })
                //get RoomManager 
                cinemaRouter.get('/get/RoomManager',(req,res)=>{
                    const getRoomManagerQuery = `select * from roommanager`
                    connection.query(getRoomManagerQuery,(err,result)=>{
                        res.send(result)
                    })
                })
                //get MovieReview 
                cinemaRouter.get('/get/MovieReview',(req,res)=>{
                    const getMovieReviewQuery = `select * from MovieReview`
                    connection.query(getMovieReviewQuery,(err,result)=>{
                        res.send(result)
                    })
                })
    }

    initRoutesPut(){

        //update movie
        cinemaRouter.put('/update/Movie/',(req,res)=>{
            const movieValue = req.body.movieValue;
            const movieOption = req.body.movieOption;
            const movieIndex = req.body.movieIndex;
            console.log(movieValue);
            console.log(movieOption);
            console.log(movieIndex);
            const sqlUpdate = `update movies set ${movieOption} = '${movieValue}' where id = ${movieIndex}`
            connection.query(sqlUpdate,(err,result)=>{
                if(err){
                    console.log(err)
                    return;
                }
                res.send(result)
            })
        })

        //update cinemaRoom
        cinemaRouter.put('update/Movie/CinemaRoom',(req,res)=>{
            console.log('hitting this route');
            const CinemaRoomValue = req.body.CinemaRoomValue;
            const CinemaRoomOption = req.body.CinemaRoomOption;
            const CinemaRoomIndex = req.body.CinemaRoomIndex;
            const sqlUpdate = `update cinemaRooms set ${CinemaRoomOption} = '${CinemaRoomValue}' where id = ${CinemaRoomIndex}`
            console.log(sqlUpdate)
            connection.query(sqlUpdate,(err,r)=>{
                res.json(r)
            })
        })

        //update review
        cinemaRouter.put('/update/Movie/review',(req,res)=>{
            const MovieReviewValue = req.body.MovieReviewValue;
            const reviewIndex = req.body.reviewIndex;
            const sqlUpdate = `update MovieReview set review = '${MovieReviewValue}' where id = ${reviewIndex}`
            connection.query(sqlUpdate)
        })

        //update Showing
        cinemaRouter.put('/update/Movie/Showing',(req,res)=>{
            const ShowTimeValue = req.body.ShowTimeValue;
            const ShowTimeOption = req.body.ShowTimeOption;
            const ShowTimeIndex = req.body.ShowTimeIndex;
            const sqlUpdate = `update Showing set ${ShowTimeOption} = '${ShowTimeValue}' where id = ${ShowTimeIndex}`
            connection.query(sqlUpdate)
        })
    }



    initRoutesDelete(){
        //remove movie
        cinemaRouter.delete('/delete/Movie/:movieName',(req,res)=>{
            const moviename = req.params.movieName;
            const sqlDelete = `delete from movies where moviename = '${moviename}'`
            connection.query(sqlDelete, (err,result)=>{
                if(err){
                    console.log(err)
                    return;
                }
                res.send(result)
                
            })
        })

        //remove CinemaRoom
        cinemaRouter.delete('/delete/Movie/:roomId',(req,res)=>{
            const roomId = req.params.Id;
            const sqlDelete = `delete from CinemaRooms where Id = ${roomId}`
            connection.query(sqlDelete, (err,result)=>{
                if(err){
                    console.log(err)
                    return;
                }
                res.send(result)
            })
        })

        //remove review
        cinemaRouter.delete('/delete/Movie/:review',(req,res)=>{
            const review = req.params.review;
            const sqlDelete = `delete from moviereview where review = '${review}'`
            connection.query(sqlDelete, (err,result)=>{
                if(err){
                    console.log(err)
                    return;
                }
                res.send(result)
            })
        })
        //remove RoomManager
        cinemaRouter.delete('/delete/Movie/:RoomManagerId',(req,res)=>{
            const name = req.params.RoomManagerId;
            connection.query(`select * from Users where id = '${name}'`,(err,result)=>{
                const sqlDelete = `delete from roommanager where id = '${result}'`
                connection.query(sqlDelete, (err,result)=>{
                    if(err){
                        console.log(err)
                        return;
                    }
                    res.send(result)
                })
            })
         
        })
        //remove Showing
        cinemaRouter.delete('/delete/Movie/:Showing',(req,res)=>{
            const time = req.params.Showing;
            const sqlDelete = `delete from Showing where ShowingTime = '${time}'`
            connection.query(sqlDelete, (err,result)=>{
                if(err){
                    console.log(err)
                    return;
                }
                res.send(result)
            })
        })

    }
}

module.exports = {CinemaController , cinemaRouter}; 