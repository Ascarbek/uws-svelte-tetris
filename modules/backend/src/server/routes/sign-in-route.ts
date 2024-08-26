import { TSocketMessageRoute } from '../../lib/SocketMessageShapes.js';
import { signInHandler } from '../handlers/sign-in-handler.js';
import { signInRequestShape, signInResponseShape } from './sign-in-shapes.js';

export const signInRoute: TSocketMessageRoute = {
  input: signInRequestShape,
  output: signInResponseShape,
  handler: signInHandler,
};
