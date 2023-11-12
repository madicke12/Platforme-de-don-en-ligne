// netlify-functions/register.js
import { Organisation, Donateur } from '../../shared/schema';
import bcrypt from 'bcryptjs';

exports.handler = async function (event, context) {
  const { type, email, telephone, password } = JSON.parse(event.body);

  try {
    if (type === 'Organisation') {
      const result = await Organisation.findOne({
        username: email,
        telephone: telephone,
      });

      if (result) {
        return {
          statusCode: 200,
          body: 'User already registered',
        };
      } else {
        const newOrga = new Organisation({
          nom_organisation: JSON.parse(event.body).organisation,
          username: email,
          telephone: telephone,
          password: await bcrypt.hash(password, 10),
          type: 'organisation',
        });

        await newOrga.save();

        return {
          statusCode: 200,
          body: 'User registered successfully',
        };
      }
    } else {
      const result = await Donateur.findOne({
        username: email,
        telephone: telephone,
      });

      if (result) {
        return {
          statusCode: 200,
          body: 'User already exists',
        };
      } else {
        const newDonateur = new Donateur({
          nom: JSON.parse(event.body).nom,
          prenom: JSON.parse(event.body).prenom,
          username: email,
          telephone: telephone,
          password: await bcrypt.hash(password, 10),
          type: 'donateur',
        });

        await newDonateur.save();

        return {
          statusCode: 200,
          body: 'User registered successfully',
        };
      }
    }
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: 'An error occurred while registering the user',
    };
  }
};
