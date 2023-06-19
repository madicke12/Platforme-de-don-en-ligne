import express from "express";
import cors from "cors";
import passport from "passport";
import passportLocal from "passport-local";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import bodyParser from "body-parser";
import { collection, addDoc } from "firebase/firestore";
import { database } from "./firebase.js";

import session from "express-session";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser("secret"));
app.use(
  session({
    secret: "secret code",
    resave: true,
    saveUninitialized: true,
  })
);

//route
app.post("/register", async (req, res) => {
  if (req.body.type === "Organisation") {
    try {
      const docRef = await addDoc(collection(database, "Organisations"), {
        Nom_organisation: req.body.organisation,
        Email: req.body.email,
        telephone: req.body.telephone,
        adresse: req.body.adresse,
        Date_Creation: req.body.Date_Creation,
        type: req.body.type,
        password: req.body.password,
      });
      console.log("User ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } else{
    try {
      const docRef = await addDoc(collection(database, "Donateur"), {
        Nom: req.body.Nom,
        Prenom: req.body.Prenom,
        Email: req.body.email,
        telephone: req.body.telephone,
        type: req.body.type,
        password: req.body.password,
      });
      console.log("User ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // console.log(req.body)
});

app.post("/login", (req, res) => {
  console.log(req.body);
});

app.listen(8000, () => {
  console.log("server started");
});
