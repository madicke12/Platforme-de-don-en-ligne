import express from "express";
import cors from "cors";
import passport from "passport";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import bodyParser from "body-parser";
import session from "express-session";
import mongoose from "mongoose";
import { myfunction } from "./passport.js";
import { Demande ,Donateur ,Projet ,Organisation ,Don ,Init} from "./shared/schema.js";

const pass = process.env["Mongo_password"];
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

app.post("/creer", async (req, res) => {
  const { Montant, categorie, nom, description, image ,date_cloture} = req.body;
  console.log(date_cloture)
  const newProjet = new Projet({
    owner: req.user._id,
    nom: nom,
    image: image,
    description: description,
    categorie: categorie,
    montant: Montant,
    date_cloture:date_cloture.toString().substring(0,10)
    
  });
  try {
    const result = await newProjet.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
  res.send(true);
});

//my projects routes

app.get("/myProjects", async (req, res) => {
  const owner = req.user._id;

  try {
    const projet = await Projet.find({ owner: owner });
    res.json(projet);
  } catch (err) {
    console.log(err);
  }
});

// File uploads route
app.post("/uploads", async (req, res, next) => {
  try {
    const { description, address, file1, file2 } = req.body;
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
      file1: file1,
      file2: file2,
      isApproved : false,
      isPending:true
   
    });

    const result = await newDemande.save();
    console.log(result);

    res.send("Data saved successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while saving the data.");
  }
});
app.get("/projets", async (req, res) => {
  try {
    const projets = await Projet.find();
    res.json(projets);
  } catch (err) {
    console.log(err);
  }
});

app.post('/projet',async(req,res)=>{
  const {projetId} = req.body
  try{
    const projet = await Projet.findOne({_id:projetId})
    res.json(projet)
  }catch(err){
    console.log(err)
  }
})


app.post("/initiate",async(req , res)=>{
  const project = req.body
  console.log(project)
  try{
    const newInitiate = new Init({
      Id_donateur: req.user._id,
      Id_organisation : project.project.owner,
      Id_projet: project.project._id
    })

    const result= await newInitiate.save()
    console.log(result)
  }
  catch(err){
    console.log(err)
  }
})
app.post("/donate", async (req, res) => {
  const init = await Init.findOne({Id_donateur: req.user._id})
  const {montant , NumeroCompte , paymentMethod} = req.body
  const organisation= await Organisation.findById({_id:init.Id_organisation}) 
  const currentDate = new Date().toISOString();
  const formattedDate = currentDate.substring(0, 10)
  try{
    const newDon = new Don({
      Id_donateur: init.Id_donateur ,
      Id_organisation:init.Id_organisation ,
      Id_projet:init.Id_projet,
      montant: montant,
      paymentMethod:paymentMethod,
      NumeroCompte: NumeroCompte,
      date: formattedDate,
      organisation: organisation.nom_organisation
    })

    const result = await newDon.save()
    await Init.deleteMany({Id_donateur:init.Id_donateur})
    console.log(result)
  }catch(err){
    console.log(err)
  }


});


app.get("/admin/pending-requests", async (req, res) => {
  try {
    const PendingRequest = await Demande.find({ isPending: true });
    res.json(PendingRequest);
  } catch (err) {
    console.log(err);
  }
});

app.post("/admin/approve", async (req, res) => {
  console.log('aa')
  const { requestId } = req.body;
console.log(req.body)
  try {
    const result = await Demande.findByIdAndUpdate(
      requestId, 
    {
      isApproved: true,
      isPending: false,
    },{new:true});
    console.log(result)
  } catch (err) {
    console.log(err);
  }
});

app.post("/admin/unapprove", async (req, res) => {
  const { requestId } = req.body;
  try {
    const result = await Demande.findByIdAndUpdate(requestId, {
      isApproved: false,
      isPending: false,
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/admin/approved-Requests", async (req, res) => {
  try {
    const ApprovedRequest = await Demande.find(
      { isApproved: true },
      { isPending: false }
    );
    res.json(ApprovedRequest);
  } catch (err) {
    console.log(err);
  }
});

app.get("/admin/unapproved-Request", async (req, res) => {
  try {
    const unapprovedRequest = await Demande.find(
      { isApproved: false },
      { isPending: false }
    );
    res.json(unapprovedRequest);
  } catch (err) {
    console.log(err);
  }
});

app.post("/projet/update",async(req,res)=>{
  const {Montant, categorie, nom, description, image ,_id ,date_cloture} = req.body
  console.log(date_cloture)
try{
  const result = await Projet.findByIdAndUpdate(_id, {
    nom: nom,
    image: image,
    description: description,
    categorie: categorie,
    montant: Montant + " CFA",
    date_cloture:date_cloture
  });
  console.log(result)
}catch(err){
  console.log(err)
}


})

app.post("/projet/delete",async(req,res)=>{
  const {projetID} = req.body
  try{
    await Projet.findByIdAndDelete({_id:projetID})
  }catch(err){
    console.log(err)
  }

})

app.get("/dons/historique",async(req,res)=>{
  const userId= req.user._id

  try{
    const historique = await Don.find({Id_donateur:userId})
    res.json(historique)
  }catch(err){
    console.log(err)
  }
})

app.post("/updateProfil",async(req,res)=>{
  const userId= req.user._id
  const {prenom ,nom ,username ,telephone} = req.body
  console.log(prenom ,nom ,username ,telephone)
  try{
    await Donateur.findByIdAndUpdate(
      userId,
      {
        prenom:prenom,
        nom: nom,
        telephone: telephone,
        username:username,
      },
  )}catch(err){
    console.log(err)
  }
})

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
