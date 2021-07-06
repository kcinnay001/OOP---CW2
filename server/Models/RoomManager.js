class RoomManager {
    constructor(id,managerCode,userId){
        this.id = id; 
        this.managerCode = managerCode; 
        this.UserId = userId;
        this.getManagerCode();
        this.setManagerCode();
        this.getId();
        this.setId();
        this.getUserId();
        this.setUserId();
    }

    getManagerCode(){
        return this.managerCode;
    }

    setManagerCode(value){
        this.managerCode = value;
    }
    getUserId(){
        return this.UserId;
    }
    setUserId(value){
        this.UserId = value;
    }

    getId(){
        return this.id;
    }

    setId(value){
        this.id = value;
    }
}

module.exports = RoomManager;