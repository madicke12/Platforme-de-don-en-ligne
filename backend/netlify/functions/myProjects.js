// netlify-functions/myProjects.js
import mongoose from 'mongoose';
import { Projet } from './shared/schema.js';
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
    const user = await ensureAuthenticated(event);

    const owner = user._id;

    const projet = await Projet.find({ owner: owner });

    return {
      statusCode: 200,
      body: JSON.stringify(projet),
    };
  } catch (error) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Unauthorized' }),
    };
  }
};
