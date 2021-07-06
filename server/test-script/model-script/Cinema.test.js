const CinemaRoom = require('../../Models/CinemaRoom');
const MovieReview = require('../../Models/MovieReview');
const Movies = require('../../Models/Movies');
const RoomManager = require('../../Models/RoomManager');
const Showing = require('../../Models/Showing');


const newCinemaRoom  = new CinemaRoom();
const newMovieReview = new MovieReview();
const newMovies      = new Movies();
const newRoomManager = new RoomManager();
const newShowing     = new Showing();


//----------------------------------------------------------
// Cinema Room Model Unit Test -> testing gets and sets
test('testing get id from cinema room model',()=>{  
    newCinemaRoom.setId(2);
    expect(newCinemaRoom.getId()).toBe(2);
})
test('testing get seat avaliable from cinema room model',()=>{  
    newCinemaRoom.setRoomName("room A");
    expect(newCinemaRoom.getRoomName()).toBe("room A");
})
test('testing get MovieId from cinema room model',()=>{  
    newCinemaRoom.setMovieId(1);
    expect(newCinemaRoom.getMovieId()).toBe(1);
})
test('testing get room manager from cinema room model',()=>{  
    newCinemaRoom.setRoomManager(1);
    expect(newCinemaRoom.getRoomManager()).toBe(1);
})