import mongoose from "mongoose";

const organisationSchema = new mongoose.Schema({
  nom_organisation: String,
  username: String,
  telephone: Number,
  password: String,
  type : String
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

export const User = mongoose.model("User", userSchema);
export const Organisation = mongoose.model("Organisation", organisationSchema);
export const donateur = mongoose.model("donateur", donateurSchema);
