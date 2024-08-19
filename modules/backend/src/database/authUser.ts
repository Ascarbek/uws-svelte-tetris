import { verifyPassword } from '../lib/hash.js';
import db from './db.js';
import { z } from 'zod';

export const authUser: (params: { username: string; password: string }) => Promise<
  | {
      result: 'INCORRECT_INPUT' | 'RUNTIME_ERROR';
    }
  | {
      result: 'AUTHENTICATED';
      user_id: number;
    }
> = async ({ username, password }) => {
  try {
    const rowRaw = await db('user').where({ username }).first();

    const row = z
      .object({
        id: z.number(),
        username: z.string(),
        hash: z.string(),
        salt: z.string(),
      })
      .parse(rowRaw);

    if (!row) {
      return { result: 'INCORRECT_INPUT' };
    }

    if (verifyPassword(password, row.salt, row.hash)) {
      return { result: 'AUTHENTICATED', user_id: row.id };
    } else {
      return { result: 'INCORRECT_INPUT' };
    }
  } catch (e) {
    console.error(e);

    return { result: 'RUNTIME_ERROR' };
  }
};
