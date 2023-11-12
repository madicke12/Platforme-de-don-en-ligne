// netlify-functions/creer.js
import mongoose from 'mongoose';
import { Projet } from '../../shared/schema.js';
import passport from 'passport';
const pass='madicke17'
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

const ensureAuthenticated = (event) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user) => {
      if (err || !user) {
        reject(new Error('Unauthorized'));
      } else {
        resolve(user);
      }
    })(event);
  });
};

exports.handler = async (event, context) => {
  try {
    await ensureAuthenticated(event);

    const { Montant, categorie, nom, description, image, date_cloture } = JSON.parse(event.body);

    const newProjet = new Projet({
      owner: event.user._id,
      nom: nom,
      image: image,
      description: description,
      categorie: categorie,
      montant: Montant,
      date_cloture: date_cloture.toString().substring(0, 10),
    });

    await newProjet.save();

    return {
      statusCode: 200,
      body: JSON.stringify(true),
    };
  } catch (error) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Unauthorized' }),
    };
  }
};
