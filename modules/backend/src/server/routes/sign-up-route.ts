import { commonResponseShape, signUpRequestShape, TSocketMessageRoute } from '@split-tetris/types';
import { signUpHandler } from '../handlers/sign-up-handler.js';

export const signUpRoute: TSocketMessageRoute = {
  input: signUpRequestShape,
  output: commonResponseShape,
  handler: signUpHandler,
};
