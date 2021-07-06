class Showing {
    constructor(id,showingTime,MovieID,CinemaRoomID,day){
        this.id = id;
        this.showingTime = showingTime;
        this.MovieID = MovieID;
        this.day = day;
        this.getId()
        this.getDay();
        this.getShowingTime();
        this.getMovieId();
        this.getCinemaId();
        this.setShowingTime();
        this.setId()
        this.setMovieId();
        this.setCinemaId();
        this.setDay();
    }

    getId(){
        return this.id;
    }
    setId(value){
        this.id = value
    }   

    getShowingTime(){
        return this.showingTime;
    }
    getMovieId(){
        return this.MovieID; 
    }
    getCinemaId(){
        return this.cinemaId;
    }
    getDay(){
        return this.day;
    }
    setShowingTime(showingtime){
        this.showingTime = showingtime; 
    }
    setMovieId(movieId){
        this.MovieID = movieId; 
    }
    setCinemaId(cinemaId){
        this.cinemaId = cinemaId; 
    }
    setDay(day){
        this.day = day;
    }
}

module.exports = Showing;