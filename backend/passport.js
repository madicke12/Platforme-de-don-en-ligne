import bcrypt from 'bcryptjs'
import { Donateur } from "./shared/schema.js";
import { Strategy } from "passport-local";
import { Organisation } from "./shared/schema.js";
import { Admnin } from './shared/schema.js';

export function myfunction(passport) {
  passport.use(
    new Strategy(async (username, password, done) => {
      try {
        const orgaResult = await Organisation.findOne({
          username: username,
        });
        if (orgaResult) {
          try {
            const passwordMatch = await bcrypt.compare(
              password,
              orgaResult.password
            );
          
            if (passwordMatch) {
              return done(null, orgaResult);
            } else {
              return done(null, false);
            }
          } catch (err) {
            throw err;
          }
        } else {
          const donateurResult = await Donateur.findOne({
            username: username,
          });
          if (donateurResult) {
            try {
              const passwordMatch = await bcrypt.compare(
                password,
                donateurResult.password
              );
              if (passwordMatch) {
                return done(null, donateurResult);
              } else {
                return done(null, false);
              }
            } catch (err) {
              throw err;
            }
          } else {
            return done(null, false);
          }
          
        } 
        
      } catch (error) {
        throw error;
      }
    })
  );

  passport.serializeUser((user, callback) => {
    callback(null, user.id);
  });

  passport.deserializeUser(async (id, cb) => {
    try {
      const organisation = await Organisation.findOne({ _id: id });
      if (organisation) {
        cb(null, organisation);
      } else {
        const donateur = await Donateur.findOne({ _id: id });
        cb(null, donateur);
      }
    } catch (err) {
      cb(err, null);
    }
  });
}
