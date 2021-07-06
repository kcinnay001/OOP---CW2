class User{
    constructor(id,loginName,password,reviewId,cinemaRoomId){
        this.id = id; 
        this.loginName = loginName; 
        this.password = password; 
        this.reviewId = reviewId; 
        this.cinemaRoomId = cinemaRoomId;
        this.getLoginName();
        this.getPassword();
        this.getId();
        this.getCinemaId();
        this.setCinemaId();
        this.getReviewId(); 
    }
    
    

    getLoginName(){
        return this.loginName;
    }

    getPassword(){
        return this.password;
    }

    getId(){
        return this.id;
    }
    setId(value){
        this.id = value;
    }
    setLoginName(value){
        this.loginName = value;
    }
    setPassword(value){
        this.password = value;
    }
    getCinemaId(){
        return this.cinemaRoomId;
    }
    getReviewId(){
        return this.reviewId;
    }
    setCinemaId(value){
        this.cinemaRoomId = value;        
    }
    setReviewId(value){
        this.reviewId = value;
    }
}


module.exports = User;