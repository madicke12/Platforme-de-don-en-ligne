import bcrypt from "bcryptjs";
import {  donateur } from "./user.js";
import { Strategy } from "passport-local";
import { Organisation } from "./user.js";
import { response } from "express";

export function myfunction(passport) {

        passport.use(
          new Strategy(async (username, password, done) => {
            try {
              const orgaResult = await Organisation.findOne({
                username: username,
              });
              if (orgaResult) {
                try {
                  const response = await bcrypt.compare(
                    password,
                    orgaResult.password 
                  );
                  if (response) return done(null, orgaResult);
                  else return done(null, false);
                } catch (err) {
                  throw err;
                }
              } else {
                const donateurResult = await donateur.findOne({
                  username: username,
                });
                if (donateurResult) {
                  try {
                    const response = await bcrypt.compare(
                      password,
                      donateurResult.password 
                    );
                    if (response) return done(null, donateurResult);
                    else return done(null, false);
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
                const Donateur = await donateur.findOne({ _id: id });
                cb(null, Donateur);
              }
            } catch (err) {
              cb(err, null);
            }
          });
}
       
        
        
        
        
        
        
        
  
  
  
  
  
  

