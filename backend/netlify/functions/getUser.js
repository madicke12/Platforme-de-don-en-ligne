// netlify-functions/getUser.js
import passport from 'passport';

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

    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (error) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Unauthorized' }),
    };
  }
};
