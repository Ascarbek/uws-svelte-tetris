import db from '../db.js';

type TReturnType =
  | {
      success: true;
      data: {
        username: string;
      };
    }
  | {
      success: false;
      error: string;
    };

export const getUsernameById: (params: { id: number }) => Promise<TReturnType> = async ({ id }) => {
  try {
    const raw = await db('user').where('id', id).first();
    if (!raw) {
      return {
        success: false,
        error: 'getUserById: user by given id was not found',
      };
    }
    return {
      success: true,
      data: {
        username: raw.username as string,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      success: false,
      error: 'getUserById: runtime error',
    };
  }
};
