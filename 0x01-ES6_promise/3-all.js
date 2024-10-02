import { createUser, uploadPhoto } from './utils.js';

export default function handleProfileSignup() {
  // handles multiple promises at once
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const photoResponse = results[0];
      const userResponse = results[1];
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
