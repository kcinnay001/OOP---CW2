class CinemaRoom {
    constructor(id,roomName,seatAvaliable,movieId,roomManagerId){
        this.id = id,
        this.roomName = roomName,
        this.seatAvaliable = seatAvaliable,
        this.movieId = movieId,
        this.roomManagerId = roomManagerId
        this.getId()
        this.setId()
        this.getSeatAvaliable(),
        this.getRoomName(),
        this.setSeatAvaliable(),
        this.setRoomName();
    }

    getId(){
        return this.id;
    }

    getRoomName(){
        return this.roomName;
    }

    getSeatAvaliable(){
        return this.seatAvaliable;
    }
    
    getMovieId(){
        return this.movieId; 
    }

    getRoomManager(){
        return this.roomManagerId;
    }

    setId(id){
        this.id = id;
    }

    setRoomName(roomname){
        this.roomName = roomname;
    }

    setSeatAvaliable(seatavaliable){
        this.seatAvaliable = seatavaliable
    }

    setMovieId(movieid){
        this.movieId = movieid;
    }
    setRoomManager(roomManager){
        this.roomManagerId = roomManager; 
    }
}

module.exports = CinemaRoom;