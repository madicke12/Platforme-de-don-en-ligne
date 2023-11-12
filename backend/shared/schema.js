import mongoose, { mongo } from "mongoose";

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
  Id_projet:String,
  montant: String,
  paymentMethod:String,
  NumeroCompte: String,
  date: Date,
  organisation:String
});

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
  role:String
});


const demandeValidationSchema = new mongoose.Schema({
  ownerName : String,
  ownerId: String,
  description : String,
  adresse: String,
  file1 : String,
  file2 : String,
  isApproved : Boolean,
  isPending: Boolean
})

const projetSchema = new mongoose.Schema({
  owner :String,
  nom:String,
  image: String,
  description : String,
  categorie:String,
  montant : Number,
  receuilli:{type:Number ,default:0},
  date_cloture:String
})

const initSchema = new mongoose.Schema({
  Id_donateur: String,
  Id_organisation: String,
  Id_projet:String

})



export const Demande = mongoose.model("demande",demandeValidationSchema)
export const Admnin = mongoose.model("Admin", adminSchema);
export const Organisation = mongoose.model("Organisation", organisationSchema);
export const Donateur = mongoose.model("donateur", donateurSchema);
//export const dont = mongoose.model('dont',dontSchema)
export const Projet = mongoose.model('projet',projetSchema)
export const Don = mongoose.model('don',donSchema)
export const Init = mongoose.model('Init',initSchema)