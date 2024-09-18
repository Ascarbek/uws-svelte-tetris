import { verifyPassword } from '../../lib/hash.js';
import { TDbUser } from '../../shapes/UserShapes.js';

export const authUser: (params: { input: { username: string; password: string }; dbUser: TDbUser }) =>
  | {
      result: 'INCORRECT_INPUT';
    }
  | {
      result: 'AUTHENTICATED';
      userId: number;
    } = ({ input, dbUser }) => {
  const { password } = input;
  const { salt, hash, id } = dbUser;

  if (verifyPassword(password, salt, hash)) {
    return { result: 'AUTHENTICATED', userId: id };
  } else {
    return { result: 'INCORRECT_INPUT' };
  }
};
