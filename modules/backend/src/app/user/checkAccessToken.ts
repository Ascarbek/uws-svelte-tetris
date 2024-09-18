import jsonwebtoken from 'jsonwebtoken';
import { JWT_SECRET } from '../../server/Environment.js';

export const checkAccessToken: (jwt: string) => number | null = (jwt: string) => {
  try {
    const payload: any = jsonwebtoken.verify(jwt, JWT_SECRET || 'default');
    if (payload.user_id) {
      return payload.user_id as number;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};
