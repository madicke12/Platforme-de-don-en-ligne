import express from "express";
import cors from "cors";
import passport from "passport";
import passportLocal from "passport-local";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import bodyParser from "body-parser";
import session from "express-session";
import mongoose from "mongoose";
import { Organisation } from "./user.js";
import { donateur } from "./user.js";
import { myfunction } from "./passport.js";

const pass = process.env["Mongo_password"]


mongoose.connect(`mongodb+srv://madicke:${encodeURIComponent(pass)}@cluster0.mdhqca8.mongodb.net/?retryWrites=true&w=majority`)
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secret code",
    resave: true,
    saveUninitialized: true
  })
);
app.use(cookieParser("secret"));


app.use(passport.initialize());
app.use(passport.session())
myfunction(passport)

//route
app.post("/register", async (req, res) => {
if (req.body.type === 'Organisation'){
  try {
    const result = await Organisation.findOne({ username: req.body.email, telephone: req.body.telephone });
    if (result) {
      res.send("User already registered");
    } else {
      const newOrga = new Organisation({
        nom_organisation: req.body.organisation,
        username: req.body.email,
        telephone: req.body.telephone,
        password: await bcrypt.hash(req.body.password,10),
        type: "organisation"
      });
  
      const resp = await newOrga.save();
      console.log(resp);
      res.send("User registered successfully");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }}
  else {
    try{
      const result = await donateur.findOne({username : req.body.email , telephone : req.body.telephone})
    if(result){
      res.send('user already exist');
    }else{
      const newDonateur = new donateur({
        nom: req.body.nom,
        prenom: req.body.prenom,
        username: req.body.email,
        telephone: req.body.telephone,
        password : await bcrypt.hash(req.body.password,10),
        type:'donateur'

      });
      const resp = await newDonateur.save();
      console.log(resp)
      res.send('user successfully registred')
    }
    }catch(err){
      throw err
    }
    
  }
  
    
  });

  app.post("/login", (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        throw err;
      }
      if (!user) {
        res.send({
          message:'Email or password incorrect',
          status: false
        });
      } else {
        req.logIn(user, err => {
          if (err) {
            throw err;
          }
          res.send({
            connected: true
          });
        });
      
  }
    })(req, res, next);
  });
  
  app.get("/user", (req, res) => {
    if (req.isAuthenticated()) {
      res.send(true);
    } else {
      res.send(false);
    }
  });

  app.get('/logout', (req, res) => {
    req.logout(()=>{
      res.send('successfuly logged out')
    });
  });

  app.get('/getUser',(req,res)=>{
    if(req.isAuthenticated()){
      res.send(req.user)
    }
    else{
      res.send('login first')
    }
  })
  
  
  
  
app.listen(8000, () => {
  console.log("server started");
});
