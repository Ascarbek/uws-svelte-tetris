import { TDispatch } from '../../shapes/DispatchItems.js';
import { TCommonResponse } from '../../lib/SocketMessageShapes.js';
import { TSignUpRequest } from '../routes/sign-up-route.js';
import { addUser } from '../../database/addUser.js';

export const signUpHandler: (params: TSignUpRequest, dispatch: TDispatch) => Promise<TCommonResponse> = async (
  { username, password },
  dispatch
) => {
  return addUser({ username, password });
};
