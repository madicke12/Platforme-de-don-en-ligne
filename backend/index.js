import express from "express";
import cors from "cors";
import passport from "passport";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import bodyParser from "body-parser";
import session from "express-session";
import mongoose from "mongoose";
import { Organisation, Projet } from "./schema.js";
import { Donateur } from "./schema.js";
import { myfunction } from "./passport.js";
import { Demande } from "./schema.js";

const pass = process.env["Mongo_password"];

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "../Don_en_ligne/src/assets");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

mongoose
  .connect(
    `mongodb+srv://madicke:${encodeURIComponent(
      pass
    )}@cluster0.mdhqca8.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("MongoDB Connected successfully"))
  .catch((err) => {
    console.log(err);
  });


const app = express();

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
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
    saveUninitialized: true,
  })
);
app.use(cookieParser("secret"));

app.use(passport.initialize());
app.use(passport.session());
myfunction(passport);

// Register route
app.post("/register", async (req, res) => {
  try {
    const { type, email, telephone, password } = req.body;

    if (type === "Organisation") {
      const result = await Organisation.findOne({
        username: email,
        telephone: telephone,
      });
      if (result) {
        res.send("User already registered");
      } else {
        const newOrga = new Organisation({
          nom_organisation: req.body.organisation,
          username: email,
          telephone: telephone,
          password: await bcrypt.hash(password, 10),
          type: "organisation",
        });

        await newOrga.save();
        res.send("User registered successfully");
      }
    } else {
      const result = await Donateur.findOne({
        username: email,
        telephone: telephone,
      });
      if (result) {
        res.send("User already exists");
      } else {
        const newDonateur = new Donateur({
          nom: req.body.nom,
          prenom: req.body.prenom,
          username: email,
          telephone: telephone,
          password: await bcrypt.hash(password, 10),
          type: "donateur",
        });

        await newDonateur.save();
        res.send("User registered successfully");
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while registering the user");
  }
});

// Login route
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      throw err;
    }
    if (!user) {
      res.send({
        message: "Email or password incorrect",
        status: false,
      });
    } else {
      req.logIn(user, (err) => {
        if (err) {
          throw err;
        }
        res.send({
          connected: true,
        });
      });
    }
  })(req, res, next);
});

// User route
app.get("/user", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(true);
  } else {
    res.send(false);
  }
});

// Logout route
app.get("/logout", (req, res) => {
  req.logout(() => {
    res.send("Successfully logged out");
  });
});

// Get user route
app.get("/getUser", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(req.user);
  } else {
    res.send("Login first");
  }
});

// create project route


app.post('/creer',  async(req, res) => {
 const { Montant ,categorie ,nom ,description ,image} = req.body

 const newProjet = new Projet({
  owner :req.user._id,
  nom:nom,
  image: image,
  description : description,
  categorie:categorie,
  montant : Montant + ' CFA'
 })
 try{
  const result= await newProjet.save()
  console.log(result)
 }catch(err){
  console.log(err)
 }
 res.send(true)


});


//my projects routes

app.get("/myProjects", async (req, res) => {
  const owner = req.user._id

  try{
    const projet = await Projet.find( {owner : owner})
    res.json(projet)
  }catch(err){
    console.log(err)
  }
});

// File uploads route
app.post("/uploads", async (req, res, next) => {
  try {
    const { description, address } = req.body;
    const ownerid = req.user._id;

    // Update organization fields
    const updatedOrga = await Organisation.findByIdAndUpdate(
      ownerid,
      {
        adresse: address,
        description: description,
      },
      { new: true }
    );

    if (!updatedOrga) {
      return res.status(404).send("Organization not found.");
    }

    const newDemande = new Demande({
      ownerName: updatedOrga.nom_organisation,
      ownerId: ownerid,
      description: description,
      adresse: address,
      //file1: files[0].filename,
      //file2: files[1].filename,
    });

    const result = await newDemande.save();
    console.log(result);

    res.send("Data saved successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while saving the data.");
  }
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
