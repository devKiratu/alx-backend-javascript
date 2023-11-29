import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const result = [];
      values.forEach((v) => {
        if (v.status === 'fulfilled') {
          result.push(v);
        } else if (v.status === 'rejected') {
          result.push({
            status: v.status,
            value: v.reason.message,
          });
        }
      });
      return result;
    });
}
