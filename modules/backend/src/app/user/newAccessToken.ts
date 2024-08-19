import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../server/Environment.js';

export const newAccessToken = (user_id: number) => {
  return jwt.sign({ user_id }, JWT_SECRET || 'default', {
    expiresIn: 24 * 60 * 60,
  });
};
