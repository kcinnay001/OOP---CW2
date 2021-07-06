class Movies {
    constructor(id,MovieName,Duration,ShowingID,MovieReviewId){
        this.id = id;
        this.MovieName = MovieName;
        this.Duration = Duration; 
        this.ShowingID = ShowingID; 
        this.MovieReviewId = MovieReviewId;
        this.getMovieName();
        this.getDuration();
        this.setMovieName();
        this.setDuration();
    }

    getId(){
        return this.id;
    }
    setId(id){
         this.id = id;
    }

    getMovieName(){
        return this.MovieName;
    }

    getDuration(){
        return this.Duration;
    }

    setMovieName(movieName){
        this.MovieName = movieName;
    }

    setDuration(duration){
        this.Duration = duration; 
    }

}

module.exports = Movies;