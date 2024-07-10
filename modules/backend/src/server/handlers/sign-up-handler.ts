import { TCommonResponse, TDispatch, TSignUpRequest } from '@split-tetris/types';

export const signUpHandler: (params: TSignUpRequest, dispatch: TDispatch) => Promise<TCommonResponse> = async (
  { username, password },
  dispatch
) => {
  return {
    success: true,
  };
};
