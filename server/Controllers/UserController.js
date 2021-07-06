const userRouter     = require('express').Router();
const bcrypt         = require('bcrypt');
const { connection } = require('../Middleware/Database-mw');
const User           = require('../Models/User');

class UserController{
    constructor(){
        this.initRoutesGet()
        this.initRoutesPost()
    }

    initRoutesPost(){
        

        //adding user
        userRouter.post('/add/user',(req,res)=>{
            const newUser = new User();
            newUser.setId(null);
            newUser.setLoginName(req.body.username);
            newUser.setPassword(req.body.password);
            newUser.setCinemaId(null);
            newUser.setReviewId(null);
            bcrypt.hash(newUser.getPassword(),10,(err,hash)=>{
                connection.query(`insert into users value(
                    null,
                    null,
                    null,
                    '${newUser.getLoginName()}',
                    '${hash}'
                    )`,
                    (err,result)=>{
                    if(err){
                        res.send(err)
                        return;
                    }
                    res.send(result)
                });
            })
        })
    }

    initRoutesGet(){
        userRouter.post('/get/user',async(req,res)=>{
            const foundUser = new User();
            foundUser.setLoginName(req.body.username);
            foundUser.setPassword(req.body.password);
            
            const sqlQuery = `select * from users where loginName = '${foundUser.loginName}'`;
            connection.query(sqlQuery,async(err,result)=>{
                if(result.length > 0){

                    try{

                        if(await bcrypt.compare(foundUser.getPassword(),result[0].userPassword)){
                            res.send({message:'success'})
                        } else {
                            res.send({message:'password invalid'})
                        }
                        
                    } catch (err){
                        res.send({message:'error has occured'})
                    }
                       
                } else {
                    res.send({message:'username does not exist'})
                }
               
            })
            
            
        })
    }
}


module.exports = {UserController,userRouter}