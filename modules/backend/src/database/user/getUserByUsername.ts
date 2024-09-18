import { dbUserShape, TDbUser } from '../../shapes/UserShapes.js';
import db from '../db.js';

type ReturnType =
  | {
      success: true;
      dbUser: TDbUser;
    }
  | {
      success: false;
      error: string;
    };

export const getUserByUsername: (params: { username: string }) => Promise<ReturnType> = async ({ username }) => {
  const rowRaw = await db('user').where({ username }).first();
  if (!rowRaw) {
    return {
      success: false,
      error: 'getUserByUsername: user with given username was not found',
    };
  }
  try {
    return {
      success: true,
      dbUser: dbUserShape.parse(rowRaw),
    };
  } catch (e) {
    console.log('getUserByUsername: runtime parse error');
    console.error(e);
    return {
      success: false,
      error: 'getUserByUsername: runtime parse error',
    };
  }
};
