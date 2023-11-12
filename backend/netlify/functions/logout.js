import passport from 'passport';
import { myfunction } from '../../shared/passport'; // Adjust the path based on your project structure

// Initialize passport
myfunction(passport);

export async function handler(event, context) {
  // Ensure only GET requests are allowed
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  return new Promise((resolve) => {
    passport.logout(() => {
      resolve({
        statusCode: 200,
        body: JSON.stringify('Successfully logged out'),
      });
    });
  });
}
