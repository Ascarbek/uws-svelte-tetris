import { TCommonResponse } from '../../lib/SocketMessageShapes.js';
import { TDispatchItem } from '../../shapes/DispatchItems.js';
import { TSignInRequest } from '../routes/sign-in-route.js';

export const signInHandler: (
  params: TSignInRequest,
  dispatch: (item: TDispatchItem) => void
) => Promise<TCommonResponse> = async ({ username, password }, dispatch) => {
  return {
    success: true,
  };
};
