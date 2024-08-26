import { TSocketMessageRoute } from '../../shapes/SocketMessageShapes';
import { signUpHandler } from '../handlers/sign-up-handler.js';
import { signUpRequestShape } from './sign-up-shapes.js';
import { commonResponseShape } from '../../shapes/Common.js';

export const signUpRoute: TSocketMessageRoute = {
  input: signUpRequestShape,
  output: commonResponseShape,
  handler: signUpHandler,
};
