import { TSocketMessageRoute, commonResponseShape } from '../../lib/SocketMessageShapes.js';
import { signUpHandler } from '../handlers/sign-up-handler.js';
import { signUpRequestShape } from './sign-up-shapes.js';

export const signUpRoute: TSocketMessageRoute = {
  input: signUpRequestShape,
  output: commonResponseShape,
  handler: signUpHandler,
};
