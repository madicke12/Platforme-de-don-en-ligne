import passport from 'passport';
import { myfunction } from '../../shared/passport'; // Adjust the path based on your project structure

// Initialize passport
myfunction(passport);

export async function handler(event) {
  // Ensure only POST requests are allowed
  // if (event.httpMethod !== 'POST') {
  //   return {
  //     statusCode: 405,
  //     body: JSON.stringify({ message: 'Method Not Allowed' }),
  //   };
  // }

  // Parse the request body
  const requestBody = JSON.parse(event.body);

  // Create an Express-like request and response object
  const req = {
    method: 'POST',
    body: requestBody,
    headers: event.headers,
    // ... add other properties as needed
  };

  const res = {
    status: (code) => ({
      send: (body) => ({
        statusCode: code,
        body: JSON.stringify(body),
      }),
    }),
  };

  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        reject({
          statusCode: 500,
          body: JSON.stringify({ message: 'Internal Server Error' }),
        });
      }

      if (user) {
        resolve(res.status(200).send(true));
      } else {
        resolve(res.status(200).send(false));
      }
    })(req, res, () => {});
  });
}
