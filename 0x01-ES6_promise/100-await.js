import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    return {
      photo: await Promise.resolve(uploadPhoto()),
      user: await Promise.resolve(createUser()),
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
