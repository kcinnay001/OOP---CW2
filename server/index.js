//Loading modules
const express                          = require('express');
const app                              = express();
const cookieParser                     = require('cookie-parser');
const bodyParser                       = require('body-parser');
const cors                             = require('cors');
const {CinemaController, cinemaRouter} = require('./Controllers/CinemaController');
const {Connection}                     = require('./Middleware/Database-mw');
const { UserController, userRouter }   = require('./Controllers/UserController');
const session                          = require('express-session');
const port                             = process.env.PORT || 3001;

require('dotenv').config();

//Initialization --> interface
class Initialize extends Connection{
    constructor(){
        super();
        this.initDb();
        this.initMiddleWare();
        this.initRoutes();
        this.start();
    }
    start(){
        app.listen(port,()=>{
            console.log('connected to port 3001')
        })
    }

    initDb(){
        this.initDbConnection();
    }

    initMiddleWare(){
        app.use(cors({
            origin:['http://localhost:3000'],
            methods:['GET','POST'],
            credentials:true
        })
        )
        app.use(cookieParser());
        app.use(express.json())
        app.use(bodyParser.urlencoded({extended:true}))
        app.use(session({
            key:'userId',
            secret:'university',
            resave:false,
            saveUninitialized:false,
            cookie:{
                expires:60*60*24
            }
        }));
    }

    initRoutes(){

        //Main Routes
        app.get('/',(req,res)=>{
            res.send('Hello World');
        })

        app.get('/cat',(req,res)=>{
            res.send('hello cat')
        })

        //Controller Routes
        app.use('/Movie', cinemaRouter);
        app.use('/User', userRouter);
    }
}

new UserController();
new CinemaController();
new Initialize();

module.exports = Initialize; 