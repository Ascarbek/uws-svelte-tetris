import { TCommonResponse } from '../../lib/SocketMessageShapes.js';
import { TDispatchItem } from '../../shapes/DispatchItems.js';
import { TSignInRequest } from '../routes/sign-in-shapes.js';
import { authUser } from '../../database/authUser.js';
import { newAccessToken } from '../../app/user/newAccessToken.js';

export const signInHandler: (
  params: TSignInRequest,
  dispatch: (item: TDispatchItem) => void
) => Promise<TCommonResponse> = async ({ username, password }, dispatch) => {
  const resp = await authUser({ username, password });
  switch (resp.result) {
    case 'INCORRECT_INPUT': {
      return {
        success: false,
        error: 'incorrect username or password',
      };
    }
    case 'AUTHENTICATED': {
      const jwt = newAccessToken(resp.user_id);
      return {
        success: true,
        data: {
          jwt,
        },
      };
    }
    case 'RUNTIME_ERROR': {
      return {
        success: false,
        error: 'runtime error',
      };
    }
  }
};
