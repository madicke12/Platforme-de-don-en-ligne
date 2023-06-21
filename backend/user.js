import mongoose from "mongoose";

const organisationSchema = new mongoose.Schema({
  nom_organisation: String,
  username: String,
  telephone: Number,
  password: String,
});

export const Organisation = mongoose.model("Organisation", organisationSchema);


const donateurSchema = new mongoose.Schema({
    nom:String,
    prenom: String,
    username: String,
    telephone: Number,
    password: String

})

export const donateur = mongoose.model("donateur", donateurSchema)



const userSchema= new mongoose.Schema({
    username:String,
    password:String
})

export const User = mongoose.model("User" ,userSchema)