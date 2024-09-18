import { dbUserShape, TDbUser } from '../../shapes/UserShapes.js';
import db from '../db.js';

export const getUserByUsername: (params: { username: string }) => Promise<TDbUser | null> = async ({ username }) => {
  const rowRaw = await db('user').where({ username }).first();
  if (!rowRaw) {
    return null;
  }
  try {
    return dbUserShape.parse(rowRaw);
  } catch (e) {
    console.log('getUserByUsername: runtime parse error');
    console.error(e);
    return null;
  }
};
