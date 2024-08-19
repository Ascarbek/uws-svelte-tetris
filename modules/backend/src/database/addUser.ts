import { TCommonResponse } from '../lib/SocketMessageShapes.js';
import db from './db.js';
import { hashPassword } from '../lib/hash.js';

export const addUser: (params: { username: string; password: string }) => Promise<TCommonResponse> = async ({
  username,
  password,
}) => {
  try {
    const { hash, salt } = hashPassword(password);

    await db('user').insert({
      username,
      hash,
      salt,
    });

    return Promise.resolve<TCommonResponse>({
      success: true,
    });
  } catch (e) {
    console.error(e);

    return Promise.resolve<TCommonResponse>({
      success: false,
      error: 'addUser: runtime error',
    });
  }
};
