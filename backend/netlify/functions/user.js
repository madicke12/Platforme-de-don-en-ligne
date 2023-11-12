import passport from 'passport';
import { myfunction } from '../../shared/passport';

// Initialize passport
myfunction(passport);

export async function handler(event, context) {
  // Ensure only POST requests are allowed
  // if (event.httpMethod !== 'POST') {
  //   return {
  //     statusCode: 405,
  //     body: JSON.stringify({ message: 'Method Not Allowed' }),
  //   };
  // }

  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        reject({
          statusCode: 500,
          body: JSON.stringify({ message: 'Internal Server Error' }),
        });
      }

      if (user) {
        resolve({
          statusCode: 200,
          body: JSON.stringify({ connected: true }),
        });
      } else {
        // Check if the body is not empty before attempting to parse
        const body = event.body ? JSON.parse(event.body) : null;
        const errorMessage = body?.message || 'Email or password incorrect';

        resolve({
          statusCode: 200,
          body: JSON.stringify({ connected: false, message: errorMessage }),
        });
      }
    })(event, context, () => {});
  });
}
