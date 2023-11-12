import passport from 'passport';
import { myfunction } from '../../shared/passport'; 


myfunction(passport);

export async function handler(event, context) {
  
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        reject({
          statusCode: 500,
          body: JSON.stringify({ message: 'Internal Server Error' }),
        });
      }

      if (!user) {
        resolve({
          statusCode: 200,
          body: JSON.stringify({
            message: 'Email or password incorrect',
            status: false,
          }),
        });
      } else {
        event.requestContext = { authorizer: { user } }; 
        resolve({
          statusCode: 200,
          body: JSON.stringify({
            connected: true,
          }),
        });
      }
    })(event, context, () => {});
  });
}
