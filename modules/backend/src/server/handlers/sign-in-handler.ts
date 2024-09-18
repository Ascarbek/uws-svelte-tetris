import { TDispatchItem } from '../../shapes/DispatchItems.js';
import { TSignInRequest, TSignInResponse } from '../routes/sign-in-shapes.js';
import { newAccessToken } from '../../app/user/newAccessToken.js';
import { authUser } from '../../app/user/authUser.js';
import { getUserByUsername } from '../../database/user/getUserByUsername.js';

const errorResponse: TSignInResponse = {
  success: false,
  error: 'incorrect username or password',
};

export const signInHandler: (
  params: TSignInRequest,
  dispatch: (item: TDispatchItem) => void
) => Promise<TSignInResponse> = async ({ username, password }, dispatch) => {
  const dbUserResp = await getUserByUsername({ username });
  if (!dbUserResp.success) {
    return errorResponse;
  }
  const { dbUser } = dbUserResp;

  const resp = authUser({ input: { username, password }, dbUser });

  switch (resp.result) {
    case 'INCORRECT_INPUT': {
      return errorResponse;
    }
    case 'AUTHENTICATED': {
      const jwt = newAccessToken(resp.userId);
      return {
        success: true,
        data: {
          jwt,
          username,
        },
      };
    }
  }
};
