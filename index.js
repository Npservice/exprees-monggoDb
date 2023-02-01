import  Express  from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Route from "./routes/dataRouter.js";
import layouts from "express-ejs-layouts";
import fileUpload from "express-fileupload";
import flash from "express-flash";
import session from "express-session";
import cookieParser from "cookie-parser";

const port = 3000;
const app =  Express();
mongoose.connect('mongodb://localhost:27017/surat',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.set('view engine','ejs')
const db = mongoose.connection;
db.on('error',(error) => console.log(error));
db.once('open',() => console.log(`Database Conected....`));
app.use(fileUpload());
app.use(cookieParser('secret'));
app.use(session({
    cookie: {maxAge:600000},
    saveUninitialized: true,
    resave: true,
    secret: 'secret'
}));
app.use(flash());
app.use(cors());
app.use(layouts);
app.use(Express.static('public'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(Route);


// app.listen(port,()  => console.log(`Server running on ${port}`))
app.listen(port, '0.0.0.0', ()=>{
    console.log(`Listening port on ${port}`)
});