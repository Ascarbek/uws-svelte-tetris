import { TCommonResponse, TDispatchItem, TSignInRequest } from '@split-tetris/types';

export const signInHandler: (
  params: TSignInRequest,
  dispatch: (item: TDispatchItem) => void
) => Promise<TCommonResponse> = async ({ username, password }, dispatch) => {
  return {
    success: true,
  };
};
