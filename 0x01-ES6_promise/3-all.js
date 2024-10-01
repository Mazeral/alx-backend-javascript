import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const p1 = uploadPhoto();
  const p2 = createUser();
  // handles multiple promises at once
  Promise.all([p1, p2])
    .then((values) => {
      console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
    })
    .catch(new Error('Signup system offline'));
}
