const Movies = require("./Movies");

class MovieReview{
    constructor(id,Review,MovieId,UserId){
        this.id = id;
        this.Review = Review;
        this.MovieId = MovieId;
        this.UserId = UserId; 
        this.getReview();
        this.setReview();
        this.getId();
        this.getReview();
        this.getMovieId();
        this.getUserId();
        this.setReview();
        this.setMovieId();
        this.setUserId();
        this.setId();
    }

    getId(){
        return this.id; 
    }
    getReview(){
        return this.Review; 
    }
    getMovieId(){
        return this.MovieId; 
    }
    getUserId(){
        return this.UserId; 
    }
    setReview(value){
        this.Review = value;
    }
    setMovieId(value){
        this.MovieId = value;
    }
    setUserId(value){
        this.UserId = value;
    }
    setId(value){
        this.id = value;
    }
    setReview(review){
        this.Review = review
    }
}

module.exports = MovieReview;