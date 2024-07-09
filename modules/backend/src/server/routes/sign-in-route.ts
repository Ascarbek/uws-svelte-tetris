import { TSocketMessageRoute, signInRequestShape, commonResponseShape } from '@split-tetris/types';
import { signInHandler } from '../handlers/sign-in-handler.js';

export const signInRoute: TSocketMessageRoute = {
  input: signInRequestShape,
  output: commonResponseShape,
  handler: signInHandler,
};
