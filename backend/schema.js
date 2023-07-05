import mongoose from "mongoose";

const organisationSchema = new mongoose.Schema({
  nom_organisation: String,
  username: String,
  telephone: Number,
  password: String,
  type : String,
  adresse: String,
});

const donateurSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  username: String,
  telephone: Number,
  password: String,
  type : String
});

const donSchema = new mongoose.Schema({
  Id_donateur: String,
  Id_organisation: String,
  montant: Number,
  date: Date,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});


const demandeValidationSchema = new mongoose.Schema({
  ownerName : String,
  ownerId: String,
  description : String,
  adresse: String,
  file1 : String,
  file2 : String
})

const projetSchema = new mongoose.Schema({
  owner :String,
  nom:String,
  image: String,
  description : String,
  montant : Number
})

export const Demande = mongoose.model("demande",demandeValidationSchema)
export const User = mongoose.model("User", userSchema);
export const Organisation = mongoose.model("Organisation", organisationSchema);
export const Donateur = mongoose.model("donateur", donateurSchema);
//export const dont = mongoose.model('dont',dontSchema)
export const Projet = mongoose.model('projet',projetSchema)
